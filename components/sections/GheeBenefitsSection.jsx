import Image from "next/image";
import SectionHeader from "../SectionHeader";

const benefits = [
  {
    image: "/icons/23.png",
    title: "Boosts Immunity & Digestion",
    description: "Ghee supports gut health and strengthens the immune system naturally.",
  },
  {
    image: "/icons/33.png",
    title: "Rich in Vitamins",
    description: "Packed with fat-soluble vitamins A, D, E, and K for overall wellness.",
  },
  {
    image: "/icons/43.png",
    title: "Strengthens Bones & Joints",
    description: "Provides essential fatty acids that lubricate joints and support bone density.",
  },
  {
    image: "/icons/533.png",
    title: "Gives Natural Energy",
    description: "A quick, healthy source of sustained energy without processed sugars.",
  },
  {
    image: "/icons/63.png",
    title: "Glowing Skin & Hair",
    description: "Nourishes skin from within and promotes strong, shiny hair naturally.",
  },
];

export default function GheeBenefitsSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="GHEE BENEFITS"
          title="Why Ghee Is Good for You"
          description="From milk to ghee — 50 years of tradition. Pure cow ghee crafted with care for your health and well-being."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="modern-card p-6 text-center flex flex-col items-center">
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={140}
                height={140}
                className="object-contain mb-2"
                loading="lazy"
              />
              <h3 className="text-lg font-display text-[#2a1b08] mb-2">{benefit.title}</h3>
              <p className="text-[#5e4521] text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
