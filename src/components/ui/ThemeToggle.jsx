import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative h-7 w-14 rounded-full bg-neutral-100 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 p-1 flex items-center justify-between cursor-pointer focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {/* Sliding Indicator */}
            <div
                className={`absolute top-0.5 bottom-0.5 w-[22px] bg-white dark:bg-slate-600 rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                    }`}
            />

            {/* Icons */}
            <div className={`z-10 flex items-center justify-center w-[22px] h-full transition-colors duration-300 ${theme === 'light' ? 'text-orange-500' : 'text-neutral-400'}`}>
                <Sun size={12} fill={theme === 'light' ? "currentColor" : "none"} />
            </div>
            <div className={`z-10 flex items-center justify-center w-[22px] h-full transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-neutral-400'}`}>
                <Moon size={12} fill={theme === 'dark' ? "currentColor" : "none"} />
            </div>
        </button>
    );
};

export default ThemeToggle;
