"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./sections/HeroSection";

const AboutSection = dynamic(() => import("./sections/AboutSection"));
const VideoSection = dynamic(() => import("./sections/VideoSection"));
const WhySarvaSection = dynamic(() => import("./sections/WhySarvaSection"));
const GheeBenefitsSection = dynamic(() => import("./sections/GheeBenefitsSection"));
const ProductsSection = dynamic(() => import("./sections/ProductsSection"));
const ProcessSection = dynamic(() => import("./sections/ProcessSection"));
const PuritySection = dynamic(() => import("./sections/PuritySection"));
const PackagingValuesSection = dynamic(() => import("./sections/PackagingValuesSection"));
const GallerySection = dynamic(() => import("./sections/GallerySection"));
const TestimonialsSection = dynamic(() => import("./sections/TestimonialsSection"));
const ContactSection = dynamic(() => import("./sections/ContactSection"));
const OrderModal = dynamic(() => import("./sections/OrderModal"));

const whatsappNumber = "918608201333";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openOrderModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-12" id="top">
        <HeroSection whatsappNumber={whatsappNumber} />
        <AboutSection />
        <VideoSection />
        <WhySarvaSection />
        <GheeBenefitsSection />
        <ProductsSection onOrderClick={openOrderModal} />
        <ProcessSection />
        <PuritySection />
        <PackagingValuesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection whatsappNumber={whatsappNumber} />
      </main>
      <Footer />
      <OrderModal
        isOpen={isModalOpen}
        onClose={closeOrderModal}
        product={selectedProduct}
      />
    </>
  );
}
