"use client";
import { PhoneIcon, EmailIcon, MapIcon } from "./Icons";
import Image from "next/image";

const footerLinks = [
  { label: "Home", section: "top" },
  { label: "Why Sarva", section: "why-ghee" },
  { label: "Products", section: "products" },
  { label: "Purity Journey", section: "process" },
  { label: "Contact", section: "contact" },
];

export default function Footer() {
  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      window.location.href =
        sectionId && sectionId !== "top" ? `/#${sectionId}` : "/";
      return;
    }

    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#fff8e5] to-[#ffefc5] border-t border-[#ffe8ad]">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div>
            <button onClick={() => scrollToSection("top")} className="mb-4">
              <Image
                src="/logo/logo3.png"
                alt="Sarva Natural Foods"
                width={180}
                height={80}
                className="h-24 w-auto object-contain"
              />
            </button>

            <p className="text-[#5e4521] text-sm sm:text-base leading-relaxed max-w-sm">
              With over 50 years of experience in the milk business, SARVA
              Natural Foods represents tradition, trust and uncompromising
              quality. From our own cow farms to traditional ghee preparation,
              we deliver purity in every glass jar.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-[#2f1b05] mb-6 text-xl">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-[#5e4521] hover:text-[#2f1b05] transition duration-200 text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-[#2f1b05] mb-6 text-xl">
              Order Support
            </h4>

            <div className="space-y-4 text-[#5e4521] text-base">
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-[#f2b705]" />
                <span>+91 86082 01333</span>
              </p>

              <p className="flex items-center gap-3">
                <EmailIcon className="h-5 w-5 text-[#f2b705] flex-shrink-0" />
                <span className="break-all">
                  sarvanaturalfoods@gmail.com
                </span>
              </p>

              <p className="flex items-start gap-3">
                <MapIcon className="h-5 w-5 text-[#f2b705] mt-0.5" />
                <span>Pan-India delivery</span>
              </p>
            </div>

            {/* Certified Quality */}
            <div className="mt-6">
              <p className="text-sm tracking-[0.35em] text-[#7a6130] uppercase mb-2">
                Certified Quality
              </p>

              <img
                src="/image/certification.png"
                alt="Certifications"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#ffe3a2] mt-12 pt-8 text-center text-[#5e4521] text-base">
          <p>
            &copy; {new Date().getFullYear()} Sarva Natural Foods. Crafted with native
  butter & love.
</p>
        </div>
      </div>
    </footer>
  );
}