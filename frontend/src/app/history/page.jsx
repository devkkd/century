"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// --- DATA: Chapters ---
const chaptersData = [
  {
    id: 1,
    label: 'CHAPTER 1 - THE ANCIENT STORY OF PAPER',
    title: <>Paper <span className="italic font-medium">Began</span> as a Secret</>,
    desc: [
      <React.Fragment key="1">The history of paper is deeply intertwined with the history of human culture and civilisation.</React.Fragment>,
      <React.Fragment key="2"><strong>The Egyptians, the Greeks, and the Romans wrote on 'papyrus'</strong> a paper-like material made from the pith of the papyrus plant.<br />The paper we know today was first developed and used in China, where it served as the most important carrier of information since its invention.</React.Fragment>,
      <React.Fragment key="3">As populations grew and the demand for knowledge, education, and information on a large scale intensified, so did the production of paper. In earlier times, paper was considered a valuable product even an art form often surrounded by secrecy because of the outstanding advantages it gave to those who mastered its production.</React.Fragment>,
      <React.Fragment key="4"><strong>Handmade paper in India dates back as far as the third century BCE.</strong></React.Fragment>,
      <React.Fragment key="5">The art of handmade paper-making is a traditional craft, passed down through generations of a specific artisan class. These artisans are known as <strong>'Kagzi'</strong> a term derived from the Urdu word 'kavas', meaning paper.</React.Fragment>
    ],
    image: '/images/pages/History1.png'
  },
  {
    id: 2,
    label: 'CHAPTER 2 - THE KAGZI COMMUNITY',
    title: 'A Community Named After the Thing They Made',
    desc: [
      <React.Fragment key="1">The Kagzi community has been the custodian of India's handmade paper tradition since antiquity. Unfortunately, their numbers have dwindled over the centuries as industrial paper production erased the need for their labour in most places. But not all places.</React.Fragment>,
      <React.Fragment key="2">A small group of Kagzis settled thousands of years ago in Sanganer, near Jaipur. This community became the primary custodians of the handmade paper industry in the region. The history of the Kagzi in Sanganer can be traced back to the 14th century, during the rule of Firoz Shah Tughlaq. Even then, the handmade paper crafted by them was used for official documents, miniatures, calligraphy, the Holy Quran, and account books.</React.Fragment>,
      <React.Fragment key="3">In the 16th century, Raja Man Singh the ruler of Amber recognised the value of the Kagzi community and invited them to settle in Sanganer. He established them on the banks of the Saraswati River, where clear water was abundant — an essential resource for paper-making. Over time, Sanganer emerged as one of North India's largest and most important paper-producing centres.</React.Fragment>,
      <React.Fragment key="4">It is from this lineage — this unbroken chain of craft, community, and place that Century Papers draws its identity. We are not inspired by the Kagzi tradition. We are part of it.</React.Fragment>
    ],
    image: '/images/pages/History22.png'
  },
  {
    id: 3,
    label: 'CHAPTER 3 THE CENTURY PAPERS STORY',
    title: 'From a Family Workshop to a Global Supplier',
    desc: [
      <React.Fragment key="1">The roots of Century Papers stretch back to 1980, when the family began making paper at home the smallest possible scale of an ancient craft.</React.Fragment>,
      <React.Fragment key="2">Through the 1980s and early 1990s, the work grew from home production into part-manufacturing, deepening skill and expanding the product range.</React.Fragment>,
      <React.Fragment key="3">On the 1st of January 2000, Century Papers was formally established as a dedicated paper factory a milestone that marked the beginning of a structured, professional operation rooted in the same craft values the family had always held.</React.Fragment>,
      <React.Fragment key="4">By 2006, the quality and consistency of the workshop's output had attracted international attention. Century Papers began exporting paper and paper products directly to buyers overseas and has not stopped since.</React.Fragment>
    ],
    image: '/images/pages/History3.png'
  }
];

// --- DATA: Timeline ---
const timelineData = [
  {
    year: '1980',
    desc: 'Paper-making begins at home. The Kagzi family tradition continues through hands-on practice in the domestic setting.'
  },
  {
    year: '1990',
    desc: 'Growth into part-manufacturing. The operation expands beyond the home. Skills deepen. Product range broadens.'
  },
  {
    year: '1st January 2000',
    desc: 'Century Papers is formally founded as a dedicated paper factory in Sanganer, Jaipur.'
  },
  {
    year: '2006',
    desc: 'International export begins. Paper and paper products reach buyers in their first overseas markets.'
  },
  {
    year: '2010',
    desc: 'Product range expands significantly to include leather journals, leather bags, plantable seed paper, honeycomb décor, and lampshades.'
  },
  {
    year: '2020',
    desc: 'Century Papers deepens its global footprint and digital presence, reaching buyers across 20+ countries. Export volumes grow consistently despite global supply chain disruptions.\nThe workshop invests in expanded production capacity, new product categories, and direct international trade removing intermediaries to build tighter relationships with buyers worldwide.'
  },
  {
    year: 'Present',
    desc: '120+ craftspeople. 200,000 sheets per month. 20+ export markets. ₹25 Crore annual turnover. One family. One craft.'
  }
];

