/**
 * Utility functions for handling image paths
 * Ensures paths work correctly in both development and production (GitHub Pages)
 */
import getConfig from 'next/config';

// Check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

/**
 * Get the base URL for assets on GitHub Pages
 * This is critical for handling page refreshes correctly
 */
const getBaseUrl = (): string => {
  // Try to get the base path from Next.js config first
  try {
    const { publicRuntimeConfig } = getConfig() || {};
    if (publicRuntimeConfig?.basePath) {
      return publicRuntimeConfig.basePath;
    }
  } catch (e) {
    // Config not available, fall back to manual detection
  }

  // Manual detection as fallback
  if (isBrowser) {
    // With custom domain, we don't need a base path
    if (window.location.hostname === 'tre-forchette-restaurant.com') {
      return '';
    }
    // Only use the repo name as base path for GitHub's default domain
    if (window.location.hostname.includes('github.io')) {
      return '/tre-forchette';
    }
  }
  return '';
};

/**
 * Process an image path to ensure it works on GitHub Pages
 * This handles both initial page load and page refreshes
 */
export function getImagePath(path: string): string {
  // Handle absolute URLs (don't modify external URLs)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL
  const baseUrl = getBaseUrl();
  
  // Combine base URL with path
  return baseUrl ? `${baseUrl}/${cleanPath}` : `/${cleanPath}`;
}
