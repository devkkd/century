import React from "react";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";

// --- DATA: 5 Stages of Production ---
const stagesData = [
  {
    id: 1,
    stageNum: "STAGE 1",
    titleBefore: "Fibre Sourcing",
    titleItalic: "and",
    titleAfter: "Selection",
    desc: [
      "We source post-consumer cotton textile waste hosiery offcuts, fabric remnants, and clean plant fibres. Nothing virgin. Nothing synthetic. The quality of the raw material determines the character of the finished sheet, so sourcing is not an administrative task for us. It is a craft decision.",
      "Cotton-rag paper has been made this way since the earliest days of papermaking in India. It produces a sheet that is stronger, more durable, and more beautiful than wood-pulp paper and it does so by reclaiming waste material that would otherwise be discarded. The environmental logic is built into the process itself, not added afterwards.",
      "We do not use virgin tree pulp in our paper. We never have.",
    ],
    buttonText: "ZERO-WASTE INPUT",
    image: "/images/pages/stage1.png",
  },

  {
    id: 2,
    stageNum: "STAGE 2",
    titleBefore: "Pulping",
    titleItalic: "and",
    titleAfter: "Colour",
    desc: [
      "Cleaned fibres are thoroughly soaked, then beaten to a fine, homogeneous slurry using traditional beating methods. For coloured papers, natural mineral pigments or botanical dyes are blended into the pulp at this stage.",
      "We do not use optical brighteners. We do not use chemical bleach. The colour that results from our process is natural, varied, and characteristic of handmade paper it deepens and mellows beautifully with age rather than fading or yellowing as chemically treated paper does.",
      "Colour consistency in handmade paper is inherently approximate — small variations between sheets and batches are a mark of authenticity, not a flaw. Buyers who understand handmade goods understand this. Those who need machine-perfect colour consistency belong in a different supply chain.",
    ],
    buttonText: "NATURAL PIGMENT ONLY",
    image: "/images/pages/stage2.png",
  },

  {
    id: 3,
    stageNum: "STAGE 3",
    titleBefore: "Mould",
    titleItalic: "and",
    titleAfter: "Deckle Forming",
    desc: [
      "The mould and deckle is the defining tool of the handmade papermaker. The mould a wooden frame with a mesh screen is submerged into the vat of prepared pulp slurry. The deckle a frameless border sits on top to contain the pulp.",
      "A skilled artisan submerges the mould into the vat, lifts it level in a single smooth motion, and holds steady while the water drains through the mesh, depositing an even layer of fibre across the screen. This moment the lift and the drain is entirely human. No robot performs it with the sensitivity it requires. The quality of this step determines the evenness, texture, and weight of the finished sheet.",
      "The deckled edge that characteristic feathered border on handmade paper is not a decorative treatment applied after the fact. It is the direct physical consequence of the pulp running against the edge of the deckle frame during the lift. It is the most visible sign that a sheet was made by hand.",
    ],
    buttonText: "HAND-FORMED SHEETS",
    image: "/images/pages/stage3.png",
  },

  {
    id: 4,
    stageNum: "STAGE 4",
    titleBefore: "Sun Drying",
    titleItalic: "and",
    titleAfter: "Pressing",
    desc: [
      "Once the sheet is formed on the mould, it must be transferred to a drying support a process called couching. Couched sheets are stacked between felts and cold-pressed to remove excess water, then transferred to sloped drying boards and set out in open air.",
      "Sanganer's geography is essential to this stage. The town's dry heat, low humidity, and consistently strong sunlight produce a natural, surface-hardened finish that is unique to this place. It is not reproducible in a factory environment. The resulting surface has a specific tactile quality slightly resistant, warm, and alive that photographers, artists, calligraphers, and bookbinders recognise immediately.",
      "We use no artificial heat. No electricity is consumed in drying. The sun does what the sun has always done here.",
    ],
    buttonText: "SOLAR-DRIED, ZERO ENERGY",
    image: "/images/pages/stage4.png",
  },

  {
    id: 5,
    stageNum: "STAGE 5",
    titleBefore: "Finishing",
    titleItalic: "and",
    titleAfter: "Quality Check",
    desc: [
      "After drying, each sheet is individually inspected. We look for evenness of formation, correct weight, clean edges, and surface quality appropriate to the sheet's intended use.",
      "Sheets that pass inspection are calendered if required a light pressing process that adjusts surface smoothness and sized for writing or printing use if specified.",
      "Rejected sheets are returned to the pulp vat and remade. Nothing goes to waste. The reject rate is low, because the skill of our craftspeople is high but the standard is not negotiable.",
      "Only sheets that meet our standard leave the workshop.",
    ],
    buttonText: "100% HAND-INSPECTED",
    image: "/images/pages/stage5.png",
  },
];

