/**
 * Utility function to get the correct image path based on environment
 * This ensures images work both locally and when deployed to GitHub Pages
 */

export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prefix with basePath
  if (process.env.NODE_ENV === 'production') {
    return `/tre-forchette/${cleanPath}`;
  }
  
  // In development, use the path as is (with leading slash)
  return `/${cleanPath}`;
}
