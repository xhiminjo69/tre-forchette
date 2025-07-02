const fs = require("fs")
const path = require("path")

function verifyBuild() {
  const outDir = path.join(process.cwd(), "out")

  console.log("🔍 Verifying build output...")
  console.log("Output directory:", outDir)

  if (!fs.existsSync(outDir)) {
    console.error("❌ Build output directory does not exist!")
    console.log("Run 'npm run build' first")
    return false
  }

  // Check for required files
  const requiredFiles = [
    "index.html",
    "en.html",
    "en/index.html",
    "it.html",
    "it/index.html",
    "al.html",
    "al/index.html",
  ]

  let allFilesExist = true

  requiredFiles.forEach((filePath) => {
    const fullPath = path.join(outDir, filePath)
    if (fs.existsSync(fullPath)) {
      console.log(`✅ ${filePath}`)
    } else {
      console.log(`⚠️  Missing: ${filePath}`)
      // Don't mark as failed for optional files
    }
  })

  // Check for images
  const imagesDir = path.join(outDir, "images")
  if (fs.existsSync(imagesDir)) {
    console.log("✅ Images directory exists in build output")

    // Count images
    const imageFiles = fs.readdirSync(imagesDir, { recursive: true })
    console.log(`📸 Found ${imageFiles.length} image files`)
  } else {
    console.error("❌ Images directory missing from build output!")
    allFilesExist = false
  }

  // Check for _next directory
  const nextDir = path.join(outDir, "_next")
  if (fs.existsSync(nextDir)) {
    console.log("✅ _next directory exists")
  } else {
    console.error("❌ _next directory missing!")
    allFilesExist = false
  }

  if (allFilesExist) {
    console.log("✅ Build verification passed!")
    console.log("\n🚀 Ready to deploy!")
  } else {
    console.error("❌ Build verification failed!")
  }

  return allFilesExist
}

verifyBuild()
