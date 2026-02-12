import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export const Container = ({ children, className = '' }) => (
  <div className={`container ${className}`}>{children}</div>
);

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}) => (
  <button
    className={`button button--${variant} button--${size} ${
      fullWidth ? 'button--full' : ''
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const SectionTitle = ({ children, align = 'left', className = '' }) => (
  <h2 className={`section-title section-title--${align} ${className}`}>
    {children}
  </h2>
);

export const StatCard = ({ icon, value, label }) => (
  <div className="stat-card">
    <div className="stat-card__icon">{icon}</div>
    <div className="stat-card__value">{value}</div>
    <div className="stat-card__label">{label}</div>
  </div>
);

export const ProgressBar = ({ value, max, animated = false }) => {
  const [width, setWidth] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (animated && isInView) {
      const timer = setTimeout(() => setWidth(percentage), 100);
      return () => clearTimeout(timer);
    } else if (!animated) {
      setWidth(percentage);
    }
  }, [percentage, animated, isInView]);

  return (
    <div className="progress-bar" ref={ref}>
      <div
        className="progress-bar__fill"
        style={{
          width: `${width}%`,
          transition: animated ? 'width 1.5s ease-out' : 'none',
        }}
      />
    </div>
  );
};