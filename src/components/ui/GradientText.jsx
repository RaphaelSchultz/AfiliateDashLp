import React from 'react';

const GradientText = ({ children, className = "" }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 ${className}`}>
        {children}
    </span>
);

export default GradientText;
