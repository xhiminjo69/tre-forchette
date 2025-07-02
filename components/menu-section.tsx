import { Badge } from "@/components/ui/badge"

interface MenuSectionProps {
  dict: any
}

export default function MenuSection({ dict }: MenuSectionProps) {
  return (
    <section id="menu" className="section-padding bg-dining-experience">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <div className="glass-card-dark p-6 sm:p-8 rounded-2xl shadow-2xl inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-white mb-3 sm:mb-4 leading-tight">
              {dict.menu.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-red-300 font-medium">{dict.menu.subtitle}</p>
          </div>
        </div>

        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Sallata */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-red-800 mb-4 sm:mb-6 text-center">
              {dict.menu.categories.sallata}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {dict.menu.items.sallata.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">{item.name}</h4>
                    <span className="font-bold text-red-800 text-sm flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Antipasta */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-red-800 mb-4 sm:mb-6 text-center">
              {dict.menu.categories.antipasta}
            </h3>
            <div className="space-y-4 sm:space-y-6 max-h-80 sm:max-h-96 overflow-y-auto">
              {dict.menu.items.antipasta.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                    <span className="font-bold text-red-800 text-xs flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Primi Piatti */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-red-800 mb-4 sm:mb-6 text-center">
              {dict.menu.categories.primi}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {dict.menu.items.primi.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                      {item.signature && (
                        <Badge className="bg-red-800 text-white text-xs w-fit">{dict.menu.signature}</Badge>
                      )}
                    </div>
                    <span className="font-bold text-red-800 text-xs flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondi Piatti */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-red-800 mb-4 sm:mb-6 text-center">
              {dict.menu.categories.secondi}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {dict.menu.items.secondi.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                      {item.signature && (
                        <Badge className="bg-red-800 text-white text-xs w-fit">{dict.menu.signature}</Badge>
                      )}
                    </div>
                    <span className="font-bold text-red-800 text-xs flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
