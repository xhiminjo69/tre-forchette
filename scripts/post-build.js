const fs = require("fs")
const path = require("path")

function postBuild() {
  const outDir = path.join(process.cwd(), "out")

  console.log("🔧 Running post-build optimizations...")

  // Create redirect files for better compatibility
  const redirects = [{ from: "index.html", to: "en/index.html" }]

  redirects.forEach(({ from, to }) => {
    const fromPath = path.join(outDir, from)
    const toPath = path.join(outDir, to)

    if (fs.existsSync(toPath) && !fs.existsSync(fromPath)) {
      // Create a simple redirect HTML file
      const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=/${to.replace("index.html", "")}">
</head>
<body>
    <script>window.location.href = '/${to.replace("index.html", "")}';</script>
    <p>Redirecting...</p>
</body>
</html>`

      fs.writeFileSync(fromPath, redirectHtml)
      console.log(`✅ Created redirect: ${from} -> ${to}`)
    }
  })

  console.log("✅ Post-build optimizations complete!")
}

postBuild()
