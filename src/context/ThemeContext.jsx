import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'afiliadodash.appearance';
const valid = value => ['light', 'dark', 'system'].includes(value);
const systemTheme = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const readPreference = () => {
  try { const value = localStorage.getItem(STORAGE_KEY); return valid(value) ? value : 'system'; }
  catch { return 'system'; }
};

export function ThemeProvider({ children }) {
  const [theme, updateTheme] = useState(readPreference);
  const [system, setSystem] = useState(systemTheme);
  const resolvedTheme = theme === 'system' ? system : theme;
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) return;
    const update = () => setSystem(media.matches ? 'dark' : 'light');
    update();
    if (media.addEventListener) media.addEventListener('change', update);
    else media.addListener(update);
    return () => { if (media.removeEventListener) media.removeEventListener('change', update); else media.removeListener(update); };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = resolvedTheme;
    root.dataset.appearance = theme;
    root.classList.toggle('dark', resolvedTheme === 'dark');
    root.style.colorScheme = resolvedTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolvedTheme === 'dark' ? '#111113' : '#fafaf9');
  }, [theme, resolvedTheme]);
  useEffect(() => {
    const sync = event => { if (event.key === STORAGE_KEY || event.key === null) updateTheme(readPreference()); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  const setTheme = value => {
    if (!valid(value)) return;
    updateTheme(value);
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* Session choice still works when storage is blocked. */ }
  };
  return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used within a ThemeProvider');
  return value;
}
