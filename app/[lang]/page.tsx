import { getDictionary } from "./dictionaries"
import Header from "../../components/header"
import HeroSection from "../../components/hero-section"
import AboutSection from "../../components/about-section"
import MenuSection from "../../components/menu-section"
import GallerySection from "../../components/gallery-section"
import BlogSection from "../../components/blog-section"
import ReservationSection from "../../components/reservation-section"
import ReviewsSection from "../../components/reviews-section"
import ContactSection from "../../components/contact-section"
import Footer from "../../components/footer"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "it" | "al" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Header dict={dict} lang={lang} />
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <MenuSection dict={dict} />
      <GallerySection dict={dict} />
      <BlogSection dict={dict} />
      <ReservationSection dict={dict} />
      <ReviewsSection dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} />
    </main>
  )
}
