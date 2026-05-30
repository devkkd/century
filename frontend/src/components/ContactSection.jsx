import React from 'react';

export default function ContactSection() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">

            {/* Top Label & Divider */}
            <div className="mb-12">
                <p className="text-sm text-gray-800 uppercase tracking-wide mb-4">
                    Get in Touch
                </p>
                <hr className="border-gray-300 w-full" />
            </div>

            {/* Main Heading */}
            <h2 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair tracking-tight mb-16">
                Start a Conversation, Not a <span className="italic font-light">Catalogue </span>
                Browse      </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* Left Column: Contact Details */}
                <div className="flex flex-col">

                    {/* Workshop Row */}
                    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-300">
                        <div className="w-full sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-[15px]">
                            Workshop
                        </div>
                        <div className="w-full sm:w-2/3 text-gray-800 text-[15px] leading-relaxed">
                            <p>316 Jain Hostel Road, Sanganer</p>
                            <p>Jaipur - 302029, Rajasthan, India</p>
                        </div>
                    </div>

                    {/* Email Row */}
                    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-300">
                        <div className="w-full sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-[15px]">
                            Email
                        </div>
                        <div className="w-full sm:w-2/3 text-gray-800 text-[15px] leading-relaxed">
                            <p>aqib@centurypapers.com</p>
                            <p>sales@centurypapers.com</p>
                        </div>
                    </div>

                    {/* Phone Row */}
                    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-300">
                        <div className="w-full sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-[15px]">
                            Phone
                        </div>
                        <div className="w-full sm:w-2/3 text-gray-800 text-[15px] leading-relaxed">
                            <p>+91 96605 05555</p>
                        </div>
                    </div>

                    {/* Samples Row */}
                    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-300">
                        <div className="w-full sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-[15px]">
                            Samples
                        </div>
                        <div className="w-full sm:w-2/3 text-gray-800 text-[15px] leading-relaxed">
                            <p>Sample sets available on request. Most orders dispatched within 5-7 working days.</p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Empty Map Placeholder */}
                {/* The min-h-[400px] ensures it takes up space even when empty on desktop */}
                <div className="w-full min-h-[300px] lg:min-h-[350px] bg-gray-200/40 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <p className="text-gray-500 font-medium">Map goes here</p>
                </div>

            </div>
        </section>
    );
}