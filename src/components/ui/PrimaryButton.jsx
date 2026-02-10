import { Zap, Rocket } from 'lucide-react';
import { useState } from 'react';

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                relative group overflow-hidden rounded-[14px] px-10 font-bold text-white text-base
                bg-orange-600 hover:bg-orange-700 border-2 border-transparent
                shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] hover:-translate-y-0.5 hover:scale-105
                transition-all duration-200 ease-out
                flex items-center justify-center gap-2
                h-[46px]
                animate-glowPulse
                ${className}
            `}
        >
            {/* Shimmer / Light Beam Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

            <span className="relative flex items-center gap-2 z-20">
                {/* Icon container with animation */}
                <span className="relative w-5 h-5 flex items-center justify-center">
                    {/* Zap icon - fades out and rotates on hover */}
                    <Zap
                        className={`w-4 h-4 absolute transition-all duration-500 ${
                            isHovered ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                        }`}
                    />
                    {/* Rocket icon - diagonal with vibration */}
                    <Rocket
                        className={`w-5 h-5 absolute ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            transform: 'rotate(0deg)',
                            animation: isHovered ? 'rocketShake 0.5s ease-in-out infinite' : 'none',
                            transition: 'opacity 0.5s',
                        }}
                        fill="none"
                        stroke="currentColor"
                    />
                </span>
                {children}
            </span>
        </button>
    );
};

export default PrimaryButton;
