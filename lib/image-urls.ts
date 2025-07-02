// Image URLs Configuration
// Replace these URLs with your actual image URLs from CDN or Vercel

export const imageUrls = {
  blog: {
    seafoodWineElegance: "https://your-cdn.com/seafood-wine-elegance.jpg",
    chefRidiCuttingSteak: "https://your-cdn.com/chef-ridi-cutting-steak.jpg",
    antipastiSelectionGolden: "https://your-cdn.com/antipasti-selection-golden-tray.jpg",
    seafoodAntipastiVariety: "https://your-cdn.com/seafood-antipasti-variety.jpg",
    wholeFishPreparation: "https://your-cdn.com/whole-fish-preparation.jpg",
  },
  gallery: {
    antipastiSelectionGolden: "https://your-cdn.com/antipasti-selection-golden-tray.jpg",
    seafoodAntipastiVariety: "https://your-cdn.com/seafood-antipasti-variety.jpg",
    wholeFishPreparation: "https://your-cdn.com/whole-fish-preparation.jpg",
    premiumGrilledSteak: "https://your-cdn.com/premium-grilled-steak.jpg",
    octopusMediterranean: "https://your-cdn.com/octopus-mediterranean.jpg",
    lobsterTagliatelle: "https://your-cdn.com/lobster-tagliatelle.jpg",
    freshPrawns: "https://your-cdn.com/fresh-prawns.jpg",
    pastaDishes: "https://your-cdn.com/pasta-dishes.jpg",
    seafoodLinguine: "https://your-cdn.com/seafood-linguine.jpg",
    fishCarpaccio: "https://your-cdn.com/fish-carpaccio.jpg",
    bisteccaFiorentina: "https://your-cdn.com/bistecca-fiorentina.jpg",
    grilledSquid: "https://your-cdn.com/grilled-squid.jpg",
    bakedFish: "https://your-cdn.com/baked-fish.jpg",
    seaBassTomatoes: "https://your-cdn.com/sea-bass-tomatoes.jpg",
  },
  // Fallback to placeholder if image fails to load
  placeholder: (width: number, height: number, text: string) =>
    `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`,
}
