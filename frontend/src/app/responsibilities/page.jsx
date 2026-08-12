import React from "react";
import Image from "next/image";

// --- DATA: Environmental Responsibility ---
const environmentalData = [
  {
    id: 1,
    title: "Tree-Free Materials",
    image: "/images/pages/responsibility1.png",
    desc: [
      "Every sheet of paper we produce is made from post-consumer cotton textile waste hosiery offcuts, fabric remnants, and plant fibres. We do not use virgin wood pulp. We never have.",
      "Our production process transforms textile waste into a premium product, eliminating the need for deforestation and reducing industrial textile waste simultaneously.",
    ],
    imgOrder: "lg:order-1",
    txtOrder: "lg:order-2",
  },
  {
    id: 2,
    title: "No Chemical Bleach",
    image: "/images/pages/responsibility2.png",
    desc: [
      "We do not use chlorine bleach or optical brighteners in our paper production. The colour of our paper is natural derived from the cotton fibre itself or from botanical dyes and mineral pigments.",
      "This means our process produces no chlorinated effluent, and our paper contains no chemical residues that could harm people who handle it or environments where it is used.",
    ],
    imgOrder: "lg:order-3",
    txtOrder: "lg:order-4",
  },
  {
    id: 3,
    title: "Solar Drying",
    image: "/images/pages/responsibility3.png",
    desc: [
      "All paper sheets are sun-dried outdoors using Sanganer's natural climate. We consume no electricity in the drying stage of production.",
      "This is not a sustainability initiative it is simply the right way to dry handmade paper, and it has been done this way here for centuries.",
    ],
    imgOrder: "lg:order-6",
    txtOrder: "lg:order-5",
  },
  {
    id: 4,
    title: "Zero - Waste Production",
    image: "/images/pages/responsibility4.png",
    desc: [
      "Rejected sheets are returned to the pulp vat and remade. Off-cuts from leather production are used in smaller product formats.",
      "Packaging waste from our own production is composted or recycled. We are not a zero-waste company but we are a low-waste one, and reducing production waste is a standing operational priority.",
    ],
    imgOrder: "lg:order-8",
    txtOrder: "lg:order-7",
  },
  {
    id: 5,
    title: "Sustainable Packaging",
    image: "/images/pages/responsibility5.png",
    desc: [
      "All outgoing shipments are packed in recycled and biodegradable packaging materials. We do not use polystyrene void fill.",
      "We do not use virgin plastic wrapping unless required for moisture protection in transit and in those cases, we use the minimum required.",
    ],
    imgOrder: "lg:order-9",
    txtOrder: "lg:order-10",
  },
  {
    id: 6,
    title: "FSC Certified Sourcing",
    image: "/images/pages/responsibility6.png",
    desc: [
      "For any component of our product range that falls within the scope of FSC certification including MDF boards used in lampshades and journal covers we source only certified material and maintain full chain-of-custody documentation.",
      "Our FSC certification is independently audited annually and available to buyers on request.",
    ],
    imgOrder: "lg:order-11",
    txtOrder: "lg:order-12",
  },
];

// --- DATA: Social Responsibility ---
const socialData = [
  {
    id: 1,
    title: "Artisan\nWelfare",
    icon: "/images/icons/icon1.svg",
    desc: [
      "Our craftspeople are paid above the regional benchmark for their skill level. Working conditions at our Sanganer workshop are monitored and maintained to a standard we would be comfortable showing any buyer.",
      "We believe that a supply chain is only as ethical as its weakest link, and we do not outsource our responsibility to others.",
    ],
  },
  {
    id: 2,
    title: "Preserving the Kagzi\nTradition",
    icon: "/images/icons/icon2.svg",
    desc: [
      "The Kagzi community the artisan class whose name and identity is synonymous with handmade paper has been shrinking for decades. Industrial paper production has displaced them in most regions.",
      "Sanganer remains one of the last centres where the traditional craft continues at meaningful scale.",
    ],
  },
  {
    id: 3,
    title: "Skills Training and\nSuccession",
    icon: "/images/icons/icon3.svg",
    desc: [
      "We invest in training new artisans in traditional paper-making techniques alongside our established craftspeople.",
      "Craft knowledge that is not transmitted is lost.",
      "We take the responsibility of transmission seriously.",
    ],
  },
  {
    id: 4,
    title: "Community\nPresence",
    icon: "/images/icons/icon4.svg",
    desc: [
      "Our workshop is embedded in the Sanganer community a town that has produced paper, block-printed textiles, and other handmade goods for centuries.",
      "We participate in the community, not just operate within it.",
    ],
  },
];

