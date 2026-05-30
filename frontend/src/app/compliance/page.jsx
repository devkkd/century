import React from 'react';
import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';

// Data for the Product Safety & Material Standards section
const safetyStandards = [
    {
        title: 'Acid - Free',
        desc: 'All handmade paper sheets are produced to be acid-free and suitable for archival use.'
    },
    {
        title: 'Chemical-Free Paints',
        desc: 'We use paints that are free from harmful chemicals in all MDF-based products, including lampshades and MDF-cover journals.'
    },
    {
        title: 'PINE MDF Composition',
        desc: 'Our MDF components are made from waste wood powder and waste paper – a more sustainable and lower-formaldehyde alternative to standard MDF.'
    },
    {
        title: 'Seed Paper Safety',
        desc: 'Seeds used in our plantable paper are non-GMO and sourced from reputable botanical suppliers. Seed varieties are documented per product line and available on request.'
    },
    {
        title: 'Leather Tanning',
        desc: 'All leather used in our products is vegetable-tanned a natural process using plant-derived tannins. We do not use chromium-tanned leather in any standard product line.'
    }
];

// Data for the new Additional Policies section at the bottom
const additionalPolicies = [
    {
        id: 'import-customs',
        title: 'Import & Customs\nCompliance',
        content: [
            'Century Papers complies with all applicable Indian export regulations and the import regulations of all markets to which we ship. We do not ship restricted materials. We do not misdeclare shipments. We declare all goods accurately on export documentation.',
            'For buyers importing into regulated markets (the EU, the United States, Australia, and others), we are experienced in providing the documentation required at customs. Please contact us in advance if you have specific compliance requirements.'
        ]
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual\nProperty',
        content: [
            'All product designs, catalogue photography, website content, and branding materials are the intellectual property of Century Papers / Century Overseas. Reproduction of our designs, product photography, or written materials without written permission is not permitted.',
            "We respect the intellectual property of others. Custom-commissioned designs remain the property of the commissioning client. We do not reproduce custom designs for other buyers without the commissioning client's written consent."
        ]
    },
    {
        id: 'requesting-documentation',
        title: 'Requesting\nDocumentation',
        content: [
            'To request any compliance document FSC certificate, material safety data, export documentation records, or any other compliance-related material please contact:',
            // Using a React fragment to handle the explicit line breaks in the contact info
            <React.Fragment key="contact-details">
                Email: aqib@centurypapers.com<br />
                sales@centurypapers.com<br />
                Phone / WhatsApp: +91 96605 05555<br />
                Response time: Most documentation requests are fulfilled within two working days.
            </React.Fragment>
        ]
    }
];

export default function CompliancePage() {
    return (
        <>
            <main className="min-h-screen pt-12 px-6 lg:px-12  max-w-[1400px] mx-auto">

                {/* ================= TOP HEADER SECTION ================= */}
                <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-20">

                    {/* Pill Button */}
                    <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
                        Compliance
                    </div>

                    {/* Main Title - with "Standards" italicized */}
                    <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight">
                        Our Certifications, <span className="italic font-medium">Standards</span>, and
                        <br className="hidden md:block" /> Documentation
                    </h1>

                    {/* Intro Paragraph */}
                    <p className="text-[14px] text-gray-800 leading-relaxed max-w-4xl mx-auto">
                        <strong>Century Papers</strong> Maintains Compliance With The Certifications And Standards That Matter To Our Buyers. This Page Details The Standards We Hold, The Documentation We Can Provide, And How To Request Verification.
                    </p>
                </div>

                {/* ================= MAIN CONTENT GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">

                    {/* Column 1: Image */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-[450px] rounded-3xl overflow-hidden">
                        <Image
                            src="/images/pages/compliance1.png"
                            alt="Manufacturing Process"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Column 2: FSC Certification */}
                    <div className="flex flex-col lg:pr-4">
                        <h2 className="text-black text-3xl md:text-4xl font-playfair mb-8 tracking-tight">
                            FSC Certification
                        </h2>
                        <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed">
                            <p>
                                For all components of our product range that fall within the scope of Forest Stewardship Council (FSC) certification including MDF boards used in lampshades and laser-engraved journal covers we source only FSC-certified material and maintain full chain-of-custody documentation.
                            </p>
                            <p>
                                Our FSC certification is independently audited on an annual basis. Certification documentation is available to all buyers on request. We do not make FSC claims on products that fall outside the scope of our certificate.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Export Documentation */}
                    <div className="flex flex-col lg:pl-12 lg:border-l border-gray-300">
                        <h2 className="text-black text-3xl md:text-4xl font-playfair mb-8 tracking-tight">
                            Export Documentation
                        </h2>
                        <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed">
                            <div>
                                <p className="mb-2">
                                    All international shipments are accompanied by complete and accurate export documentation, including:
                                </p>
                                <ul className="flex flex-col gap-1.5">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>Commercial Invoice</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>Packing List</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>Certificate of Origin (as required by destination country)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>Phytosanitary Certificate (for seed-paper shipments, as required)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>GST documentation for Indian buyers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-gray-500">→</span>
                                        <span>Any additional documentation required by specific import markets on request</span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                We have shipped to buyers across Europe, North America, Australasia, and Southeast Asia. We are familiar with documentation requirements for all major import markets. If your destination has specific requirements, contact us before placing an order.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= PRODUCT SAFETY & MATERIAL STANDARDS ================= */}
                <section className="border-t border-gray-300 pt-16 mt-16 mb-24">

                    {/* Section Heading & Description */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-20">
                        <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight md:w-1/2">
                            Product Safety &amp; <span className="italic">Material</span> Standards
                        </h2>
                        <p className="text-[14px] text-gray-800 leading-relaxed md:w-5/12 lg:w-1/3">
                            Our paper products are made from post-consumer cotton fibre without chemical bleach or synthetic additives. The following material safety standards apply to our core product range:
                        </p>
                    </div>

                    {/* 5-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-0 lg:divide-x divide-gray-300">
                        {safetyStandards.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index === 0 ? 'lg:pr-8' :
                                    index === safetyStandards.length - 1 ? 'lg:pl-8' :
                                        'lg:px-8'
                                    }`}
                            >
                                <h3 className="font-bold text-black text-[16px] mb-6 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-gray-700 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= ADDITIONAL POLICIES SECTION ================= */}
                {/* Includes the requested top border and mapped content */}
                <section className="border-t border-gray-300 pt-16 mt-16">

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-0 lg:divide-x divide-gray-300">
                        {additionalPolicies.map((policy, index) => (
                            <div
                                key={policy.id}
                                className={`flex flex-col ${index === 0 ? 'lg:pr-12' :
                                    index === additionalPolicies.length - 1 ? 'lg:pl-12' :
                                        'lg:px-12'
                                    }`}
                            >
                                {/* whitespace-pre-line allows the \n in the title to break the line naturally */}
                                <h3 className="text-black text-3xl md:text-4xl font-playfair mb-8 tracking-tight whitespace-pre-line leading-tight">
                                    {policy.title}
                                </h3>

                                <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed">
                                    {policy.content.map((paragraph, i) => (
                                        <p key={i}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            </main>
            <EnquiryForm />
        </>
    );
}