import React from 'react';
import Image from 'next/image';

export default function EnquiryForm() {
  const paperTypes = [
    "Handmade Paper", "Antique Paper", "Plantable Paper", "Seed Paper",
    "Paper Boxes", "Paper Bags", "Leather Journals", "Leather Bags",
    "Honeycomb Décor", "Lampshades", "Gifting & Packaging", "Seasonal Décor",
    "Custom Commission", "Other"
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      
      {/* Top Label & Divider */}
      <div className="mb-12">
        <p className="text-xs text-gray-800 uppercase tracking-wide mb-4">
          Enquiry Form
        </p>
        <hr className="border-gray-300 w-full" />
      </div>

      {/* Main Heading */}
      <h2 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-16 tracking-tight">
        Send <span className="italic font-medium">Us an</span> Enquiry
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Image */}
        <div className="w-full h-[400px] lg:h-auto relative rounded-3xl overflow-hidden">
          <Image 
            src="/images/contact.png" 
            alt="Century Overseas Workshop" 
            fill
            className="object-cover"
          />
        </div>

        {/* Column 2: Your Details */}
        <div className="flex flex-col gap-6 lg:pl-4">
          <h3 className="text-[#004342] text-xl font-bold mb-2">Your Details</h3>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-800">Full Name</label>
            <input type="text" placeholder="Your full name" className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-800">Email Address</label>
            <input type="email" placeholder="you@company.com" className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-800">Phone / WhatsApp Number</label>
            <input type="tel" placeholder="Enter your Phone / WhatsApp Number" className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-800">Company / Organisation</label>
            <input type="text" placeholder="Name of your business or studio" className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-800">Country</label>
            <input type="text" placeholder="Where are you based?" className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400" />
          </div>
        </div>

        {/* Column 3: Paper Type */}
        <div className="flex flex-col lg:pl-8 lg:border-l border-gray-300">
          <h3 className="text-[#004342] text-xl font-bold mb-6">Paper Type</h3>
          <p className="text-[13px] text-gray-800 mb-4">Primary Interest</p>
          
          <div className="flex flex-wrap gap-3">
            {paperTypes.map((type, index) => (
              <button 
                key={index}
                type="button"
                className="border border-gray-300 rounded-full px-4 py-2 text-[13px] text-gray-700 hover:border-[#017574] hover:text-[#017574] transition-colors bg-transparent"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Column 4: Requirements */}
        <div className="flex flex-col lg:pl-8 lg:border-l border-gray-300">
          <h3 className="text-[#004342] text-xl font-bold mb-6">Requirements</h3>
          
          <div className="flex flex-col gap-1.5 mb-6">
            <label className="text-[13px] text-gray-800">Your Message or Requirements</label>
            <textarea 
              placeholder="Describe your project, quantities, specifications, timeline, or anything useful for us to know..." 
              className="w-full border border-gray-300 rounded-2xl p-5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] placeholder-gray-400 h-[220px] resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="text-[13px] text-gray-800">Attach Reference Files</label>
            <div className="flex w-full border border-gray-300 rounded-full h-12 p-1 items-center bg-transparent relative">
              <button type="button" className="bg-[#017574] hover:bg-[#015a59] text-white px-6 h-full rounded-full text-[13px] transition-colors z-10">
                Upload
              </button>
              {/* Invisible file input overlaid for functionality */}
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-[#017574] hover:bg-[#015a59] text-white px-8 py-3.5 rounded-full text-[14px] font-bold transition-colors w-fit flex items-center gap-2 mt-auto"
          >
            Send Enquiry
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}