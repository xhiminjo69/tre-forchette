"use client"

import Image from "next/image"
import { useState } from "react"

interface BlogSectionProps {
  dict: any
}

// Image with fallback component
function BlogImage({
  src,
  alt,
  className,
  width = 400,
  height = 300,
}: {
  src: string
  alt: string
  className: string
  width?: number
  height?: number
}) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🍽️</div>
          <div className="text-sm text-gray-600">TRE FORCHETTE</div>
          <div className="text-xs text-gray-500">{alt}</div>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
      quality={85}
      priority={false}
    />
  )
}

export default function BlogSection({ dict }: BlogSectionProps) {
  return (
    <section id="blog" className="section-padding bg-premium-steaks">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="glass-card-dark p-8 rounded-2xl shadow-2xl inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-4">{dict.blog.title}</h2>
            <p className="text-xl text-red-300 font-medium">{dict.blog.subtitle}</p>
          </div>
        </div>

        {/* Hero Article Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Article Header with Background Image */}
            <div
              className="relative h-96 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/blog/seafood-wine-elegance.jpg')`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">{dict.blog.article.title}</h3>
                  <div className="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
                  <p className="text-lg leading-relaxed italic max-w-3xl">{dict.blog.article.intro}</p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 lg:p-12">
              {/* Two Column Layout for Tradition Section */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🇮🇹</span>
                    <h4 className="text-2xl font-bold font-playfair text-red-800">
                      {dict.blog.article.sections.tradition.title}
                    </h4>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-800">
                    <p className="text-gray-700 leading-relaxed">{dict.blog.article.sections.tradition.content}</p>
                  </div>
                </div>
                <div className="relative">
                  <BlogImage
                    src="/images/blog/antipasti-selection-golden-tray.jpg"
                    alt="Elegant antipasti selection with 10 seafood dishes"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    width={400}
                    height={320}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-red-800 text-white p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-playfair">10+</div>
                      <div className="text-sm">Antipasti Varieties</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chef Expertise Section with Image */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="relative order-2 lg:order-1">
                  <BlogImage
                    src="/images/blog/chef-ridi-cutting-steak.jpg"
                    alt="Chef Ridi expertly preparing premium steak"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    width={400}
                    height={320}
                  />
                  <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg border-2 border-red-800">
                    <div className="text-center">
                      <div className="text-red-800 text-2xl font-bold font-playfair">20+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">👨‍🍳</span>
                    <h4 className="text-2xl font-bold font-playfair text-red-800">
                      {dict.blog.article.sections.expertise.title}
                    </h4>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed mb-4">{dict.blog.article.sections.expertise.content}</p>
                    <div className="bg-red-800 text-white p-4 rounded-lg">
                      <p className="text-sm font-medium">Meet Chef Ridi - Master of Italian Culinary Arts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury & Experience Sections */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-800">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🍷</span>
                    <h4 className="text-xl font-bold font-playfair text-red-800">
                      {dict.blog.article.sections.luxury.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{dict.blog.article.sections.luxury.content}</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🌟</span>
                    <h4 className="text-xl font-bold font-playfair text-red-800">
                      {dict.blog.article.sections.experience.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{dict.blog.article.sections.experience.content}</p>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="bg-gradient-to-r from-red-800 to-red-700 text-white p-8 rounded-xl text-center">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-3xl mr-4">📍</span>
                      <p className="text-lg font-medium">{dict.blog.article.location}</p>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-3xl mr-4">🎉</span>
                      <p className="text-lg font-medium">{dict.blog.article.cta}</p>
                    </div>
                  </div>
                  <div className="border-l border-red-600 pl-8">
                    <h5 className="text-2xl font-bold font-playfair mb-2">{dict.blog.article.welcome}</h5>
                    <p className="text-red-200 italic text-lg mb-6">{dict.blog.article.tagline}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        onClick={() => {
                          const reservationSection = document.getElementById("reservation")
                          if (reservationSection) {
                            reservationSection.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        }}
                      >
                        {dict.blog.reserve_now}
                      </button>
                      <button
                        className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        onClick={() => {
                          const menuSection = document.getElementById("menu")
                          if (menuSection) {
                            menuSection.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        }}
                      >
                        {dict.blog.view_menu}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Showcase Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-playfair text-white mb-4">{dict.blog.culinary_artistry.title}</h3>
            <p className="text-red-300 text-lg">{dict.blog.culinary_artistry.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <BlogImage
                src="/images/blog/seafood-antipasti-variety.jpg"
                alt="Seafood antipasti variety"
                className="w-full h-64 object-cover"
                width={400}
                height={256}
              />
              <div className="p-6">
                <h4 className="text-xl font-bold font-playfair text-gray-900 mb-2">{dict.blog.culinary_artistry.antipasti.title}</h4>
                <p className="text-gray-600 text-sm">
                  {dict.blog.culinary_artistry.antipasti.description}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <BlogImage
                src="/images/blog/whole-fish-special-sauce.jpg"
                alt="Whole fish with special golden sauce and lemon garnish"
                className="w-full h-64 object-cover"
                width={400}
                height={256}
              />
              <div className="p-6">
                <h4 className="text-xl font-bold font-playfair text-gray-900 mb-2">{dict.blog.culinary_artistry.fresh_fish.title}</h4>
                <p className="text-gray-600 text-sm">
                  {dict.blog.culinary_artistry.fresh_fish.description}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <BlogImage
                src="/images/blog/chef-ridi-cutting-steak.jpg"
                alt="Chef expertise"
                className="w-full h-64 object-cover"
                width={400}
                height={256}
              />
              <div className="p-6">
                <h4 className="text-xl font-bold font-playfair text-gray-900 mb-2">{dict.blog.culinary_artistry.chef_expertise.title}</h4>
                <p className="text-gray-600 text-sm">
                  {dict.blog.culinary_artistry.chef_expertise.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Highlights Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 relative overflow-hidden">
              <BlogImage
                src="/images/blog/grilled-squid-professional.jpg"
                alt="Perfectly grilled squid with professional presentation and herbs"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                width={400}
                height={192}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="text-4xl mb-2">🍝</div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                {dict.blog.highlights.authentic.title}
              </h4>
              <p className="text-gray-600 text-sm">{dict.blog.highlights.authentic.description}</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 relative overflow-hidden">
              <BlogImage
                src="/images/blog/fresh-prawns-wine-ambiance.jpg"
                alt="Fresh prawns with white wine in elegant restaurant setting"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                width={400}
                height={192}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="text-4xl mb-2">🏆</div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                {dict.blog.highlights.excellence.title}
              </h4>
              <p className="text-gray-600 text-sm">{dict.blog.highlights.excellence.description}</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 relative overflow-hidden">
              <BlogImage
                src="/images/blog/chef-aurel-cutting-steak.jpg"
                alt="Chef Aurel expertly slicing premium steak in TRE FORCHETTE kitchen"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                width={400}
                height={192}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="text-4xl mb-2">❤️</div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold font-playfair text-gray-900 mb-3">
                {dict.blog.highlights.hospitality.title}
              </h4>
              <p className="text-gray-600 text-sm">{dict.blog.highlights.hospitality.description}</p>
            </div>
          </div>
        </div>

        {/* Behind the Scenes Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-playfair text-white mb-4">{dict.blog.behind_scenes.title}</h3>
            <p className="text-red-300 text-lg">{dict.blog.behind_scenes.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card-dark rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold font-playfair text-white mb-4">{dict.blog.behind_scenes.chef_section.title}</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                {dict.blog.behind_scenes.chef_section.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{dict.blog.behind_scenes.chef_section.chef_name}</div>
                  <div className="text-red-300 text-sm">{dict.blog.behind_scenes.chef_section.chef_title}</div>
                </div>
              </div>
            </div>

            <div className="glass-card-dark rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold font-playfair text-white mb-4">{dict.blog.behind_scenes.fresh_daily.title}</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                {dict.blog.behind_scenes.fresh_daily.description}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400">100%</div>
                  <div className="text-gray-400 text-xs">{dict.blog.behind_scenes.fresh_daily.fresh_daily_label}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">20+</div>
                  <div className="text-gray-400 text-xs">{dict.blog.behind_scenes.fresh_daily.years_experience_label}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">5★</div>
                  <div className="text-gray-400 text-xs">{dict.blog.behind_scenes.fresh_daily.premium_quality_label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
