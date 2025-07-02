# Tre Forchette Website

This is a Next.js project configured for GitHub Pages deployment.

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
