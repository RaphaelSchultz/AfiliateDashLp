import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative h-7 w-[52px] rounded-full bg-neutral-100 dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 flex items-center cursor-pointer focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {/* Sliding Indicator */}
            <div
                className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] bg-white dark:bg-slate-600 rounded-full shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center ${theme === 'dark' ? 'translate-x-[24px]' : 'translate-x-0'}`}
            />

            {/* Icons */}
            <div className={`z-10 flex items-center justify-center w-[26px] h-full transition-colors duration-300 ${theme === 'light' ? 'text-orange-500' : 'text-neutral-400'}`}>
                <Sun size={11} fill={theme === 'light' ? "currentColor" : "none"} />
            </div>
            <div className={`z-10 flex items-center justify-center w-[26px] h-full transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-neutral-400'}`}>
                <Moon size={11} fill={theme === 'dark' ? "currentColor" : "none"} />
            </div>
        </button>
    );
};

export default ThemeToggle;
