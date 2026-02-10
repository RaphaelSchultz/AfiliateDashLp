import React from 'react';

const SecondaryButton = ({ children, className = "", onClick }) => (
    <button
        onClick={onClick}
        className={`
    rounded-[14px] px-8 py-2.5 font-bold text-orange-600 dark:text-orange-500
    border-2 border-orange-600 dark:border-orange-500 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20
    transition-all duration-200
    hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]
    flex items-center justify-center gap-2
    ${className}
  `}>
        {children}
    </button>
);

export default SecondaryButton;
