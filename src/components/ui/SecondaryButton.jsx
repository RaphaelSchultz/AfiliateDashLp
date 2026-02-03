import React from 'react';

const SecondaryButton = ({ children, className = "" }) => (
    <button className={`
    rounded-xl px-8 py-4 font-bold text-white
    border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/30
    transition-all duration-300
    flex items-center justify-center gap-2
    ${className}
  `}>
        {children}
    </button>
);

export default SecondaryButton;
