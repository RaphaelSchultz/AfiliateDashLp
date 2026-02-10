import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative h-6 w-12 rounded-full bg-neutral-100 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 flex items-center cursor-pointer focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {/* Sliding Indicator */}
            <div
                className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] bg-white dark:bg-slate-600 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0'}`}
            />

            {/* Icons */}
            <div className={`z-10 flex items-center justify-center w-6 h-full transition-colors duration-300 ${theme === 'light' ? 'text-orange-500' : 'text-neutral-400'}`}>
                <Sun size={10} fill={theme === 'light' ? "currentColor" : "none"} />
            </div>
            <div className={`z-10 flex items-center justify-center w-6 h-full transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-neutral-400'}`}>
                <Moon size={10} fill={theme === 'dark' ? "currentColor" : "none"} />
            </div>
        </button>
    );
};

export default ThemeToggle;
