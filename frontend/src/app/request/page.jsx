import React from 'react';
import QuotationProcess from '@/components/QuotationProcess'; // Update path if needed
import QuotationForm from '@/components/QuotationForm';

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">
      
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-20">
        
        {/* Pill Button */}
        <div className="border border-[#017574]/30 bg-[#ECFFFF] text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
          Request Quote
        </div>

        {/* Main Title - with "Need" italicized */}
        <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight">
          Tell Us What You <span className="italic font-medium">Need</span>, We'll Tell You
          <br className="hidden md:block" /> What It Costs
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[13px] text-gray-700 leading-relaxed max-w-4xl mx-auto">
          No Automated Pricing. No Algorithmic Estimates. When You Submit A Quotation Request, It Goes Directly To Aqib Kagzi At The Workshop. We Will Review Your Requirements, Ask Any Clarifying Questions, And Provide An Honest, Itemised Quotation Usually Within One Working Day.
        </p>
      </div>

      {/* Process Divider */}
      <div className="mb-8">
        <p className="text-xs text-gray-800 uppercase tracking-widest mb-4 font-medium">
          Process
        </p>
        <hr className="border-gray-300 w-full" />
      </div>

      {/* Render the Process Timeline Component */}
      <QuotationProcess />
      <QuotationForm/>

    </main>
  );
}