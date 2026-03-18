import React, { useEffect, useRef, useState } from 'react';
import './AnimatedOutcomes.css';

const AnimatedOutcomes = ({ outcomes }) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the item is visible
        rootMargin: '0px 0px -50px 0px', // Slightly before reaching the bottom
      }
    );

    const elements = containerRef.current?.querySelectorAll('.outcome-item-animated');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="animated-outcomes-container" ref={containerRef}>
      {outcomes.map((outcome, i) => (
        <div 
          key={i} 
          data-index={i}
          className={`outcome-item-animated ${visibleItems.has(i) ? 'is-visible' : ''}`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div className="cyber-check">✓</div>
          <p className="outcome-text text-gray-300">{outcome}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedOutcomes;
