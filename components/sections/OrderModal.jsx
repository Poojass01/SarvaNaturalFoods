"use client";

import { useState } from "react";

export default function OrderModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    pincode: "",
  });
  const whatsappNumber = "918608201333";

  if (!isOpen || !product) return null;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (event) => {
    event.preventDefault();
    const { name, mobile, address, pincode } = formData;
    if (!name || !mobile || !address || !pincode) return;
    const message = encodeURIComponent(
      `New Ghee order from Website` +
        `\nProduct: ${product.title} ` +
        `\nName: ${name}` +
        `\nMobile: ${mobile}` +
        `\nAddress: ${address}` +
        `\nPincode: ${pincode}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    onClose();
    setFormData({ name: "", mobile: "", address: "", pincode: "" });
  };

  return (
    <div className="fixed inset-0 bg-[#1f1606]/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7a6130] hover:text-[#2a1b08]"
          aria-label="Close order form"
        >
          ✕
        </button>
        <p className="text-sm uppercase tracking-[0.3em] text-[#a0782d] mb-2">
          WhatsApp order
        </p>
        <h3 className="text-2xl font-display text-[#2a1b08] mb-2">
          {product.title}
        </h3>
        <p className="text-sm text-[#7a6130] mb-4">
          {product.sizeLabel} · {product.price}
        </p>
        <form className="space-y-4" onSubmit={handleSubmitOrder}>
          <div>
            <label className="block text-sm font-semibold text-[#5e4521] mb-1">Full name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl focus:ring-2 focus:ring-[#f4a621]"
              placeholder="Ananya Rao"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5e4521] mb-1">Mobile number *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl focus:ring-2 focus:ring-[#f4a621]"
              placeholder="10-digit mobile"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5e4521] mb-1">Delivery address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              required
              className="w-full px-4 py-3 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl focus:ring-2 focus:ring-[#f4a621]"
              placeholder="House / Street / City"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#5e4521] mb-1">Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[#fffaf0] border border-[#ffe4a3] rounded-xl focus:ring-2 focus:ring-[#f4a621]"
              placeholder="600001"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffd166] via-[#f4a621] to-[#e08a00] text-[#2f1b05] px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Send order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
