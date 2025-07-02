import ReliableImage from "./reliable-image"

interface AboutSectionProps {
  dict: any
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="section-padding bg-premium-steaks">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Mobile First */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4 leading-tight">
                {dict.about.title}
              </h2>
              <p className="text-lg sm:text-xl text-red-800 font-medium mb-4 sm:mb-6">{dict.about.subtitle}</p>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 font-medium italic leading-relaxed">
                  {dict.about.greeting}
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{dict.about.content}</p>

                {/* Features - Mobile optimized */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-red-50 rounded-lg">
                    <span className="text-xl sm:text-2xl flex-shrink-0">🍅</span>
                    <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                      {dict.about.features.ingredients}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-red-50 rounded-lg">
                    <span className="text-xl sm:text-2xl flex-shrink-0">👨‍🍳</span>
                    <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                      {dict.about.features.experience}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 bg-red-50 rounded-lg">
                    <span className="text-xl sm:text-2xl flex-shrink-0">🍷</span>
                    <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                      {dict.about.features.service}
                    </p>
                  </div>
                </div>

                <div className="bg-red-800 text-white p-4 sm:p-6 rounded-lg border-l-4 border-red-600">
                  <p className="text-sm sm:text-base font-medium leading-relaxed">{dict.about.mission}</p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                    {dict.about.invitation}
                  </p>
                  <p className="text-base sm:text-lg text-red-800 font-semibold leading-relaxed">{dict.about.cta}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Mobile optimized */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl glass-card">
              <ReliableImage
                src="/images/seafood-tasting-menu.jpg?v=1"
                alt="Exquisite seafood tasting menu with oysters, shrimp and delicacies at TRE FORCHETTE"
                className="w-full h-full object-cover"
                width={600}
                height={600}
                priority={true}
                fallbackText="SEAFOOD TASTING MENU"
                cdnFallback="seafoodRisotto"
                unoptimized={true}
              />
            </div>

            {/* Floating Badges - Responsive positioning */}
            <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-red-800 text-white p-3 sm:p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-playfair">20+</div>
                <div className="text-xs sm:text-sm font-medium leading-tight">Years of</div>
                <div className="text-xs sm:text-sm font-medium leading-tight">Excellence</div>
              </div>
            </div>

            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white p-3 sm:p-4 rounded-full shadow-lg border-4 border-red-800">
              <div className="text-center">
                <div className="text-red-800 text-base sm:text-xl font-bold">★★★</div>
                <div className="text-xs text-gray-600 font-medium">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
