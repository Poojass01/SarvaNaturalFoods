"use client";

import { useState } from "react";
import ProfessionalBackground from "../ProfessionalBackground";
import SectionHeader from "../SectionHeader";
import { PhoneIcon, EmailIcon, MapIcon } from "../Icons";

export default function ContactSection({ whatsappNumber }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const text = encodeURIComponent(
      `Hi Sarva Natural Foods!` +
        `\nName: ${name}` +
        `\nPhone: ${phone}` +
        `\nMessage: ${message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setFormData({ name: "", phone: "", message: "" });
  };
  return (
    <section id="contact" className="py-8 sm:py-10 relative overflow-hidden">
      <ProfessionalBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="CONTACT"
          title="Talk to Sarva Natural Foods"
          description="Ask about fodder, feeding, shipping, or how to introduce toddlers to ghee. We answer everything."
        />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
         <div className="space-y-6 flex flex-col h-full">
            <div className="modern-card p-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#ffd166] to-[#f4a621] flex-shrink-0">
                <PhoneIcon />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#a0782d]">Call / WhatsApp</p>
                <p className="text-xl sm:text-2xl font-display text-[#2a1b08]">+91 86082 01333</p>
                <p className="text-xl sm:text-2xl font-display text-[#2a1b08]">+91 86083 01333</p>
                <p className="text-sm text-[#7a6130]">Daily 7 AM – 10 PM IST</p>
              </div>
            </div>
            <div className="modern-card p-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#ffd166] to-[#f4a621] flex-shrink-0">
                <EmailIcon />
              </span>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#a0782d]">Mail us</p>
                <p className="text-base sm:text-xl font-display text-[#2a1b08] break-all">
                  sarvanaturalfoods@gmail.com
                </p>
              </div>
            </div>
            <div className="modern-card p-6 flex items-center gap-4 flex-1">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#ffd166] to-[#f4a621] flex-shrink-0">
                <MapIcon />
              </span>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#a0782d]">Visit</p>
                <p className="text-base sm:text-xl font-display text-[#2a1b08]">
                  HO: 29, Somanur, Tirupur – 641668
                </p>
                <p className="text-base sm:text-xl font-display text-[#2a1b08]">
                  BR: 67, 1st Main Rd, S.Kolathur, Chennai – 600117
                </p>
              </div>
            </div>
          </div>
          <div className="modern-card p-5 sm:p-8 flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-display text-[#2a1b08] mb-2">
              Need help choosing?
            </h3>
            <p className="text-[#5e4521] mb-5">
              Tell us how many people you cook for, and we will suggest
              quantities plus immunity rituals. No bots here—just farmers on
              WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-3">
              <div>
                <label className="block text-sm font-semibold text-[#5e4521] mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl text-sm focus:ring-2 focus:ring-[#f4a621] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#5e4521] mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile"
                  className="w-full px-4 py-2.5 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl text-sm focus:ring-2 focus:ring-[#f4a621] focus:outline-none"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-semibold text-[#5e4521] mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="E.g. I cook for 4 people, need ghee for daily use"
                  className="w-full flex-1 min-h-[60px] px-4 py-2.5 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl text-sm focus:ring-2 focus:ring-[#f4a621] focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffd166] via-[#f4a621] to-[#e08a00] text-[#2f1b05] px-6 py-3.5 rounded-full font-semibold shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
