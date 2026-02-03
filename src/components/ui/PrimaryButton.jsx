import React from 'react';

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => (
    <button
        onClick={onClick}
        className={`
      relative group overflow-hidden rounded-xl px-8 py-4 font-bold text-white
      bg-gradient-to-r from-orange-600 to-red-600
      hover:from-orange-500 hover:to-red-500
      shadow-[0_4px_20px_rgba(249,115,22,0.3)]
      transition-all duration-300 transform hover:-translate-y-1
      flex items-center justify-center gap-2
      ${pulsing ? 'animate-pulse-slow' : ''}
      ${className}
    `}
    >
        <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12 -ml-4 w-[150%]" />
        <span className="relative flex items-center gap-2">{children}</span>
    </button>
);

export default PrimaryButton;
