import { Zap, Rocket } from 'lucide-react';
import { useState } from 'react';

const PrimaryButton = ({ children, className = "", onClick, pulsing = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`btn-primary ${className}`}
    >
      <span className="relative flex items-center gap-2 z-20 font-black tracking-wide">
        <span className="relative w-5 h-5 flex items-center justify-center">
          <Zap
            className={`w-4 h-4 absolute transition-all duration-500 ${isHovered ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
          />
          <Rocket
            className={`w-5 h-5 absolute ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{
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
