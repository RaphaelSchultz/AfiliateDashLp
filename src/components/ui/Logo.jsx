import React from 'react';

const Logo = ({ className = "w-8 h-8", color = "text-primary" }) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} ${color}`}
        >
            {/* L-shaped Axis background/container - roughly matching the aesthetic */}
            <path
                d="M4 4V18C4 19.1046 4.89543 20 6 20H20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20" // Making the axis subtle or removed based on the clean flat look of the image, actually the image is filled bars.
            />
            {/* Re-doing to match the filled bars style exactly. It looks like 3 floating bars with rounded tops/bottoms or just bars. 
                Actually the reference image `media__...976` shows a thick L-axis and 3 bars usage.
                Let's stick to a clean bar chart icon.
             */}
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.1" />
            <path d="M7 17V10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 17V7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M17 17V12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
};

// Better match for the specific "Orange L-Shape + Bars" logo in the image
export const MGMLogoLike = ({ className = "w-10 h-10" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Main Shape: Rounded Square with Bar Chart cutouts or overlays */}
        {/* Actually, let's just draw the bars and the axis as a thick stroke for that "Bold" feel */}
        <path d="M8 8V28C8 30.2091 9.79086 32 12 32H32" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 24V18" stroke="#FF6B35" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M20 24V12" stroke="#FF6B35" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M26 24V16" stroke="#FF6B35" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
);

export default MGMLogoLike;
