import React from "react";
import { World } from "./ui/Globe";

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#111118", // dark charcoal — visible but not black
    showAtmosphere: false, // Disabled to reduce rendering lag
    atmosphereColor: "#2a4a8a",
    atmosphereAltitude: 0.13,
    emissive: "#111118",
    emissiveIntensity: 0.1,
    shininess: 0.7,
    polygonColor: "rgba(255,255,255,0.65)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 1, // Reduced to 1 for performance
    initialPosition: { lat: -5, lng: 105 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const YELLOW = "#FEB611"; // India & Australia
  const RED    = "#e03030"; // all others

  // Coordinates:
  // Canada: 56.13, -106.34
  // UAE: 23.42, 53.84
  // Australia: -25.27, 133.77
  // India: 20.59, 78.96
  // UK: 55.37, -3.43

  // Each location gets an explicit dot color
  const locations = [
    { lat: 56.13,  lng: -106.34, color: RED    }, // Canada
    { lat: 55.37,  lng: -3.43,   color: RED    }, // UK
    { lat: 23.42,  lng: 53.84,   color: RED    }, // UAE
    { lat: 20.59,  lng: 78.96,   color: YELLOW }, // India
    { lat: -25.27, lng: 133.77,  color: YELLOW }, // Australia
  ];

  // Arcs: color is determined by the destination dot
  const arcs = [];
  for (let i = 0; i < locations.length - 1; i++) {
    arcs.push({
      order: i + 1,
      startLat: locations[i].lat,
      startLng: locations[i].lng,
      endLat: locations[i + 1].lat,
      endLng: locations[i + 1].lng,
      arcAlt: 0.3,
      color: locations[i + 1].color,
    });
  }
  // Connect Australia back to Canada
  arcs.push({
    order: locations.length,
    startLat: locations[locations.length - 1].lat,
    startLng: locations[locations.length - 1].lng,
    endLat: locations[0].lat,
    endLng: locations[0].lng,
    arcAlt: 0.4,
    color: locations[0].color,
  });

  return (
    <div className="globe-interactive-container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'grab' }}>
      <div style={{ width: '100%', aspectRatio: '1 / 1', maxWidth: '800px', maxHeight: '800px' }}>
        <World data={arcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
