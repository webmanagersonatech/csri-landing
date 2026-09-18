"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Using react-icons

const Dedicated = () => {
  return <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:text-left relative">

        {/* Left Quote Icon */}
        <FaQuoteLeft className="absolute left-0 top-0 text-gray-200 text-6xl sm:text-8xl" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4f4e50ff]  leading-snug relative z-10">
          Driving positive transformation for people, planet, and prosperity.
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed relative z-10">
          At the <strong className="text-gray-900">Centre for Social Responsibility Initiatives (CSRI)</strong>, 
          we uplift the under-privileged through skill development programs in sectors like construction, 
          garment making, ICT, renewable energy, media, hospitality, and more. Partnering with government 
          and corporate stakeholders, we aim to promote sustainable livelihoods and inclusive development.
        </p>

        {/* Signature */}
        <p className="mt-10 text-xl font-semibold text-gray-800 lg:text-right relative z-10">
          — CSRI Team
        </p>

        {/* Right Quote Icon */}
        <FaQuoteRight className="absolute right-0 bottom-0 text-gray-200 text-6xl sm:text-8xl" />
      </div>
    </section>;
};
export default Dedicated;