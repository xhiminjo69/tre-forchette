import { Star } from "lucide-react"
import Link from "next/link"

interface ReviewsSectionProps {
  dict: any
}

export default function ReviewsSection({ dict }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="section-padding bg-subtle-texture">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="glass-card p-8 rounded-2xl shadow-2xl inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4">{dict.reviews.title}</h2>
            <p className="text-xl text-red-800 font-medium">{dict.reviews.subtitle}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.reviews.items.map((review: { name: string; rating: number; text: string }, index: number) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="font-semibold text-gray-900">{review.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card inline-flex items-center space-x-4 rounded-2xl p-6 shadow-2xl">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">{dict.reviews.rating.score}</div>
              <div className="text-gray-600">{dict.reviews.rating.count}</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href={dict.reviews.tripadvisor.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card inline-block p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-gray-900 mb-2">{dict.reviews.tripadvisor.cta}</div>
              <div className="text-green-700 font-semibold">{dict.reviews.tripadvisor.ranking}</div>
              <div className="text-gray-600 mt-1 text-sm italic">{dict.reviews.tripadvisor.tagline}</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
