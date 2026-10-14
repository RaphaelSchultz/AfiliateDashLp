import { useTheme } from '../../context/ThemeContext';

export default function ProductShot({ name, alt, width, height, eager = false }) {
  const { resolvedTheme } = useTheme();
  const src = `/images/product-v2/${name}-${resolvedTheme}.jpg`;
  return (
    <a className="product-shot" href={src} target="_blank" rel="noopener noreferrer" aria-label={`${alt}. Abrir captura em tamanho original`}>
      <picture>
        {name === 'dashboard' && <source media="(max-width: 600px)" srcSet={`/images/product-v2/dashboard-mobile-${resolvedTheme}.jpg`} width="390" height="770" />}
        <img src={src} alt={alt} width={width} height={height} decoding="async" loading={eager ? 'eager' : 'lazy'} />
      </picture>
      <span className="shot-zoom" aria-hidden="true">Ver tela original ↗</span>
    </a>
  );
}
