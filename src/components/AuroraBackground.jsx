import React from 'react';
import './AuroraBackground.css';

/**
 * AuroraBackground – pure CSS aurora effect using Dekode brand colours.
 * Replaces the Tailwind/shadcn aceternity component since this project
 * uses Vite + Vanilla CSS, not Next.js/Tailwind.
 */
export const AuroraBackground = ({ children, showRadialGradient = true, className = '', style = {} }) => {
  return (
    <div
      className={`aurora-root ${className}`}
      style={style}
    >
      {/* Aurora layer */}
      <div className="aurora-inset" aria-hidden="true">
        <div
          className={`aurora-layer${showRadialGradient ? ' aurora-radial-mask' : ''}`}
        />
      </div>

      {/* Content */}
      <div className="aurora-content">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
