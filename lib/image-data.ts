// Base64 encoded images for critical assets that must always load
export const imageData = {
  // Placeholder for logo - you'll need to replace this with your actual logo base64
  logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjOEIwMDAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI0NSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VFJFPC90ZXh0Pgo8dGV4dCB4PSI1MCIgeT0iNjUiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZPUkNIRVRURTwvdGV4dD4KPC9zdmc+",

  // Fallback images for when photos don't load
  fallbackDish:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiM4QjAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPvCfjaU8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM4QjAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRSRSBGT1JDSEVUVEU8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkF1dGhlbnRpYyBJdGFsaWFuIEN1aXNpbmU8L3RleHQ+Cjwvc3ZnPg==",
}

// External CDN URLs as backup
export const cdnImages = {
  // Existing CDN image URLs
  heroSeafood: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=800&fit=crop&crop=center",
  fishCarpaccio: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&crop=center",
  grilledSquid: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=800&h=600&fit=crop&crop=center",
  freshMussels: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&h=600&fit=crop&crop=center",
  beefCarpaccio: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=center",
  bisteccaFiorentina: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&crop=center",
  freshPasta: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop&crop=center",
  seafoodRisotto: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop&crop=center",
  
  // Adding missing CDN fallback URLs for gallery images
  antipastiSelection: "https://images.unsplash.com/photo-1626198226928-990140ab23b6?w=800&h=600&fit=crop&crop=center",
  bakedFish: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=800&h=600&fit=crop&crop=center",
  freshPrawns: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&h=600&fit=crop&crop=center",
  grilledSteak: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop&crop=center",
  lobsterPasta: "https://images.unsplash.com/photo-1588791174744-7e9bf4378277?w=800&h=600&fit=crop&crop=center",
  octopusArtistry: "https://images.unsplash.com/photo-1628569634673-049f693bfbc1?w=800&h=600&fit=crop&crop=center",
  seafoodAntipasti: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&h=600&fit=crop&crop=center",
  pastaDishes: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop&crop=center",
  restaurantSteakAmbiance: "https://images.unsplash.com/photo-1514516345957-556ca7c90a34?w=800&h=600&fit=crop&crop=center",
  seafoodPasta: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&h=600&fit=crop&crop=center",
  wholeFishBaked: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop&crop=center",
  wholeFishPreparation: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&h=600&fit=crop&crop=center"
}
