"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  currentLang: string
}

const languages = [
  { code: "al", name: "AL", flag: "🇦🇱" },
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "it", name: "IT", flag: "🇮🇹" },
]

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split("/")
    segments[1] = newLang
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLang === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => switchLanguage(lang.code)}
          className={`text-sm font-medium transition-all duration-200 ${
            currentLang === lang.code ? "bg-red-800 text-white hover:bg-red-700" : "text-red-800 hover:bg-red-50"
          }`}
        >
          <span className="mr-2 text-lg">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  )
}
