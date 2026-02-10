import { Zap } from 'lucide-react';

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => (
    <button
        onClick={onClick}
        className={`
      relative group overflow-hidden rounded-[14px] px-8 py-2.5 font-bold text-white
      bg-orange-600 hover:bg-orange-700 border-2 border-transparent
      shadow-orange-glow hover:shadow-soft-xl hover:-translate-y-0.5
      transition-all duration-200 ease-out
      flex items-center justify-center gap-2
      ${className}
    `}
    >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

        <span className="relative flex items-center gap-2 z-20">
            <Zap className="w-4 h-4 fill-white" />
            {children}
        </span>
    </button>
);

export default PrimaryButton;
