'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true when the user has requested reduced motion.
 * Defaults to false on SSR to avoid hydration mismatch.
 *
 * Attaches a `change` listener to the media query so the returned value
 * updates immediately if the user changes their OS accessibility setting
 * while the page is open. The listener is removed on cleanup.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Sync with the current OS setting on mount
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
