"use client";

import React, { useRef, useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}) {
  const svgRef = useRef(null);
  
  // 1. Create the map image
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const svgMap = map.getSVG({
    radius: 0.22,
    color: "rgba(255, 255, 255, 0.25)",
    shape: "circle",
    backgroundColor: "transparent",
  });

  // 2. Projection math
  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // 3. Deduplicate points for rendering nodes/labels
  const nodes = useMemo(() => {
    const mapNodes = new Map();
    dots.forEach(dot => {
      [dot.start, dot.end].forEach(pt => {
        const key = `${pt.lat.toFixed(4)},${pt.lng.toFixed(4)}`;
        if (!mapNodes.has(key)) {
          mapNodes.set(key, { ...pt, color: dot.color || lineColor });
        } else if (pt.label) {
           mapNodes.set(key, { ...mapNodes.get(key), label: pt.label });
        }
      });
    });
    return Array.from(mapNodes.values());
  }, [dots, lineColor]);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      aspectRatio: '2/1', 
      background: 'transparent',
      borderRadius: '12px',
      overflow: 'visible' 
    }}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'fill',
          pointerEvents: 'none',
          userSelect: 'none',
          maskImage: 'linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)'
        }}
        alt="world map"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none',
          userSelect: 'none',
          overflow: 'visible'
        }}
      >
        <defs>
          {dots.map((dot, i) => (
            <linearGradient key={`gradient-${i}`} id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" stopOpacity="0" />
              <stop offset="5%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={dot.color || lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* 1. Connections/Paths with Flowing Dotted Animation */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const pathD = createCurvedPath(startPoint, endPoint);
          const color = dot.color || lineColor;
          
          return (
            <g key={`path-group-${i}`}>
              {/* Base thin path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                strokeOpacity="0.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3 * i, ease: "easeOut" }}
              />
              
              {/* Flowing dotted line */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="1.8"
                strokeDasharray="4, 10"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 0, pathLength: 0 }}
                animate={{ strokeDashoffset: -100, pathLength: 1 }}
                transition={{
                   pathLength: { duration: 1.5, delay: 0.3 * i, ease: "easeOut" },
                   strokeDashoffset: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                style={{ 
                  filter: `drop-shadow(0 0 5px ${color})`, 
                  strokeOpacity: 0.7 
                }}
              />
            </g>
          );
        })}

        {/* 2. Nodes/Labels */}
        {nodes.map((node, i) => {
          const point = projectPoint(node.lat, node.lng);
          const color = node.color;
          
          return (
            <g key={`nodes-${i}`}>
              <circle cx={point.x} cy={point.y} r="3" fill={color} />
              <circle cx={point.x} cy={point.y} r="3" fill={color} opacity="0.5">
                <animate attributeName="r" from="3" to="10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              {node.label && (
                 <text 
                  x={point.x} 
                  y={point.y - 12} 
                  textAnchor="middle" 
                  style={{ fontSize: '10px', fontWeight: 'bold', fill: color, textShadow: '0 0 6px rgba(0,0,0,0.8)', letterSpacing: '0.05em' }}
                 >
                  {node.label}
                 </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
