import React from 'react';

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
    <div className={`
    relative overflow-hidden
    bg-[#111827]/90 md:backdrop-blur-sm 
    border border-white/5 
    rounded-2xl p-6 
    shadow-lg
    transition-all duration-300
    ${hoverEffect ? 'hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group' : ''}
    ${className}
  `}>
        {children}
    </div>
);

export default GlassCard;
