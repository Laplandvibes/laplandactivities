import { useState } from 'react';

/**
 * Image with graceful fallback when the primary src 404s.
 *
 * Pattern: components reference *future* curated paths under
 * `/images/categories/*`, `/images/hotels/*`, `/images/heroes/*`, etc. Until
 * Vesa drops the actual files in (see `IMAGE-BRIEF.md`), the browser would
 * 404 and show alt text. SmartImage swaps in a safe-pool fallback the
 * moment the primary fails, so the page never renders a broken icon.
 *
 * Once a file is delivered, the primary path resolves and SmartImage
 * behaves like a plain <img>.
 */

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback: string;
  alt: string;
}

export default function SmartImage({ src, fallback, alt, ...rest }: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
