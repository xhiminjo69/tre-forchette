# Tre Forchette Website

This is a Next.js project configured for GitHub Pages deployment with custom domain support at [tre-forchette-restaurant.com](https://tre-forchette-restaurant.com).

## Image Loading Mechanism

This website uses a unified image loading approach with the `ReliableImage` component that provides:

- Consistent image loading across all site sections
- Multiple fallback mechanisms:
  1. Local images (from `/public/images/` directory)
  2. CDN fallback images (configured in `@/lib/image-data.ts`)
  3. Base64 encoded placeholder images for logos and dishes
- Optimized loading with Next.js Image component
- Graceful error handling with appropriate UI fallbacks

### Usage

```jsx
<ReliableImage
  src="/images/path/to/image.jpg"
  alt="Image description"
  width={400}
  height={300}
  className="your-css-classes"
  fallbackType="dish" // or "logo" depending on image type
  priority={false} // set to true for above-the-fold images
  unoptimized={false} // set to true to bypass Next.js image optimization
/>
```

### Image Verification

The project includes scripts to verify and copy images:

- `scripts/verify-images.js`: Verifies that all required images exist in the public directory
- `scripts/copy-images.js`: Copies images from public directory to build output

## Deployment to GitHub Pages

This project is set up to be automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Create a GitHub repository for this project
2. Push your code to the repository:

```bash
# Initialize Git (if not already done)
git init

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

3. In your GitHub repository settings:
   - Go to "Settings" > "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically build and deploy your site

4. After deployment, your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```
