import React from 'react';

// Structured dummy data for the privacy sections
const privacyData = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    content: [
      { type: 'paragraph', text: "Century Overseas Papers is a manufacturer and exporter of handmade paper and leather goods, operating from Workshop 316, Jain Hostel Road, Sanganer, Jaipur - 302029, Rajasthan, India. Our primary contact for privacy matters is aqib@centurypapers.com." }
    ]
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: [
      { type: 'subheading', text: "Information You Provide Directly" },
      { type: 'list', items: [
        "Contact form submissions: your name, email address, phone number, company name, country, and message content.",
        "Price quote requests: the above, plus product specifications, quantities, and timeline information.",
        "Direct email or WhatsApp correspondence: any information you include in messages to us.",
        "Sample requests: your name, delivery address, and product preferences."
      ]},
      { type: 'subheading', text: "Information Collected Automatically" },
      { type: 'list', items: [
        "Website usage data: pages visited, time on page, browser type, device type, and referral source (via analytics tools).",
        "IP address (used for geographic analytics only – not stored against your personal identity).",
        "Cookie data: see our Cookie Policy section below."
      ]}
    ]
  },
  {
    id: 'how-we-use-your-information',
    title: '3. How We Use Your Information',
    content: [
      { type: 'list', items: [
        "To respond to your enquiries, quotation requests, and sample orders.",
        "To fulfil orders and coordinate shipments.",
        "To communicate with you about your account or transactions.",
        "To improve our website and services based on usage analytics.",
        "To comply with applicable legal obligations."
      ]},
      { type: 'paragraph', text: "We do not use your personal data for advertising targeting. We do not sell, rent, or trade your personal information to any third party." }
    ]
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing (EU/UK Visitors)',
    content: [
      { type: 'paragraph', text: "Where the General Data Protection Regulation (GDPR) applies, we process your personal data on the following legal bases: performance of a contract (to respond to enquiries and fulfil orders); legitimate interests (to improve our website and services); and legal obligation (to comply with applicable law). You have the right to request access, correction, erasure, and portability of your data, and to object to or restrict processing. Please contact aqib@centurypapers.com to exercise these rights." }
    ]
  },
  {
    id: 'data-storage',
    title: '5. Data Storage and Retention',
    content: [
      { type: 'paragraph', text: "Personal data collected via our contact form and direct correspondence is stored securely on our business communication systems. We retain data for as long as necessary to fulfil the purpose for which it was collected, and in any case no longer than seven years for business records required by law." }
    ]
  },
  {
    id: 'cookies',
    title: '6. Cookies',
    content: [
      { type: 'paragraph', text: "Our website uses essential cookies (required for the site to function), analytics cookies (to understand how the site is used), and no advertising cookies. By continuing to use our website, you consent to essential cookies. Analytics cookies require your consent. You can manage your cookie preferences through your browser settings at any time." }
    ]
  },
  {
    id: 'third-party',
    title: '7. Third-Party Services',
    content: [
      { type: 'paragraph', text: "Our website may use third-party services including Google Analytics (website analytics) and a web hosting provider. These services may process your data in accordance with their own privacy policies. We do not integrate social media tracking pixels or advertising networks." }
    ]
  },
  {
    id: 'data-security',
    title: '8. Data Security',
    content: [
      { type: 'paragraph', text: "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or destruction. All data transmissions via our website are encrypted using TLS. Direct correspondence via email and WhatsApp is subject to the security measures of those platforms." }
    ]
  },
  {
    id: 'your-rights',
    title: '9. Your Rights',
    content: [
      { type: 'list', items: [
        "Right of access: to request a copy of the personal data we hold about you.",
        "Right of rectification: to request correction of inaccurate data.",
        "Right of erasure: to request deletion of your data, subject to legal retention requirements.",
        "Right of portability: to receive your data in a structured, machine-readable format.",
        "Right to object: to object to processing based on legitimate interests."
      ]},
      { type: 'paragraph', text: "To exercise any of these rights, contact: aqib@centurypapers.com" }
    ]
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: [
      { type: 'paragraph', text: "We may update this Privacy Policy from time to time. The current version and its effective date are shown at the top of this page. Continued use of our website after an update constitutes acceptance of the revised policy." }
    ]
  }
];

export default function PrivacyPolicy() {
  return (
<>
    <main className="min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">
      
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto mb-16">
        
        {/* Pill Button */}
        <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-5 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-8">
          Privacy Policy
        </div>

        {/* Main Title - using font-playfair */}
        <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-6 tracking-tight">
          Privacy Policy
        </h1>

        {/* Meta info */}
        <p className="text-xs text-gray-800 mb-6">
          Effective Date: 1 January 2026 | Last Updated: 1 January 2026
        </p>

        {/* Intro Paragraph */}
        <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
          Century Overseas Papers ('century Papers', 'we', 'us', 'our') Is Committed To Protecting The Privacy Of Every Person Who Interacts With Our Website And Services. This Privacy Policy Explains What Personal Information We Collect, How We Use It, And The Rights You Have In Relation To It.
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
              {privacyData.map((section, index) => (
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
          {privacyData.map((section) => (
            <section key={section.id} id={section.id} className="mb-14 scroll-mt-32">
              <h2 className="text-lg font-bold text-black mb-6">
                {section.title}
              </h2>
              
              {/* Map through the specific content types for each section */}
              <div className="flex flex-col gap-4">
                {section.content.map((block, i) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={i} className="text-[13px] text-gray-700 leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'subheading') {
                    return (
                      <h3 key={i} className="text-[13px] font-bold text-black mt-2">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={i} className="flex flex-col gap-1.5 mb-2">
                        {block.items.map((item, j) => (
                          <li key={j} className="text-[13px] text-gray-700 leading-relaxed flex items-start">
                            <span className="mr-2 mt-[1px] text-gray-500">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}

          {/* Footer Contact Info */}
          <div className="mt-20 pt-10 border-t border-gray-300">
            <p className="text-[13px] text-gray-600">
              Contact for privacy matters: aqib@centurypapers.com | Workshop 316, Jain Hostel Road, Sanganer, Jaipur - 302029, India
            </p>
          </div>
        </div>

      </div>
    </main>
 
</>
  );
}