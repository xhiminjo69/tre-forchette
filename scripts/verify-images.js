const fs = require("fs")
const path = require("path")

function verifyImages() {
  const publicDir = path.join(process.cwd(), "public")
  const imagesDir = path.join(publicDir, "images")

  console.log("🔍 Verifying image files...")
  console.log("Public directory:", publicDir)
  console.log("Images directory:", imagesDir)

  if (!fs.existsSync(imagesDir)) {
    console.error("❌ Images directory does not exist!")
    return false
  }

  const requiredImages = [
    "tre-forchette-logo.png",
    "hero-seafood-spectacular.jpg",
    "about-tasting-menu.jpg",
    "gallery/pasta-dishes.jpg",
    "gallery/grilled-squid.jpg",
    "blog/chef-ridi-cutting-steak.jpg",
  ]

  let allImagesExist = true

  requiredImages.forEach((imagePath) => {
    const fullPath = path.join(imagesDir, imagePath)
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath)
      console.log(`✅ ${imagePath} (${Math.round(stats.size / 1024)}KB)`)
    } else {
      console.error(`❌ Missing: ${imagePath}`)
      allImagesExist = false
    }
  })

  if (allImagesExist) {
    console.log("✅ All required images are present!")
  } else {
    console.error("❌ Some images are missing!")
  }

  return allImagesExist
}

verifyImages()
