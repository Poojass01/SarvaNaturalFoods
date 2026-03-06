"use client";

import Image from "next/image";

export default function HeroSection({ whatsappNumber }) {
  return (
    <section className="relative min-h-screen bg-[#f4b400] overflow-hidden flex items-center">
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[60%] z-0">
        <svg viewBox="0 0 800 800" preserveAspectRatio="none" className="w-full h-full">
          <path d="M 300 0 Q 150 200 250 400 Q 350 600 200 800 L 800 800 L 800 0 Z" fill="white" />
        </svg>
      </div>
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[50%] bg-white z-0 rounded-t-[40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-6 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          <div className="space-y-5 lg:space-y-8">
            <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs font-semibold text-[#5a2e00]">
              FROM FARM TO PURE GHEE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-[#2a1b08]">
              TRADITIONAL GHEE <br />
              MADE WITH <br />
              CARE, TIME & <br />
              PURITY
            </h1>
            <p className="text-base sm:text-lg text-[#4a2a00] max-w-xl">
              Prepared using time-honoured dairy practices and slow cooking
              methods, our ghee captures the authentic aroma and richness
              that generations have trusted in every kitchen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:opacity-90 transition text-sm sm:text-base"
              >
                Shop Now →
              </button>
              <button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
                className="border-2 border-black text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-black hover:text-white transition text-sm sm:text-base"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] mx-auto mt-6 lg:mt-0 lg:translate-x-12 pb-10 lg:pb-0">
            <Image
              src="/image/ghee_site2.png"
              alt="SARVA Pure Cow Ghee Jar"
              width={600}
              height={800}
              priority
              className="object-contain drop-shadow-2xl w-full h-auto"
            />
            <p className="text-xs tracking-[0.35em] text-[#7a6130] uppercase text-center mt-2">
              Certified Quality
            </p>
            <div className="flex items-center justify-center gap-5 opacity-90 mt-1">
              <img
                src="/image/certification.png"
                alt="Certifications"
                className="h-10 object-contain hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
