import React from 'react';

const SecondaryButton = ({ children, className = "", onClick }) => (
    <button
        onClick={onClick}
        className={`
    rounded-[14px] px-8 py-2.5 font-bold text-orange-600
    border-2 border-orange-600 bg-transparent hover:bg-orange-50
    transition-all duration-200
    flex items-center justify-center gap-2
    ${className}
  `}>
        {children}
    </button>
);

export default SecondaryButton;