// --- DATA: Specialist Processes ---
const specialistData = [
  {
    id: 1,
    title: "Seed Embedding",
    image: "/images/pages/Specialist1.png",
    desc: [
      "For plantable seed paper, seeds are introduced into the pulp slurry during the forming stage or applied to the surface of a freshly formed sheet before drying.",
      "Seed distribution must be even enough to ensure germination but sparse enough not to compromise the paper's structural integrity.",
      "We have refined our seed paper technique across multiple crop types wildflowers, herbs, vegetables, and specialty botanical varieties.",
    ],
    imgOrder: "lg:order-1",
    txtOrder: "lg:order-2",
  },

  {
    id: 2,
    title: "Leather Working",
    image: "/images/pages/Specialist2.png",
    desc: [
      "Our leather goods are produced using vegetable-tanned leather a natural tanning process that uses plant-derived tannins rather than chromium or synthetic chemicals.",
      "Veg-tanned leather ages characterfully, developing a patina that improves with use.",
      "All stitching is done by hand using saddle-stitch technique, which is stronger and more repairable than machine stitching.",
    ],
    imgOrder: "lg:order-3",
    txtOrder: "lg:order-4",
  },

  {
    id: 3,
    title: "MDF Laser Engraving",
    image: "/images/pages/Specialist3.png",
    desc: [
      "Our MDF lampshades and journal covers are made from PINE MDF a material composed of waste wood powder and waste paper, making it a significantly more sustainable alternative to solid timber.",
      "Designs are cut and engraved using laser technology.",
      "The precision of the cut contrasts directly with the warmth of the cord and leather elements it is paired with.",
    ],
    imgOrder: "lg:order-6",
    txtOrder: "lg:order-5",
  },

  {
    id: 4,
    title: "Paper Honeycomb\nConstruction",
    image: "/images/pages/Specialist4.png",
    desc: [
      "Honeycomb paper décor is produced by gluing and folding individual sheets of coloured paper into a concertina structure that opens into a three-dimensional form.",
      "The process is entirely manual. Precision in folding is essential errors in alignment compound through the stacking and become visible when the piece is opened.",
      "Our decorative honeycomb range spans 36 distinct shapes and 9 sizes.",
    ],
    imgOrder: "lg:order-8",
    txtOrder: "lg:order-7",
  },
];

export default function CraftPage() {
  return (
    <>
      <main className="min-h-screen pt-8 px-6 lg:px-10 max-w-[1400px] mx-auto">

        {/* ================= SECTION 1: HERO ================= */}

        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-8">

          {/* Pill Button */}
          <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
            Our Craft
          </div>

          {/* Main Title */}
          <h1 className="text-[#004342] text-3xl md:text-4xl lg:text-5xl font-playfair mb-8 tracking-tight leading-tight craft-main-heading">
            Five Stages,{" "}
            <span className="craft-heading-italic">No Shortcuts</span>, No
            Machines
            <br className="hidden md:block" /> That Matter
          </h1>

          {/* Intro Paragraph */}
          <p className="text-[13px] md:text-sm text-gray-800 leading-relaxed max-w-4xl mx-auto">
            This Is How A Sheet Of Century Papers Paper Comes Into Existence
            From Raw Cotton Waste To A Finished Sheet Ready To Hold Ink, Carry
            Seeds, Or Bind Into A Journal. Every Step Is Described Exactly As
            It Happens In Our Sanganer Workshop.
          </p>
        </div>

        {/* ================= SECTION 2: THE 5 STAGES ================= */}

        <div className="flex flex-col gap-12">
          {stagesData.map((stage) => (
            <section key={stage.id} className="pt-10">

              <div className="mb-12">
                <p className="text-sm text-gray-800 uppercase tracking-wide mb-4">
                  {stage.stageNum}
                </p>

                <hr className="border-gray-300 w-full" />
              </div>

              <div className="flex flex-col gap-12 lg:gap-24 lg:flex-row">

                {/* Text Block */}
                <div className="flex flex-col flex-1 justify-center">

                  {/* STAGE HEADING */}
                  <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-8 craft-stage-heading">
                    {stage.titleBefore}{" "}
                    <span className="craft-heading-italic">
                      {stage.titleItalic}
                    </span>{" "}
                    {stage.titleAfter}
                  </h2>

                  <div className="flex flex-col gap-6 text-[13px] text-gray-800 leading-relaxed mb-10">
                    {stage.desc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <button className="bg-[#017574] hover:bg-[#015a59] text-white px-8 py-3 rounded-full text-[13px] font-bold transition-colors w-fit">
                    {stage.buttonText}
                  </button>
                </div>

                {/* Image Block */}
                <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-auto min-h-[350px] lg:min-h-[450px] rounded-[32px] overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={`${stage.titleBefore} ${stage.titleItalic} ${stage.titleAfter}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ================= SECTION 3: SPECIALIST PROCESSES ================= */}

        <section className="border-t border-gray-300 pt-10 mt-32">

          <p className="text-xs text-gray-800 uppercase tracking-widest mb-16 font-medium">
            Special Product Techniques
          </p>

          {/* SPECIALIST MAIN HEADING */}
          <h2 className="text-[#004342] text-4xl md:text-5xl lg:text-5xl font-playfair tracking-tight mb-16 craft-special-heading">
            Beyond the Basic Sheet{" "}
            <span className="craft-heading-italic">Specialist</span> Processes
          </h2>

          {/* Checkerboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 lg:gap-y-16">

            {specialistData.map((item) => (
              <React.Fragment key={item.id}>

                {/* Image Block */}
                <div
                  className={`relative w-full aspect-[3/3.6] rounded-[32px] overflow-hidden ${item.imgOrder}`}
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
                  <h3 className="text-[#004342] text-2xl md:text-3xl font-playfair mb-6 tracking-tight whitespace-pre-line leading-snug">
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

        {/* ======================================================
            ONLY HEADING FONT CONTROL
            Baaki design untouched
        ====================================================== */}

        <style>{`
          /*
           * Main normal heading text:
           * Playfair bold exactly like screenshots
           */
          .craft-main-heading,
          .craft-stage-heading,
          .craft-special-heading {
            font-family: "Playfair Display", Georgia, serif !important;
            font-weight: 700 !important;
            font-style: normal;
            color: #004342;
          }

          /*
           * Italic words:
           * No Shortcuts
           * and
           * Specialist
           *
           * Thin italic like screenshot
           */
          .craft-heading-italic {
            font-family: "Playfair Display", Georgia, serif !important;
            font-style: italic !important;
            font-weight: 400 !important;
          }
        `}</style>

      </main>

      {/* <EnquiryForm /> */}
    </>
  );
}