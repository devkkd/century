import EnquiryForm from '@/components/EnquiryForm';
import QuotationSuccess from '@/components/QuotationSuccess';
import React from 'react';

export default function ContactPage() {
    return (
        <>
            <main className="min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">

                {/* Top Section: Heading & Intro */}
                <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-24">

                    {/* Pill Button */}
                    <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
                        Contact Us
                    </div>

                    {/* Main Title - with "Catalogue" italicized */}
                    <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight">
                        Start a Conversation, Not a <span className="whitespace-nowrap"><span className="italic font-medium">Catalogue</span> Browse.</span>
                    </h1>

                    {/* Intro Paragraph */}
                    <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        We Would Rather Talk To You Than Send You A Pdf. Whether You Have A Specific Requirement, A Question About Materials, A Custom Project In Mind, Or Simply Want To Understand What We Can Do Before Committing Get In Touch. You Will Hear From The Workshop Directly, Not From An Automated System.
                    </p>
                </div>

                {/* Divider Section */}
                <div className="mb-16">
                    <p className="text-xs text-gray-800 uppercase tracking-wider mb-4 font-medium">
                        Contact Details
                    </p>
                    <hr className="border-gray-300 w-full" />
                </div>

                {/* Details Section */}
                <div>
                    {/* Subheading */}
                    <h2 className="text-[#004342] text-4xl md:text-5xl font-playfair mb-12 tracking-tight">
                        How to <span className="italic">Reach</span> Us
                    </h2>

                    {/* 4-Column Grid with vertical dividers on large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-gray-300">

                        {/* Column 1: Workshop Address */}
                        <div className="lg:pr-8">
                            <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                                Workshop Address
                            </h3>
                            <p className="font-bold text-black text-[14px] mb-4">
                                Century Overseas Papers
                            </p>
                            <p className="text-gray-700 text-[13px] leading-relaxed">
                                Workshop 316, Jain Hostel Road<br />
                                Sanganer, Jaipur - 302029<br />
                                Rajasthan, India
                            </p>
                        </div>

                        {/* Column 2: Email */}
                        <div className="lg:px-8">
                            <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                                Email
                            </h3>
                            <div className="mb-6">
                                <p className="font-bold text-black text-[14px] mb-2">
                                    General & International Sales:
                                </p>
                                <p className="text-gray-700 text-[13px]">
                                    aqib@centurypapers.com
                                </p>
                            </div>
                            <div>
                                <p className="font-bold text-black text-[14px] mb-2">
                                    Orders & Operations:
                                </p>
                                <p className="text-gray-700 text-[13px]">
                                    sales@centurypapers.com
                                </p>
                            </div>
                        </div>

                        {/* Column 3: Orders & Operations */}
                        <div className="lg:px-8">
                            <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                                Orders & Operations
                            </h3>
                            <p className="font-bold text-black text-[14px] mb-4">
                                +91 96605 05555
                            </p>
                            <p className="text-gray-700 text-[13px] mb-6 leading-relaxed">
                                Available Monday to Saturday, 10:00 AM to 6:00 PM IST
                            </p>
                            <p className="text-gray-700 text-[13px] leading-relaxed">
                                WhatsApp preferred for time-sensitive queries and image sharing.
                            </p>
                        </div>

                        {/* Column 4: Sample Dispatch */}
                        <div className="lg:pl-8">
                            <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                                Sample Dispatch
                            </h3>
                            <p className="text-gray-700 text-[13px] leading-relaxed">
                                Sample sets are available on request. Most orders are dispatched within 5 working days from the date of request confirmation.
                            </p>
                        </div>

                    </div>
                </div>

            </main>
            <EnquiryForm />
            <QuotationSuccess/>
        </>
    );
}