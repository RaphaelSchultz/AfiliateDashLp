import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Icon = theme === 'system' ? Monitor : theme === 'dark' ? Moon : Sun;
  return <label className="theme-select">
    <Icon size={16} aria-hidden="true" />
    <span className="sr-only">Aparência</span>
    <select aria-label="Aparência" value={theme} onChange={event => setTheme(event.target.value)}>
      <option value="system">Sistema</option>
      <option value="light">Claro</option>
      <option value="dark">Escuro</option>
    </select>
  </label>;
}
