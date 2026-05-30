"use client";

import React, { useState } from 'react';

const stepsData = [
  {
    id: 1,
    title: 'Submit Your Requirement',
    desc: 'Use the form below or email us directly at aqib@centurypapers.com. Include as much detail as you have product type, quantity, size, specification, timeline, and any branding or customisation requirements.'
  },
  {
    id: 2,
    title: 'We Review and Clarify',
    desc: "Within one working day, we will acknowledge your request. If we need additional information to produce an accurate quotation, we will ask for it at this stage. We prefer to ask one question and do it right than to issue a quotation that doesn't fit your actual requirement."
  },
  {
    id: 3,
    title: 'Receive Your Quotation',
    desc: 'We provide a written quotation including unit pricing, minimum order quantity, lead time, payment terms, and shipping estimate. Sample availability is noted in the quotation.'
  },
  {
    id: 4,
    title: 'Approve and Order',
    desc: 'Once you approve the quotation and provide your advance payment, your order enters the production queue. We issue a production confirmation with the expected dispatch date.'
  },
  {
    id: 5,
    title: 'Receive a Production Sample (Custom Orders)',
    desc: 'For custom and bespoke orders, we produce a pre-production sample for your approval before committing to full production. The sample is dispatched for your review and approval in writing before we proceed.'
  }
];

export default function QuotationProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full mt-16">
      <h2 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-16 tracking-tight">
        How the Quotation <span className="italic">Process</span> Works
      </h2>

      {/* Relative wrapper for the entire timeline to hold the continuous background line */}
      <div className="relative flex flex-col">
        
        {/* The single, continuous vertical line for the whole section */}
        <div className="absolute left-[15px] md:left-[23px] top-[40px] bottom-[50px] w-[1px] bg-gray-300 z-0" />

        {stepsData.map((step, idx) => (
          <div 
            key={step.id} 
            className="flex items-start mb-8 relative cursor-pointer" // Changed to items-start and mb-8
            onMouseEnter={() => setActiveStep(step.id)}
          >
            
            {/* Left Column: Timeline Dot Area */}
            {/* Set a fixed height so the layout doesn't jump when the dot appears/disappears */}
            <div className="relative flex justify-center w-8 md:w-12 shrink-0 mt-[26px] h-[20px]">
              
              {/* Status Dot: Placed exactly in the middle of this column, covering the line underneath */}
              {activeStep === step.id && (
                <div className="absolute z-10 flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] border-[#017574] bg-[#ECFFFF] top-1/2 -translate-y-1/2 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#017574]"></div>
                </div>
              )}
            </div>

            {/* Middle Column: Step Number */}
            <div className={`w-20 md:w-28 shrink-0 mt-[26px] font-bold text-[14px] transition-colors duration-300 ${
              activeStep === step.id ? 'text-[#017574]' : 'text-gray-400'
            }`}>
              Step {step.id}
            </div>

            {/* Right Column: The Content Card */}
            <div className={`flex-1 flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-3xl border transition-all duration-300 ${
              activeStep === step.id 
                ? 'bg-[#ECFFFF] border-[#017574]/30 shadow-sm' 
                : 'bg-transparent border-gray-300'
            }`}>
              <div className="md:w-5/12 lg:w-1/3">
                <h3 className="text-[#004342] text-xl font-bold pr-4 leading-snug">
                  {step.title}
                </h3>
              </div>
              <div className="md:w-7/12 lg:w-2/3">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}