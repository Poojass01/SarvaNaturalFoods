import Image from "next/image";
import ProfessionalBackground from "../ProfessionalBackground";
import SectionHeader from "../SectionHeader";
import { ArrowIcon } from "../Icons";

const gheeGallery = [
  {
    id: "farm",
    src: "/image/cow_farm4.png",
    alt: "Cow farm",
    caption: "Healthy Cattle Raised with Care",
    location: "Our Managed Cow Farms",
  },
  {
    id: "collection",
    src: "/image/ghee_hero1.png",
    alt: "Milk collection",
    caption: "Structured Milk Collection",
    location: "Village Partnerships",
  },
  {
    id: "traditional",
    src: "/image/ghee_making.png",
    alt: "Traditional ghee making",
    caption: "Traditional Bilona Method",
    location: "Slow Firewood Preparation",
  },
  {
    id: "packaging",
    src: "/image/ghee_4.jpeg",
    alt: "Glass jar packaging",
    caption: "Packed in Glass for Purity",
    location: "No Plastic Used",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-8 sm:py-10 relative overflow-hidden">
      <ProfessionalBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="OUR JOURNEY"
          title="From Farm to Pure Ghee"
          description="From healthy cattle and village milk collection to slow bilona preparation and glass packaging — purity at every step."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {gheeGallery.map((shot) => (
            <div key={shot.id} className="gallery-card">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={600}
                height={720}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover w-full h-56 sm:h-64 lg:h-80"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white z-10">
                <p className="text-sm sm:text-lg font-display">{shot.caption}</p>
                <p className="text-xs sm:text-sm text-white/80">{shot.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffd166] via-[#f4a621] to-[#e08a00] text-[#2f1b05] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg text-sm sm:text-base"
          >
            Enquire About Our Process
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
