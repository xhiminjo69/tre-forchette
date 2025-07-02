/**
 * Utility function to get the correct image path based on environment
 * This ensures images work both locally and when deployed to GitHub Pages
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Get the base URL for assets
const getBaseUrl = (): string => {
  // In production on GitHub Pages
  if (isBrowser && window.location.hostname !== 'localhost') {
    return '/tre-forchette';
  }
  return '';
};

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
