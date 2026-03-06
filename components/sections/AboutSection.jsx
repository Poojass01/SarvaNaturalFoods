import Image from "next/image";
import ProfessionalBackground from "../ProfessionalBackground";
import SectionHeader from "../SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 bg-[#fff9ed] relative overflow-hidden">
      <ProfessionalBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          subtitle="ABOUT SARVA"
          title="Three Generations. One Commitment to Purity."
          description="From a humble beginning with 10 cows near Coimbatore to a structured dairy operation rooted in tradition, strict quality standards, and uncompromising purity in every batch of milk and ghee we produce."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-12 lg:mb-24">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#ffe4a3]">
              <Image
                src="/image/purity.jpg"
                alt="Traditional dairy farm operations"
                width={700}
                height={900}
                className="object-cover w-full h-[260px] sm:h-[380px] lg:h-[520px]"
              />
            </div>
            <div className="absolute bottom-3 right-3 sm:-bottom-8 sm:-right-8 bg-gradient-to-r from-[#ffd166] via-[#f4a621] to-[#e08a00] text-[#2f1b05] px-4 py-3 sm:px-8 sm:py-6 rounded-2xl shadow-2xl">
              <p className="text-2xl sm:text-3xl font-display font-bold">50+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider">Years of Dairy Experience</p>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 mt-6 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-[#2a1b08]">
              A Legacy Built on Integrity, Care & Consistency
            </h3>
            <p className="text-[#5e4521] leading-relaxed text-lg">
              With over five decades of experience in the milk industry, our
              journey began in a small village near Coimbatore with just 10
              cows and a simple belief — quality should never be compromised.
            </p>
            <p className="text-[#5e4521] leading-relaxed text-lg">
              Over the years, that belief has shaped a structured and
              disciplined dairy ecosystem. Today, we produce between 8,000
              to 10,000 litres of milk daily, supported by our own managed
              cow farms and trusted village partners who follow strict
              hygiene and feeding standards.
            </p>
            <p className="text-[#5e4521] leading-relaxed text-lg">
              Now led by the third generation of our family, we continue to
              uphold traditional dairy values while implementing consistent
              quality systems that ensure purity from farm to final product.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 max-w-2xl">
              <div className="modern-card p-2 sm:p-3 md:p-4 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#e08a00]">475</p>
                <p className="text-[10px] sm:text-xs text-[#5e4521] mt-1">Associated Farmers</p>
              </div>
              <div className="modern-card p-2 sm:p-3 md:p-4 text-center">
                <p className="text-xs sm:text-base md:text-xl font-bold text-[#e08a00]">8,000–10,000L</p>
                <p className="text-[10px] sm:text-xs text-[#5e4521] mt-1">Liters Daily</p>
              </div>
              <div className="modern-card p-2 sm:p-3 md:p-4 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#e08a00]">5+</p>
                <p className="text-[10px] sm:text-xs text-[#5e4521] mt-1">Quality Checks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-[#ffe4a3]">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display text-[#2a1b08]">
                Structured Milk Collection & Reliable Supply Network
              </h3>
              <p className="text-[#5e4521] leading-relaxed text-lg">
                Our milk collection process is carefully structured and
                managed by a trained and experienced workforce. From
                hygienic milking practices to immediate handling and
                monitoring, every stage is controlled to preserve freshness
                and nutritional integrity.
              </p>
              <p className="text-[#5e4521] leading-relaxed text-lg">
                We supply high-quality, rigorously tested milk to leading
                milk processing companies, local dairies, bakeries, and food
                businesses across Tamil Nadu. Only quality-approved batches
                are dispatched, ensuring consistent standards and long-term
                trust.
              </p>
              <p className="text-[#5e4521] leading-relaxed text-lg">
                Our strong reputation in the dairy ecosystem has been built
                through reliability, transparency, and uncompromising
                quality control practiced consistently for over 50 years.
              </p>
            </div>
            <Image
              src="/image/ghee_223.png"
              alt="Milk supply operations"
              width={600}
              height={600}
              className="rounded-3xl object-cover w-full h-[200px] sm:h-[260px] md:h-[350px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
