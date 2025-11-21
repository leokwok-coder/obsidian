import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      backdrop-blur-md 
      bg-white/10 
      border border-white/20 
      rounded-xl 
      shadow-2xl
      hover:shadow-accent/10
      transition-all
      duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;