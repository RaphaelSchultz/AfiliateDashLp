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
                shadow-orange-glow hover:shadow-soft-xl hover:-translate-y-0.5
                transition-all duration-200 ease-out
                flex items-center justify-center gap-2
                h-[46px]
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
                        className={`w-4 h-4 fill-white absolute transition-all duration-500 ${
                            isHovered ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                        }`}
                    />
                    {/* Rocket icon - fades in on hover with shake */}
                    <Rocket
                        className={`w-5 h-5 absolute transition-all duration-500 ${
                            isHovered ? 'opacity-100 scale-100 -rotate-45 -translate-y-0.5 animate-[rocketShake_0.4s_ease-in-out_infinite]' : 'opacity-0 scale-0 rotate-0'
                        }`}
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
