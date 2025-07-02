"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, Phone } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import ReliableImage from "./reliable-image"

interface HeaderProps {
  dict: any
  lang: string
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "menu", href: "#menu" },
    { key: "gallery", href: "#gallery" },
    { key: "blog", href: "#blog" },
    { key: "reservation", href: "#reservation" },
    { key: "reviews", href: "#reviews" },
    { key: "contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 px-4 sm:px-6">
          {/* Logo that changes based on scroll state */}
          <Link href={`/${lang}`} className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <ReliableImage
              src={isScrolled ? "/images/Black llogo.png" : "/images/tre-forchette-logo.png"}
              alt="Tre Forchette Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto"
              width={48}
              height={48}
              priority={true}
              fallbackText="TRE FORCHETTE"
              fallbackType="logo"
              unoptimized={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                className="text-gray-700 hover:text-red-800 font-medium transition-colors duration-200 cursor-pointer text-sm xl:text-base"
                onClick={() => scrollToSection(item.href)}
              >
                {dict.nav[item.key]}
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button
              size="sm"
              className="bg-red-800 hover:bg-red-700 text-white text-sm px-3 py-2"
              onClick={() => scrollToSection("#reservation")}
            >
              <Calendar size={14} className="mr-1.5" />
              Reserve
            </Button>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Quick Call Button for Mobile */}
            <Button variant="ghost" size="sm" className="p-2 text-red-800 hover:bg-red-50" asChild>
              <a href="tel:+355675003333" aria-label="Call Restaurant">
                <Phone size={18} />
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for touch */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <nav className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-red-800 hover:bg-red-50 transition-colors duration-200 text-base font-medium"
                  onClick={() => scrollToSection(item.href)}
                >
                  {dict.nav[item.key]}
                </button>
              ))}

              {/* Mobile CTA Section */}
              <div className="px-6 py-3 border-t border-gray-100 space-y-3">
                <Button
                  size="sm"
                  className="w-full bg-red-800 hover:bg-red-700 text-white py-3 text-base font-semibold"
                  onClick={() => scrollToSection("#reservation")}
                >
                  <Calendar size={16} className="mr-2" />
                  {dict.hero?.cta_reservation || "Make Reservation"}
                </Button>

                <div className="flex justify-center">
                  <LanguageSwitcher currentLang={lang} />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
