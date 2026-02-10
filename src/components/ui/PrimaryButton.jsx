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
                relative group overflow-hidden rounded-[14px] px-10 py-4 font-bold text-white text-base
                bg-orange-600 hover:bg-orange-700 border-2 border-transparent
                shadow-orange-glow hover:shadow-soft-xl hover:-translate-y-0.5
                transition-all duration-200 ease-out
                flex items-center justify-center gap-2
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
                    {/* Rocket icon - fades in on hover */}
                    <Rocket
                        className={`w-5 h-5 fill-white/20 absolute transition-all duration-500 ${
                            isHovered ? 'opacity-100 scale-100 -rotate-45 -translate-y-0.5' : 'opacity-0 scale-0 rotate-0'
                        }`}
                    />
                </span>
                {children}
            </span>

            {/* Fire particles on hover */}
            {isHovered && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <div className="flex gap-0.5 items-end animate-fade-in">
                        <span className="w-1 h-3 bg-gradient-to-t from-yellow-500 to-orange-400 rounded-full animate-[fireFlicker_0.4s_ease-in-out_infinite_alternate] opacity-80" />
                        <span className="w-1.5 h-4 bg-gradient-to-t from-red-500 to-yellow-400 rounded-full animate-[fireFlicker_0.3s_ease-in-out_infinite_alternate-reverse] opacity-90" />
                        <span className="w-1 h-2.5 bg-gradient-to-t from-yellow-500 to-orange-300 rounded-full animate-[fireFlicker_0.5s_ease-in-out_infinite_alternate] opacity-70" />
                    </div>
                </div>
            )}
        </button>
    );
};

export default PrimaryButton;
