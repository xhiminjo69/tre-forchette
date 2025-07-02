const fs = require("fs")
const path = require("path")

// Ensure all images are properly copied to the build output
function copyImages() {
  const publicDir = path.join(process.cwd(), "public")
  const outputDir = path.join(process.cwd(), "out")

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Copy entire public directory to output
  function copyRecursive(src, dest) {
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
      }
      fs.readdirSync(src).forEach((item) => {
        copyRecursive(path.join(src, item), path.join(dest, item))
      })
    } else {
      fs.copyFileSync(src, dest)
    }
  }

  try {
    copyRecursive(publicDir, outputDir)
    console.log("✅ Images copied successfully to build output")
  } catch (error) {
    console.error("❌ Error copying images:", error)
  }
}

copyImages()
