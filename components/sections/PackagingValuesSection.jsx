const packagingNotes = [
  "Only glass bottles—never plastic—so freshness and aroma stay intact",
  "Naturally longer shelf life with airtight, lead-free lids",
  "Tamper seals and batch codes for traceability",
];

const coreValues = [
  "Tradition carried across generations",
  "Quality without compromise",
  "Ethical sourcing from farms and villages",
  "Pure products made the natural way",
];

export default function PackagingValuesSection() {
  return (
    <section className="py-8 sm:py-10 bg-[#fff9ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          <div className="modern-card p-7 h-full flex flex-col">
            <div className="text-left mb-4 relative">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/85 border border-[#ffe9b1]/80 mb-4 shadow-sm">
                <span className="w-2 h-2 bg-[#f2b705] rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-[#b66903] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                  PACKAGING
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1b08] mb-2 font-display">
                Pure & sustainable
              </h2>
              <p className="text-[#5f4521] text-base sm:text-lg leading-relaxed">
                Glass-first so flavor, aroma, and shelf life stay intact.
              </p>
            </div>
            <ul className="space-y-3 text-[#5e4521] text-base leading-relaxed mt-auto">
              {packagingNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f2b705] rounded-full mt-2 flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="modern-card p-7 h-full flex flex-col">
            <div className="text-left mb-4 relative">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/85 border border-[#ffe9b1]/80 mb-4 shadow-sm">
                <span className="w-2 h-2 bg-[#f2b705] rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-[#b66903] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                  OUR CORE VALUES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1b08] mb-2 font-display">
                What guides every batch
              </h2>
              <p className="text-[#5f4521] text-base sm:text-lg leading-relaxed">
                Simple principles that keep our ghee honest.
              </p>
            </div>
            <ul className="space-y-3 text-[#5e4521] text-base leading-relaxed mt-auto">
              {coreValues.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f2b705] rounded-full mt-2 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
