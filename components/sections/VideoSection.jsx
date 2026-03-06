import SectionHeader from "../SectionHeader";

export default function VideoSection() {
  return (
    <section id="video-showcase" className="py-8 sm:py-10 bg-[#fff8e5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="OUR FARMS"
          title="Where Happy Cows Roam"
          description="Promise of purity. No shortcuts."
        />
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#ffe4a3]">
          <iframe
            src="https://drive.google.com/file/d/11mcrb4R8D0nL_QxHRau0_K0Q9icSRJrO/preview"
            allow="autoplay; fullscreen"
            className="w-full aspect-video"
            loading="lazy"
            title="Sarva Natural Foods - Our Farms"
          />
        </div>
      </div>
    </section>
  );
}
