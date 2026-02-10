import React from 'react';

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => (
    <button
        onClick={onClick}
        className={`
      relative group overflow-hidden rounded-[14px] px-8 py-2.5 font-bold text-white
      bg-orange-600 hover:bg-orange-700 border-2 border-transparent
      shadow-orange-glow hover:shadow-soft-xl hover:-translate-y-0.5
      transition-all duration-200 ease-out
      flex items-center justify-center gap-2
      ${pulsing ? 'animate-pulse' : ''}
      ${className}
    `}
    >
        <span className="relative flex items-center gap-2">{children}</span>
    </button>
);

export default PrimaryButton;
