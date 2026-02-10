import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const THEME_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 horas

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            const savedAt = localStorage.getItem('theme_saved_at');

            if (saved && savedAt) {
                const elapsed = Date.now() - Number(savedAt);
                if (elapsed < THEME_EXPIRY_MS) {
                    return saved;
                }
                // Expirou — limpar e usar light
                localStorage.removeItem('theme');
                localStorage.removeItem('theme_saved_at');
            }
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
        localStorage.setItem('theme_saved_at', String(Date.now()));
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
