import Image from "next/image";
import SectionHeader from "../SectionHeader";

const processSteps = [
  {
    number: "01",
    title: "Fresh Morning Milk",
    description:
      "Milk is collected early in the morning from healthy cows. It is handled carefully and kept clean to maintain freshness and natural quality.",
  },
  {
    number: "02",
    title: "Quality Testing",
    description:
      "Every batch of milk is tested to make sure it meets our hygiene and purity standards before moving to the next stage.",
  },
  {
    number: "03",
    title: "Traditional Bilona Method",
    description:
      "The curd is churned using the traditional bilona method. Butter is slowly heated on firewood to produce pure, aromatic ghee.",
  },
  {
    number: "04",
    title: "Filtered & Packed in Glass",
    description:
      "The ghee is filtered naturally and packed only in glass jars. This keeps the taste, aroma, and freshness intact without using plastic.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-10 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="PROCESS"
          title="How We Make Our Ghee"
          description="Simple steps. Traditional method. No shortcuts."
        />
        <div className="mt-8 mb-10 sm:mt-16 sm:mb-16 lg:mt-20 lg:mb-24">
          <Image
            src="/image/hero_ghee2.png"
            alt="Ghee Process"
            width={1400}
            height={700}
            className="rounded-[24px] sm:rounded-[40px] shadow-2xl object-cover w-full h-[200px] sm:h-[300px] lg:h-[420px]"
            loading="lazy"
          />
        </div>
        <div className="space-y-6 sm:space-y-10 max-w-4xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-4 sm:gap-8">
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#e08a00] flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display text-[#2a1b08] mb-2">{step.title}</h3>
                <p className="text-[#5e4521] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
