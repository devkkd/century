"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

// --- DATA: Chapters ---
const chaptersData = [
 {
  id: 1,
  label: "CHAPTER 1 - THE ANCIENT STORY OF PAPER",

  title: (
    <>
      Paper <span className="heading-italic">Began</span> as a Secret
    </>
  ),

  desc: [
    <React.Fragment key="1">
      These artisans are known as <strong>"Kagzi's"</strong>. The name is
      derived from the Urdu word <strong>'Kavas'</strong>, which means paper.
      The size of this community has decreased in the last few years. There is
      a small area of 'Kagzi' in Sanganer near Jaipur, where a section of this
      community had settled thousands of years ago.
    </React.Fragment>,

    <React.Fragment key="2">
      The <strong>'Kagzi' community in Sanganer</strong> is the primary owner
      of the handmade paper industry in the town. Our history goes back to the
      14th century when ruler Firoze Shah Tughlaq was there.
    </React.Fragment>,

    <React.Fragment key="3">
      Even in those days, handmade paper made by them was used to make copies
      of official documents, miniatures, calligraphy and Holy Quran, and to
      maintain account books.
    </React.Fragment>,
  ],

  image: "/images/history/2.png",
},

  {
  id: 2,
  label: "CHAPTER 2 - THE KAGZI COMMUNITY",

  title: (
    <>
      A Community Named <span className="heading-italic">After</span> the Thing
      They Made
    </>
  ),

  desc: [
    <React.Fragment key="1">
      In the 16th century, Raja Man Singh, the then ruler of Ambar, brought
      the Kagzi in Sanganer and settled them on the banks of Saraswati river,
      where clear water was easily available.
    </React.Fragment>,

    <React.Fragment key="2">
      Thus, this city has emerged as one of North India's largest paper
      producing centers.
    </React.Fragment>,
  ],

  image: "/images/history/4.png",
},

  // {
  //   id: 3,
  //   label: "CHAPTER 3 THE CENTURY PAPERS STORY",

  //   title: (
  //     <>
  //       From a Family <span className="heading-italic">Workshop</span> to a Global
  //       Supplier
  //     </>
  //   ),

  //   desc: [
  //     <React.Fragment key="1">
  //       The roots of Century Papers stretch back to 1980, when the family began
  //       making paper at home the smallest possible scale of an ancient craft.
  //     </React.Fragment>,

  //     <React.Fragment key="2">
  //       Through the 1980s and early 1990s, the work grew from home production
  //       into part-manufacturing, deepening skill and expanding the product
  //       range.
  //     </React.Fragment>,

  //     <React.Fragment key="3">
  //       On the 1st of January 2000, Century Papers was formally established as a
  //       dedicated paper factory a milestone that marked the beginning of a
  //       structured, professional operation rooted in the same craft values the
  //       family had always held.
  //     </React.Fragment>,

  //     <React.Fragment key="4">
  //       By 2006, the quality and consistency of the workshop's output had
  //       attracted international attention. Century Papers began exporting paper
  //       and paper products directly to buyers overseas and has not stopped
  //       since.
  //     </React.Fragment>,
  //   ],

  //   image: "/images/pages/History3.png",
  // },
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
   <main
  className={`${playfair.variable} min-h-screen pt-12 px-6 lg:px-12 max-w-[1400px] mx-auto`}
>
      
      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-32">
        {/* Pill Button */}
        <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
          Our History
        </div>

        {/* Main Title */}
       <h1 className="history-heading text-3xl md:text-4xl lg:text-5xl mb-8 tracking-tight leading-tight">
  Four Hundred <span className="heading-italic">Years</span> of Making,
  <br className="hidden md:block" />
  One Workshop, One Family
</h1>

        {/* Intro Paragraph */}
   <p className="text-[13px] md:text-sm text-gray-800 leading-relaxed max-w-4xl mx-auto">
  The History Of Paper Is Related To The History Of Human Culture And
  Civilization. The Egyptians, The Greeks, And The Romans Wrote On "Papyrus",
  A Paper-like Material. Today's Paper Was First Developed And Used In China.
  This Paper Was The Most Important Carrier Of Information In The Past Since
  Its Birth. There Was A Need To Increase The Population And Transfer
  Knowledge, Education, And Information To Society On A Large Scale, Which
  Were The Factors That Forced Paper Growth For A Great Increase. Paper Was A
  Valuable Product In Earlier Times And Papermaking Became An Art Which Was
  Often Kept Secret Because Of The Outstanding Benefits Of The Product.
  Handmade Paper In India Goes Back As Far As The Third Century BC. Handmade
  Papermaking Is A Traditional Art That Has Been Practised For Generations
  Together By People Of A Particular Class. This Art Has Been Passed From One
  Generation To Another Generation Of Artisans.
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
               <h2 className="history-heading text-4xl md:text-5xl lg:text-5xl tracking-tight mb-8 leading-tight">
  {chapter.title}
</h2>
                
                <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed mb-10">
                  {chapter.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Image Block (Always on the Right) */}
             {/* Image Block (Always on the Right) */}
<div className="chapter-image-wrap">
  <Image
    src={chapter.image}
    alt={`Chapter ${chapter.id}`}
    fill
    sizes="450px"
    className="chapter-image"
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

       <h2 className="history-heading text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16">
  How We <span className="heading-italic">Got</span> Here
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
           <h2 className="history-heading text-4xl md:text-5xl lg:text-5xl tracking-tight mb-8 leading-tight">
  What Cannot Be <span className="heading-italic">Taught</span> in a Classroom
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
      <style>{`
  /* ========================================
     HISTORY HEADINGS
     ======================================== */

  .history-heading {
    font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
    font-weight: 700;
    font-style: normal;
    color: #004342;
  }

  /*
   * Screenshot jaisa:
   * normal word = strong/bold
   * highlighted word = thin italic
   */
  .history-heading .heading-italic,
  .heading-italic {
    font-family: var(--font-playfair), "Playfair Display", Georgia, serif !important;
    font-style: italic !important;
    font-weight: 400 !important;
  }
    /* ================================
   CHAPTER IMAGE - FIXED SIZE
   ================================ */

.chapter-image-wrap {
  position: relative;
  width: 450px;
  min-width: 450px;
  height: 450px;
  flex-shrink: 0;
  overflow: hidden;
}

.chapter-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
  object-position: center;
}

/* Desktop */
@media (min-width: 769px) {
  .chapter-image-wrap {
    width: 450px;
    min-width: 450px;
    height: 450px;
  }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  .chapter-image-wrap {
    width: 400px;
    min-width: 400px;
    height: 400px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .chapter-image-wrap {
    width: 100%;
    min-width: 0;
    height: 320px;
  }

  .chapter-image {
    object-fit: contain;
    object-position: center;
  }
}
`}</style>

    </main>
  );
}