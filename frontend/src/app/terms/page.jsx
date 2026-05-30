import React from 'react';

// Dummy data for the terms sections
const termsData = [
    {
        id: 'about',
        title: '1. About Century Overseas Papers',
        content: "Century Overseas Papers ('Century Papers', 'we', 'us', 'our') is a manufacturer and exporter of handmade paper and leather goods registered in India, operating from Sanganer, Jaipur. We conduct business both domestically and internationally."
    },
    {
        id: 'use-of-website',
        title: '2. Use of the Website',
        content: "You may use this website for the purpose of learning about our products and services, submitting enquiries, requesting quotations, and placing orders. You agree not to use the website for any unlawful purpose, to scrape or reproduce its content without permission, or to submit false or misleading information."
    },
    {
        id: 'intellectual-property',
        title: '3. Intellectual Property',
        content: "All content on this website including product photography, written copy, design, and brand identity is the intellectual property of Century Overseas Papers. No content may be reproduced, distributed, or published without our written permission. Custom-commissioned designs remain the property of the commissioning client."
    },
    {
        id: 'product-information',
        title: '4. Product Information',
        content: "Product descriptions, specifications, and photography on this website are provided in good faith and are as accurate as we are reasonably able to make them. Due to the handmade nature of our products, individual items may exhibit natural variations in colour, texture, and dimension. These variations are inherent to handmade production and do not constitute defects."
    },
    {
        id: 'pricing-quotations',
        title: '5. Pricing and Quotations',
        content: "Prices displayed on this website are indicative only and subject to change. Binding pricing is provided only in written quotations issued directly by Century Papers in response to a specific enquiry. Quotations are valid for 30 days from issue unless otherwise stated. We reserve the right to withdraw or revise a quotation at any time before written order confirmation."
    },
    {
        id: 'orders-payment',
        title: '6. Orders and Payment',
        content: "Orders are confirmed only upon written acknowledgement from Century Papers. Payment terms are specified per transaction in the quotation and order confirmation. Standard export orders are subject to 50% advance payment with balance due before shipment, unless agreed otherwise in writing. We accept bank transfer (SWIFT/NEFT/RTGS) and as otherwise agreed."
    },
    {
        id: 'shipping-delivery',
        title: '7. Shipping and Delivery',
        content: "Lead times are specified in each quotation and are approximate. We exercise all reasonable care to meet stated lead times but cannot guarantee delivery dates in cases of force majeure, carrier delays, or customs clearance. Risk of loss transfers to the buyer upon handover to the carrier. We provide shipment tracking information upon dispatch."
    },
    {
        id: 'returns-disputes',
        title: '8. Returns and Disputes',
        content: "We stand behind the quality of our products. If goods are received damaged or materially non-conforming to the agreed specification, we request notification within 7 days of receipt, supported by photographic evidence. We will either replace the affected goods or issue a credit note, at our discretion. Claims made after 7 days of receipt cannot be processed. Returns of goods that conform to specification but are not required are not accepted."
    },
    {
        id: 'limitation-liability',
        title: '9. Limitation of Liability',
        content: "Our liability to any buyer is limited to the value of the specific order in question. We are not liable for indirect, consequential, or special damages arising from any transaction, delay, or defect. Nothing in these Terms limits our liability for fraud or personal injury caused by negligence."
    },
    {
        id: 'governing-law',
        title: '10. Governing Law',
        content: "These Terms are governed by the laws of India. Any disputes shall first be attempted through good-faith negotiation. Where resolution is not reached, disputes shall be referred to the courts of Jaipur, Rajasthan, India."
    },
    {
        id: 'changes-terms',
        title: '11. Changes to These Terms',
        content: "We may update these Terms from time to time. The current version and effective date are shown at the top of this page. Continued use of the website or conduct of business after an update constitutes acceptance of the revised Terms."
    }
];

export default function TermsOfService() {
    return (
        // Added pt-32 to account for your absolute header
<>
        <main className="min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">

            {/* Top Header Section */}
            <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto mb-16">

                {/* Pill Button */}
                <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-5 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-8">
                    Terms of Service
                </div>

                {/* Main Title */}
                <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-6">
                    Terms of Service
                </h1>

                {/* Meta info */}
                <p className="text-xs text-gray-800 mb-6">
                    Effective Date: 1 January 2025 | Last Updated: 1 January 2025
                </p>

                {/* Intro Paragraph */}
                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                    These Terms Of Service ("terms") Govern Your Use Of The Century Overseas Papers Website (Centurypapers.com) And Any Transactions Or Communications Conducted Through It. By Accessing Our Website Or Placing An Order, You Agree To These Terms.
                </p>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 w-full mb-16" />

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative">

                {/* Left Sidebar (Navigation) */}
                <aside className="md:w-1/3 lg:w-1/4">
                    <div className="sticky top-0">
                        <nav className="flex flex-col">
                            {termsData.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`block py-5 border-b border-gray-300 text-[13px] font-bold transition-colors duration-200
                    ${index === 0 ? 'text-black' : 'text-gray-400 hover:text-gray-700'}
                  `}
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Right Content Area */}
                <div className="md:w-2/3 lg:w-3/4">
                    {termsData.map((section) => (
                        <section key={section.id} id={section.id} className="mb-14 scroll-mt-32">
                            <h2 className="text-lg font-bold text-black mb-6">
                                {section.title}
                            </h2>
                            <p className="text-[13px] text-gray-700 leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}

                    {/* Footer Contact Info */}
                    <div className="mt-20 pt-10 border-t border-gray-300">
                        <p className="text-[13px] text-gray-600">
                            Questions: aqib@centurypapers.com | Workshop 316, Jain Hostel Road, Sanganer, Jaipur - 302029, India
                        </p>
                    </div>
                </div>

            </div>
        </main>
</>
    );
}