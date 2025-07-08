"use client"

import { Button } from "@/components/ui/button"
import { Clock, Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react"

interface ContactSectionProps {
  dict: any
}

export default function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding bg-premium-steaks">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <div className="glass-card-dark p-6 sm:p-8 rounded-2xl shadow-2xl inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-white mb-3 sm:mb-4 leading-tight">
              {dict.contact.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-red-300 font-medium">{dict.contact.subtitle}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information - Mobile optimized */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">Get in Touch</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                  <Clock className="text-red-800 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{dict.contact.hours}</div>
                    <div className="text-gray-600 text-sm">Monday - Sunday: 12:00 PM - 12:00 AM</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                  <Phone className="text-red-800 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{dict.contact.phone}</div>
                    <a href="tel:+355675003333" className="text-gray-600 text-sm hover:text-red-800 transition-colors">
                      +355 67 500 3333
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                  <Mail className="text-red-800 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{dict.contact.email}</div>
                    <a
                      href="mailto:fem.shpk@gmail.com"
                      className="text-gray-600 text-sm hover:text-red-800 transition-colors"
                    >
                      fem.shpk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg">
                  <MapPin className="text-red-800 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{dict.contact.address}</div>
                    <div className="text-gray-600 text-sm">Rruga Pavarësia, Vlorë, Albania</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions - Mobile optimized */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Quick Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white min-h-[48px]">
                  <a href="tel:+355675003333">
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white min-h-[48px]">
                  <a href="https://wa.me/355675003333" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="text-red-800 border-red-800 hover:bg-red-50 bg-transparent min-h-[48px] sm:col-span-1"
                >
                  <a href="mailto:fem.shpk@gmail.com">
                    <Mail size={16} className="mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Media - Mobile optimized */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{dict.contact.social}</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="sm" asChild className="min-h-[44px] bg-transparent">
                  <a href="https://www.instagram.com/treforchette_restaurant" target="_blank" rel="noopener noreferrer">
                    <Instagram size={16} className="mr-2" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="min-h-[44px] bg-transparent">
                  <a href="https://g.co/kgs/MGozAA3" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Google Reviews
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="min-h-[44px] bg-transparent">
                  <a
                    href="https://www.tripadvisor.com/Restaurant_Review-g678774-d15610273-Reviews-Tre_Forchette_Restaurant-Vlore_Vlore_County.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    TripAdvisor
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Google Maps - Mobile optimized */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 mb-4 sm:mb-6">Find Us</h3>

            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-4 sm:mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9049939133733!2d19.487427!3d40.4552397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13453348402d958f%3A0x7a3a8324665ae507!2sTre%20Forchette%20Restaurant!5e0!3m2!1sen!2s!4v1751040625049!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TRE FORCHETTE Restaurant Location"
                className="rounded-lg"
              />
            </div>

            <div className="text-center space-y-4">
              <Button
                variant="outline"
                asChild
                className="w-full sm:w-auto text-red-800 border-red-800 hover:bg-red-50 bg-transparent min-h-[48px]"
              >
                <a
                  href="https://www.google.com/maps/place/Tre+Forchette+Restaurant/@40.4552397,19.487427,17z/data=!3m1!4b1!4m6!3m5!1s0x13453348402d958f:0x7a3a8324665ae507!8m2!3d40.4552397!4d19.487427!16s%2Fg%2F11q3k8y8qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} className="mr-2" />
                  Open in Google Maps
                </a>
              </Button>

              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">Located in the heart of Vlorë</p>
                <p>Easy parking available nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
