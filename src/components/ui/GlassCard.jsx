import React from 'react';

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
    <div className={`
    relative overflow-hidden
    bg-white/80 dark:bg-slate-800/80 backdrop-blur-md
    border border-white/20 dark:border-slate-700/50
    rounded-2xl p-6 
    shadow-soft-lg
    transition-all duration-300
    ${hoverEffect ? 'hover:border-primary/20 hover:shadow-soft-xl hover:-translate-y-1' : ''}
    ${className}
  `}>
        {children}
    </div>
);

export default GlassCard;
