"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Star, CheckCircle, Gift, Heart } from "lucide-react"

interface ReservationSectionProps {
  dict: any
}

export default function ReservationSection({ dict }: ReservationSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const reservationMessage = `🍽️ *RESERVATION REQUEST - TRE FORCHETTE*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📅 *Date:* ${formData.date}
🕐 *Time:* ${formData.time}
👥 *Guests:* ${formData.guests}
${formData.occasion ? `🎉 *Occasion:* ${formData.occasion}` : ""}
${formData.message ? `💬 *Special Requests:* ${formData.message}` : ""}

Thank you! I would like to make a reservation at TRE FORCHETTE.`

    const whatsappUrl = `https://wa.me/355675003333?text=${encodeURIComponent(reservationMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const occasions = [
    "Birthday Celebration",
    "Anniversary",
    "Business Dinner",
    "Date Night",
    "Family Gathering",
    "Special Occasion",
    "Just Dining",
  ]

  const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ]

  return (
    <section id="reservation" className="section-padding bg-dining-experience">
      <div className="container-max">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="glass-card-dark p-6 sm:p-8 rounded-2xl shadow-2xl inline-block">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 gap-2 sm:gap-3">
              <Calendar className="text-red-300" size={24} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-white text-center leading-tight">
                {dict.reservation.title}
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-red-300 font-medium mb-3 sm:mb-4">
              {dict.reservation.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-red-200">
              <div className="flex items-center">
                <CheckCircle size={14} className="mr-1" />
                {dict.reservation.instant_confirmation}
              </div>
              <div className="flex items-center">
                <Star size={14} className="mr-1" />
                {dict.reservation.premium_experience}
              </div>
              <div className="flex items-center">
                <Heart size={14} className="mr-1" />
                {dict.reservation.memorable_moments}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Mobile stacked */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
              {/* Why Choose Us */}
              <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold font-playfair text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <Star className="text-red-800 mr-2" size={18} />
                  {dict.reservation.why_reserve}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <CheckCircle className="text-red-800" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{dict.reservation.guaranteed_table}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{dict.reservation.guaranteed_table_desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <Gift className="text-red-800" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{dict.reservation.special_occasions}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{dict.reservation.special_occasions_desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <Users className="text-red-800" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{dict.reservation.any_group_size}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{dict.reservation.any_group_size_desc}</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Contact Info */}
              <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-2xl">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  {dict.reservation.need_help}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full text-green-600 border-green-600 hover:bg-green-50 bg-transparent min-h-[44px]"
                  >
                    <a href="https://wa.me/355675003333" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                      </svg>
                      {dict.reservation.chat_whatsapp}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full text-red-800 border-red-800 hover:bg-red-50 bg-transparent min-h-[44px]"
                  >
                    <a href="tel:+355675003333">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      {dict.reservation.call_restaurant}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Reservation Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 gap-3">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900">
                      {dict.reservation.complete_reservation}
                    </h3>
                    <p className="text-green-700 text-sm">✨ {dict.reservation.instant_confirmation_desc}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Personal Information */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                      <Users className="text-red-800 mr-2" size={16} />
                      {dict.reservation.personal_information}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <Input
                        name="name"
                        placeholder={dict.reservation.form.name}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white min-h-[44px] text-base"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder={dict.reservation.form.email}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white min-h-[44px] text-base"
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <Input
                        name="phone"
                        type="tel"
                        placeholder={dict.reservation.form.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white min-h-[44px] text-base"
                      />
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                      <Calendar className="text-red-800 mr-2" size={16} />
                      {dict.reservation.reservation_details}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{dict.reservation.date}</label>
                        <Input
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="bg-white min-h-[44px] text-base"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{dict.reservation.time}</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[44px] text-base"
                        >
                          <option value="">{dict.reservation.select_time}</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {dict.reservation.guests}
                        </label>
                        <Input
                          name="guests"
                          type="number"
                          min="1"
                          max="20"
                          placeholder={dict.reservation.number_of_guests}
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="bg-white min-h-[44px] text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Occasion */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                      <Gift className="text-red-800 mr-2" size={16} />
                      {dict.reservation.special_occasion_optional}
                    </h4>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-3 sm:mb-4 min-h-[44px] text-base"
                    >
                      <option value="">{dict.reservation.select_occasion}</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                    <Textarea
                      name="message"
                      placeholder={dict.reservation.special_requests_placeholder}
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="bg-white text-base resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-3 min-h-[52px]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                      </svg>
                      {dict.reservation.send_reservation}
                      <CheckCircle size={18} />
                    </Button>
                    <p className="text-sm text-gray-600 mt-3">🚀 {dict.reservation.instant_confirmation_footer}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-card-dark p-4 sm:p-6 rounded-2xl shadow-2xl inline-block">
            <p className="text-white text-base sm:text-lg mb-3 sm:mb-4">
              ✨ <strong>{dict.reservation.experience_finest}</strong> ✨
            </p>
            <p className="text-red-300 text-sm">{dict.reservation.complimentary_service}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
