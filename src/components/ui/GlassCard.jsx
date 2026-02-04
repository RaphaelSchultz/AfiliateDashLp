import React from 'react';

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
    <div className={`
    relative overflow-hidden
    bg-[#111827]/60 md:backdrop-blur-md
    border border-white/5 
    rounded-2xl p-6 
    shadow-lg
    transition-all duration-500
    ${hoverEffect ? 'hover:border-white/10 hover:bg-[#111827]/80 group' : ''}
    ${className}
  `}>
        {children}
    </div>
);

export default GlassCard;
