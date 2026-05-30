"use client";

import React, { useState } from 'react';
import QuotationSuccess from './QuotationSuccess'; // Adjust path if needed

export default function QuotationForm() {
  // State to toggle between the Form and the Success Message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // States for the interactive pill buttons
  const [brandingRequired, setBrandingRequired] = useState('Yes');
  const [activeBrandingTypes, setActiveBrandingTypes] = useState(['Embossed Logo']);
  const [activeTimeline, setActiveTimeline] = useState('2-4 Week');

  // Handle multi-select for Branding Types
  const toggleBrandingType = (type) => {
    if (activeBrandingTypes.includes(type)) {
      setActiveBrandingTypes(activeBrandingTypes.filter((t) => t !== type));
    } else {
      setActiveBrandingTypes([...activeBrandingTypes, type]);
    }
  };

  // Mock submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    // For now, we just trigger the success screen
    setIsSubmitted(true);
  };

  // If submitted, show the success component we built earlier!
  if (isSubmitted) {
    return <QuotationSuccess />;
  }

  // Otherwise, show the form
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
      
      {/* Main Heading */}
      <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair mb-12 tracking-tight">
        Complete the Quotation <span className="italic">Request</span> Form
      </h2>

      <form onSubmit={handleSubmit} className="w-full">
        {/* 4-Column Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:divide-x divide-gray-300">
          
          {/* ================= COLUMN 1: YOUR DETAILS ================= */}
          <div className="flex flex-col gap-5 lg:pr-4">
            <h3 className="text-[#004342] text-xl font-bold mb-2">Your Details</h3>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Full Name</label>
              <input type="text" p="John Doe" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Email Address</label>
              <input type="email" p="johndeo@gmail.com" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Phone / WhatsApp Number</label>
              <input type="tel" p="1234567890" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Company / Organisation</label>
              <input type="text" p="abcd" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Country</label>
              <input type="text" p="abcd" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>
          </div>

          {/* ================= COLUMN 2: PRODUCT DETAILS ================= */}
          <div className="flex flex-col gap-5 lg:px-8">
            <h3 className="text-[#004342] text-xl font-bold mb-2">Product Details</h3>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Product Category</label>
              <select className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800  appearance-none cursor-pointer">
                <option>Handmade Paper</option>
                <option>Leather Journals</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Specific Product</label>
              <input type="text" p="c102" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Quantity Required</label>
              <input type="text" p="100" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Size / Dimensions</label>
              <input type="text" p="7x5&quot;" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Weight / GSM (paper orders)</label>
              <input type="text" p="100" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Colour / Finish Preference</label>
              <textarea p="Lorem Ipsum" className="w-full border border-gray-300 rounded-2xl px-5 py-3 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800  resize-none h-[70px]"></textarea>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Seed Variety (seed paper orders)</label>
              <input type="text" placeholder="e.g. wildflower mix, basil, tomato" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800  placeholder-gray-400" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Closure Type (Journal orders)</label>
              <input type="text" p="Wrap tie" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>
          </div>

          {/* ================= COLUMN 3: BRANDING ================= */}
          <div className="flex flex-col gap-5 lg:px-8">
            <h3 className="text-[#004342] text-xl font-bold mb-2">Branding & Customization</h3>
            
            {/* Branding Required Radio */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-gray-800">Do you require custom branding?</label>
              <div className="flex gap-3">
                {['Yes', 'No', 'Unsure'].map(option => (
                  <button 
                    key={option} type="button" 
                    onClick={() => setBrandingRequired(option)}
                    className={`border rounded-full px-5 py-2 text-[12px] transition-colors ${
                      brandingRequired === option 
                        ? 'bg-[#017574] text-white border-[#017574]' 
                        : 'border-gray-300 text-gray-700 bg-transparent hover:border-[#017574]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Branding Types Multi-select */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-gray-800 mt-2">Branding Type</label>
              <div className="flex flex-wrap gap-2">
                {['Embossed Logo', 'Foil Stamp', 'Screen Print', 'Custom Paper Colour', 'Custom Seed Mix', 'Multiple', 'Branded Packaging', 'Other'].map(type => (
                  <button 
                    key={type} type="button"
                    onClick={() => toggleBrandingType(type)}
                    className={`border rounded-full px-4 py-2 text-[12px] transition-colors ${
                      activeBrandingTypes.includes(type)
                        ? 'bg-[#017574] text-white border-[#017574]' 
                        : 'border-gray-300 text-gray-700 bg-transparent hover:border-[#017574]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Branding Requirements Textarea */}
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-[12px] text-gray-800">Branding Requirements</label>
              <textarea p="Lorem ipsum" className="w-full border border-gray-300 rounded-2xl p-5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800  h-[160px] resize-none"></textarea>
            </div>

            {/* File Upload 1 */}
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-[12px] text-gray-800">Attach Reference Files</label>
              <div className="flex w-full border border-gray-300 rounded-full h-[38px] p-[3px] items-center bg-transparent relative">
                <button type="button" className="bg-[#004342] text-white px-5 h-full rounded-full text-[12px] transition-colors z-10">
                  Upload
                </button>
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* ================= COLUMN 4: TIMELINE & DELIVERY ================= */}
          <div className="flex flex-col gap-5 lg:pl-8">
            <h3 className="text-[#004342] text-xl font-bold mb-2">Timeline & Delivery</h3>
            
            {/* Timeline Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] text-gray-800">Required</label>
              <div className="flex flex-wrap gap-3">
                {['1-2 Week', '2-4 Week', '4+ Week'].map(time => (
                  <button 
                    key={time} type="button"
                    onClick={() => setActiveTimeline(time)}
                    className={`border rounded-full px-4 py-2 text-[12px] transition-colors ${
                      activeTimeline === time
                        ? 'bg-[#017574] text-white border-[#017574]' 
                        : 'border-gray-300 text-gray-700 bg-transparent hover:border-[#017574]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-[12px] text-gray-800">Delivery Country</label>
              <input type="text" p="abcd" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Is there a hard deadline?</label>
              <input type="text" p="No" className="w-full border border-gray-300 rounded-full px-5 py-2 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800 " />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Any additional information</label>
              <textarea p="Lorem ipsum" className="w-full border border-gray-300 rounded-2xl p-5 text-[13px] bg-transparent focus:outline-none focus:border-[#017574] text-gray-800  h-[160px] resize-none"></textarea>
            </div>

            {/* File Upload 2 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-gray-800">Attach Reference Files</label>
              <div className="flex w-full border border-gray-300 rounded-full h-[38px] p-[3px] items-center bg-transparent relative">
                <button type="button" className="bg-[#004342] text-white px-5 h-full rounded-full text-[12px] transition-colors z-10">
                  Upload
                </button>
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col items-center">
          <p className="text-[13px] text-gray-800 mb-8 text-center w-full flex justify-start lg:justify-start">
            <strong>PRIVACY NOTE:</strong>&nbsp;Information submitted via this form is used solely to prepare and deliver your price quotation. See our Privacy Policy for full details.
          </p>
          
          <button 
            type="submit" 
            className="bg-[#017574] hover:bg-[#015a59] text-white px-8 py-3 rounded-full text-[14px] font-bold transition-colors shadow-sm"
          >
            Submit Quotation Request →
          </button>
        </div>

      </form>
    </section>
  );
}