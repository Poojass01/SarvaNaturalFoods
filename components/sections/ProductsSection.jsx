"use client";

import SectionHeader from "../SectionHeader";

const products = [
  {
    id: "500ml",
    title: "500 ml Family Jar",
    sizeLabel: "500 ml",
    originalPrice: "₹1,100",
    price: "₹749",
    description:
      "Our most-loved jar for cooking, baking, and bullet coffees. Ships with tasting card and purity notes.",
    bestFor: "Everyday cooking · Toddlers · Immunity tonics",
    yield: "Lasts ~1 month for a family of four",
  },
  {
    id: "1l",
    title: "1 L Celebration Pack",
    sizeLabel: "1 litre",
    originalPrice: "₹1,999",
    price: "₹1,399",
    description:
      "Bulk batch for festive kitchens, cloud kitchens, and ghee lovers who refuse to run out mid-week.",
    bestFor: "Festivals · Meal preps · Joint family kitchens",
    yield: "Lasts ~6 weeks with generous cooking",
  },
];

export { products };

export default function ProductsSection({ onOrderClick }) {
  return (
    <section id="products" className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="PRODUCTS"
          title="Pick a jar, we pour fresh"
          description="Within a week of manufacturing, the ghee will be delivered at your doorstep."
        />
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="modern-card p-8 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-[#e08a00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Limited Offer
              </div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#b66903] mb-4">
                {product.sizeLabel}
              </span>
              <h3 className="text-2xl font-display text-[#2a1b08] mb-4">{product.title}</h3>
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-lg text-[#9b8b6d] line-through">{product.originalPrice}</span>
                  <span className="text-3xl font-bold text-[#e08a00]">{product.price}</span>
                </div>
              </div>
              <p className="text-[#5e4521] text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>
              <div className="space-y-2 text-sm text-[#7a6130] mb-8">
                <p><strong className="text-[#2a1b08]">Best for:</strong> {product.bestFor}</p>
                <p><strong className="text-[#2a1b08]">Keeps:</strong> {product.yield}</p>
              </div>
              <button
                onClick={() => onOrderClick(product)}
                className="w-full bg-gradient-to-r from-[#ffd166] via-[#f4a621] to-[#e08a00] text-[#2f1b05] px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