export default function HistoryPage() {
  const [activeYear, setActiveYear] = useState('1980');

  return (
    <main className="min-h-screen pt-12 px-6 lg:px-12 max-w-[1400px] mx-auto">
      
      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-32">
        {/* Pill Button */}
        <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
          Our History
        </div>

        {/* Main Title */}
        <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight">
          Four Hundred <span className="italic font-medium">Years</span> of Making, <br className="hidden md:block" /> One Workshop, One Family
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[13px] md:text-sm text-gray-800 leading-relaxed max-w-4xl mx-auto">
          The History Of Century Papers Is Inseparable From The History Of Paper Itself And From A Small Community In Rajasthan Who Have Been Its Keepers For Longer Than Most Countries Have Existed.
        </p>
      </div>

      {/* ================= CHAPTERS SECTION ================= */}
      <div className="flex flex-col gap-12">
        {chaptersData.map((chapter) => (
          <section key={chapter.id} className=" pt-10">
            <div className="mb-12">
              <p className="text-sm text-gray-800 uppercase tracking-wide mb-4">
                {chapter.label}
              </p>
              <hr className="border-gray-300 w-full" />
            </div>

            {/* Layout: Text on Left, Image on Right */}
            <div className="flex flex-col gap-12 lg:gap-24 lg:flex-row">
              
              {/* Text Block */}
              <div className="flex flex-col flex-1 justify-center">
                <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-8 leading-tight">
                  {chapter.title}
                </h2>
                
                <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed mb-10">
                  {chapter.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Image Block (Always on the Right) */}
              <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-auto min-h-[350px] lg:min-h-[450px] overflow-hidden">
                <Image 
                  src={chapter.image} 
                  alt={`Chapter ${chapter.id}`} 
                  fill
                  className="w-full object-contain object-left"
                />
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="pt-10 mt-20">
        <p className="text-sm text-gray-800 uppercase tracking-wide mb-4">
          TIMELINE
        </p>
        <hr className="border-gray-300 w-full mb-16" />

        <h2 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair tracking-tight mb-16">
          How We <span className="italic">Got</span> Here
        </h2>

        <div className="relative flex flex-col pl-4 md:pl-0">
          {/* The continuous vertical line */}
          <div className="absolute left-[15px] md:left-[23px] top-[40px] bottom-[50px] w-[1px] bg-gray-300 z-0" />

          {timelineData.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start mb-8 relative cursor-pointer"
              onMouseEnter={() => setActiveYear(item.year)}
            >
              
              {/* Left Column: Timeline Dot Area */}
              <div className="relative flex justify-center w-8 md:w-12 shrink-0 mt-[26px] h-[20px]">
                {/* Status Dot */}
                {activeYear === item.year && (
                  <div className="absolute z-10 flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] border-[#017574] bg-[#ECFFFF] top-1/2 -translate-y-1/2 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#017574]"></div>
                  </div>
                )}
              </div>

              {/* Middle Column: Year Text */}
              <div className={`w-32 md:w-40 shrink-0 mt-[26px] font-bold text-[14px] transition-colors duration-300 ${
                activeYear === item.year ? 'text-[#017574]' : 'text-gray-400'
              }`}>
                {item.year}
              </div>

              {/* Right Column: Content Card */}
              <div className={`flex-1 flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-[32px] border transition-all duration-300 ${
                activeYear === item.year 
                  ? 'bg-[#ECFFFF] border-[#017574]/30 shadow-sm' 
                  : 'bg-transparent border-gray-300'
              }`}>
                <div className="md:w-1/3">
                  <h3 className="text-[#004342] text-4xl lg:text-5xl font-playfair font-bold tracking-tight">
                    {item.year}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[13px] text-gray-800 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= TRADITIONAL KNOWLEDGE SECTION ================= */}
      <section className="border-t border-gray-300 pt-10 mt-32">
        <p className="text-sm text-gray-800 uppercase tracking-wide mb-4">
          TRADITIONAL KNOWLEDGE
        </p>
        <hr className="border-gray-300 w-full mb-16" />

        <div className="flex flex-col gap-12 lg:gap-24 lg:flex-row">
          
          {/* Text Block */}
          <div className="flex flex-col flex-1 justify-center">
            <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-8 leading-tight">
              What Cannot Be <span className="italic">Taught</span> in a Classroom
            </h2>
            
            <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed mb-10">
              <p>The knowledge held by our craftspeople is not the kind that can be captured in a manual or replicated by a machine.</p>
              <p>It is knowledge of material behaviour how cotton pulp responds to temperature and humidity, how the deckle should be held during the drain, how much pressure to apply when couching, how to read the surface of a drying sheet and know when it is ready to be lifted.</p>
              <p>This knowledge has been passed from artisan to apprentice for generations.</p>
              <p>It lives in hands, not books. It is irreplaceable and it is the single most important reason that the paper and goods we produce are categorically different from anything that comes off an industrial line.</p>
              <p>We are grateful for it every day.</p>
            </div>
          </div>

          {/* Image Block (On the Right) */}
          <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-auto min-h-[350px] lg:min-h-[450px] rounded-[32px] overflow-hidden">
            <Image 
              src="/images/pages/Treditional1.png" 
              alt="Traditional Knowledge" 
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= BOTTOM BANNER ================= */}
      <div className="w-full bg-[#ECFFFF] py-12 mt-20 rounded-[32px] flex items-center justify-center text-center px-6 border border-[#017574]/10 shadow-sm">
        <h2 className="text-[#004342] text-lg md:text-xl lg:text-2xl font-bold tracking-tight uppercase">
          TRADITIONAL MANUFACTURERS OF HANDMADE PAPER SANGANER, SINCE THE 14TH CENTURY.
        </h2>
      </div>

    </main>
  );
}