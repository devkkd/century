import React from 'react';
import Image from 'next/image';

export default function QuotationSuccess() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 min-h-[70vh] flex flex-col">
      
      {/* Top Label & Divider */}
      <div className="mb-24">
        <p className="text-xs text-gray-800 uppercase tracking-wide mb-4 font-medium">
          Quotation Form Copy
        </p>
        <hr className="border-gray-300 w-full" />
      </div>

      {/* Main Centered Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto flex-1">
        
        {/* Success Tick Icon */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-10">
          <Image 
            src="/images/tick-circle.svg" 
            alt="Success Tick Icon" 
            fill
            className="object-contain"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-10 tracking-tight leading-snug">
          Your Quotation Request Has Been <br className="hidden md:block" /> Received By The Workshop
        </h2>

        {/* Supporting Text */}
        <div className="flex flex-col gap-6 text-[15px] text-gray-800 leading-relaxed">
          <p>
            We will review your requirements and respond - usually within one <br className="hidden md:block" /> working day, sometimes sooner.
          </p>
          <p>
            If you need to reach us urgently before then, <br className="hidden md:block" /> please WhatsApp us at +91 96605 05555.
          </p>
        </div>

      </div>
      
    </section>
  );
}