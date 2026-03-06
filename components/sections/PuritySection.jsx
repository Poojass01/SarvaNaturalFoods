import SectionHeader from "../SectionHeader";

const purityHighlights = [
  {
    title: "Transparent Source",
    detail:
      "Our ghee is made from milk sourced directly from our own farms and trusted village partners — you know exactly where it comes from.",
  },
  {
    title: "Original Taste",
    detail:
      "Prepared using the traditional bilona method and slow heating, our ghee preserves the rich aroma, natural grainy texture, and authentic taste that true cow ghee is known for.",
  },
  {
    title: "Reusable Glass",
    detail:
      "Our ghee is stored only in high-quality glass jars, never plastic. Glass preserves the natural aroma, flavor, and freshness of ghee while keeping it pure and safe for longer.",
  },
  {
    title: "No Artificial Additives",
    detail:
      "Our ghee contains no artificial flavors, colors, preservatives, or enhancers. What you taste is purely natural milk fat — nothing more.",
  },
];

export default function PuritySection() {
  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="PURITY PROMISE"
          title="Checks you can taste"
          description="Naturally ghee taste comes with climate-smart packaging bundled with every order"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {purityHighlights.map((item) => (
            <div key={item.title} className="modern-card p-6">
              <h3 className="text-lg font-display text-[#2a1b08] mb-2">{item.title}</h3>
              <p className="text-[#5e4521] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
