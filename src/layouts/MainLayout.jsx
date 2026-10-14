import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return <div className="site-shell"><a href="#main-content" className="skip-link">Pular para o conteúdo</a><Header /><main id="main-content" tabIndex={-1}><Outlet /></main><Footer /></div>;
}
