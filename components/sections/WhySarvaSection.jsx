import Image from "next/image";
import ProfessionalBackground from "../ProfessionalBackground";
import SectionHeader from "../SectionHeader";

const benefitCards = [
  {
    title: "Own Managed Cow Farms",
    description:
      "Our cattle are raised in hygienic environments with natural feeding practices. We monitor health, diet, and living conditions to ensure purity begins at the source.",
    image: "/image/cow_farm1.png",
  },
  {
    title: "Village Milk Partnerships",
    description:
      "We work closely with nearby village farmers who follow our strict quality standards, ensuring consistent and ethically sourced milk collection.",
    image: "/image/cow_farm3.png",
  },
  {
    title: "Traditional Ghee Preparation",
    description:
      "Our ghee is crafted using slow and traditional methods passed down through generations, preserving natural aroma, texture, and authentic taste.",
    image: "/image/ghee_man.png",
  },
  {
    title: "Glass-Only Packaging",
    description:
      "We never use plastic. Our ghee is stored in glass jars to maintain freshness, preserve flavor, and naturally extend shelf life.",
    image: "/image/ghee_222.png",
  },
];

export default function WhySarvaSection() {
  return (
    <section id="why-ghee" className="py-10 sm:py-12 lg:py-16 bg-[#fff6e3] relative overflow-hidden">
      <ProfessionalBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          subtitle="WHY SARVA"
          title="Purity Backed by Process"
          description="Every step — from cattle care to final packaging — is handled with discipline, transparency, and traditional integrity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-8 sm:mt-16">
          {benefitCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-[#ffe4a3] hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden h-40 sm:h-48 lg:h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-xl font-display text-[#2a1b08] mb-4">{card.title}</h3>
                <p className="text-[#5e4521] text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