// --- DATA: Commercial Responsibility ---
const commercialData = [
  {
    id: 1,
    title: "Transparent Pricing",
    icon: "/images/icons/icon5.svg",
    desc: [
      "We do not use agents or intermediaries in our direct export operations. Our prices reflect actual production costs.",
      "When we quote a price, it is the price not a starting position for negotiation that assumes a margin of inflated room. If a price must change, we tell you why.",
    ],
  },
  {
    id: 2,
    title: "Honest Communication",
    icon: "/images/icons/icon6.svg",
    desc: [
      "If a lead time is longer than expected, we say so. If a specification is not achievable, we say so. If a batch has a quality variance we consider worth flagging, we flag it.",
      "We do not resolve problems by hoping buyers won't notice them. We resolve them by being honest before shipment.",
    ],
  },
  {
    id: 3,
    title: "Sample Availability",
    icon: "/images/icons/icon7.svg",
    desc: [
      "Buyers should never commit to an order without seeing the material. We dispatch sample sets on request, usually within five working days.",
      "We would rather spend on a sample than cause a buyer to make a commitment they will regret.",
    ],
  },
];

export default function ResponsibilitiesPage() {
  return (
    <main className="min-h-screen pt-12 px-6 lg:px-12 max-w-[1400px] mx-auto">

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-24">

        {/* Pill Button */}
        <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
          Responsibilities
        </div>

        {/* Main Title */}
        <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight responsibility-heading">
          We Are Responsible for{" "}
          <span className="responsibility-heading-italic">
            More
          </span>{" "}
          Than What
          <br className="hidden md:block" /> We Ship
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[13px] md:text-sm text-gray-800 leading-relaxed max-w-4xl mx-auto">
          <strong>At Century Papers</strong>, Responsibility Is Not A Policy
          Document We Read Once A Year. It Is Built Into Every Stage Of
          Production In The Materials We Choose, The People We Employ, And The
          Way We Do Business.
        </p>
      </div>

      {/* ================= ENVIRONMENTAL SECTION ================= */}
      <section className="border-t border-gray-300 pt-10 mt-16">

        <p className="text-xs text-gray-800 uppercase tracking-widest mb-16 font-medium">
          Environmental Responsibility
        </p>

        {/* Heading */}
        <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-16 responsibility-heading">
          The Planet{" "}
          <span className="responsibility-heading-italic">
            First
          </span>{" "}
          Always
        </h2>

        {/* CSS Grid for the Checkerboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 lg:gap-y-16">

          {environmentalData.map((item) => (
            <React.Fragment key={item.id}>

              {/* Image Block */}
              <div
                className={`relative w-full aspect-square rounded-3xl overflow-hidden ${item.imgOrder}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Block */}
              <div
                className={`flex flex-col justify-center ${item.txtOrder}`}
              >
                <h3 className="text-black text-2xl md:text-3xl font-playfair mb-6 tracking-tight">
                  {item.title}
                </h3>

                <div className="flex flex-col gap-4 text-[13px] text-gray-800 leading-relaxed">
                  {item.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

            </React.Fragment>
          ))}

        </div>
      </section>

      {/* ================= SOCIAL SECTION ================= */}
      <section className="border-t border-gray-300 pt-10 mt-24">

        <p className="text-xs text-gray-800 uppercase tracking-widest mb-16 font-medium">
          Social Responsibility
        </p>

        {/* Heading */}
        <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-20 responsibility-heading">
          The People Who{" "}
          <span className="responsibility-heading-italic">
            Make
          </span>{" "}
          This Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">

          {socialData.map((item) => (
            <div key={item.id} className="flex flex-col">

              {/* Icon */}
              <div className="relative w-20 h-20 mb-8">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Title */}
              <h3 className="text-black text-2xl font-bold mb-6 tracking-tight whitespace-pre-line leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <div className="flex flex-col gap-4 text-[13px] text-gray-800 leading-relaxed">
                {item.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= COMMERCIAL SECTION ================= */}
      <section className="border-t border-gray-300 pt-10 mt-24">

        <p className="text-xs text-gray-800 uppercase tracking-widest mb-16 font-medium">
          Commercial Responsibility
        </p>

        {/* Heading */}
        <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-20 responsibility-heading">
          We Say What We Mean and Ship{" "}
          <span className="responsibility-heading-italic">
            What
          </span>{" "}
          We Promise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {commercialData.map((item) => (
            <div key={item.id} className="flex flex-col">

              {/* Icon */}
              <div className="relative w-20 h-20 mb-8">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Title */}
              <h3 className="text-black text-2xl font-bold mb-6 tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <div className="flex flex-col gap-4 text-[13px] text-gray-800 leading-relaxed">
                {item.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          HEADING FONT FIX ONLY
          Layout / spacing / images / grids untouched
      ========================================================= */}
      <style>{`
        /*
         * NORMAL PART OF ALL LARGE HEADINGS
         */
        .responsibility-heading {
          font-family: "Playfair Display", Georgia, serif !important;
          font-style: normal;
          font-weight: 700 !important;
          color: #004342;
        }

        /*
         * THIN ITALIC WORDS
         *
         * More
         * First
         * Make
         * What
         */
        .responsibility-heading-italic {
          font-family: "Playfair Display", Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
        }
      `}</style>

    </main>
  );
}