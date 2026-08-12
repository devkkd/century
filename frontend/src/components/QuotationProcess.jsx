"use client";

import React, { useState } from "react";

const stepsData = [
  {
    id: 1,
    title: "Submit Your Requirement",
    desc: "Use the form below or email us directly at aqib@centurypapers.com. Include as much detail as you have product type, quantity, size, specification, timeline, and any branding or customisation requirements.",
  },
  {
    id: 2,
    title: "We Review and Clarify",
    desc: "Within one working day, we will acknowledge your request. If we need additional information to produce an accurate quotation, we will ask for it at this stage. We prefer to ask one question and do it right than to issue a quotation that doesn't fit your actual requirement.",
  },
  {
    id: 3,
    title: "Receive Your Quotation",
    desc: "We provide a written quotation including unit pricing, minimum order quantity, lead time, payment terms, and shipping estimate. Sample availability is noted in the quotation.",
  },
  {
    id: 4,
    title: "Approve and Order",
    desc: "Once you approve the quotation and provide your advance payment, your order enters the production queue. We issue a production confirmation with the expected dispatch date.",
  },
  {
    id: 5,
    title: "Receive a Production Sample (Custom Orders)",
    desc: "For custom and bespoke orders, we produce a pre-production sample for your approval before committing to full production. The sample is dispatched for your review and approval in writing before we proceed.",
  },
];

export default function QuotationProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="quotation-process-section">

      {/* =========================
          HEADING
      ========================= */}
      <h2 className="quotation-process-heading">
        How the Quotation{" "}
        <span className="quotation-process-italic">Process</span>{" "}
        Works
      </h2>

      {/* =========================
          TIMELINE
      ========================= */}
      <div className="relative flex flex-col">

        {/* Continuous vertical line */}
        <div className="absolute left-[15px] md:left-[23px] top-[40px] bottom-[50px] w-[1px] bg-gray-300 z-0" />

        {stepsData.map((step) => (
          <div
            key={step.id}
            className="flex items-start mb-8 relative cursor-pointer"
            onMouseEnter={() => setActiveStep(step.id)}
            onClick={() => setActiveStep(step.id)}
          >

            {/* =========================
                LEFT: TIMELINE DOT
            ========================= */}
            <div className="relative flex justify-center w-8 md:w-12 shrink-0 mt-[26px] h-[20px]">

              {activeStep === step.id && (
                <div className="absolute z-10 flex items-center justify-center w-[18px] h-[18px] rounded-full border-[2px] border-[#017574] bg-[#ECFFFF] top-1/2 -translate-y-1/2 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#017574]" />
                </div>
              )}

            </div>

            {/* =========================
                MIDDLE: STEP NUMBER
            ========================= */}
            <div
              className={`w-20 md:w-28 shrink-0 mt-[26px] font-bold text-[14px] transition-colors duration-300 ${
                activeStep === step.id
                  ? "text-[#017574]"
                  : "text-gray-400"
              }`}
            >
              Step {step.id}
            </div>

            {/* =========================
                RIGHT: CONTENT CARD
            ========================= */}
            <div
              className={`flex-1 flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-3xl border transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-[#ECFFFF] border-[#017574]/30 shadow-sm"
                  : "bg-transparent border-gray-300"
              }`}
            >

              {/* Card Heading */}
              <div className="md:w-5/12 lg:w-1/3">
                <h3 className="text-[#004342] text-xl font-bold pr-4 leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Card Description */}
              <div className="md:w-7/12 lg:w-2/3">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* =========================
          COMPONENT CSS
      ========================= */}
      <style>{`

        /* ======================================================
           SECTION
        ====================================================== */

        .quotation-process-section {
          width: 100%;
          margin-top: 64px;
        }


        /* ======================================================
           MAIN HEADING
        ====================================================== */

        .quotation-process-heading {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif !important;

          font-size: 34px;
          line-height: 1.25;

          font-weight: 700 !important;
          font-style: normal;

          letter-spacing: -0.035em;

          color: #004342;

          margin: 0 0 64px 0;
          padding: 0;
        }


        /* ======================================================
           PROCESS = THIN ITALIC
        ====================================================== */

        .quotation-process-heading
        .quotation-process-italic {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif !important;

          font-style: italic !important;

          /*
            IMPORTANT:
            thin italic word
          */
          font-weight: 400 !important;

          color: inherit;

          letter-spacing: inherit;
        }


        /* ======================================================
           TABLET
           769px - 1024px
        ====================================================== */

        @media (max-width: 1024px) {

          .quotation-process-section {
            margin-top: 56px;
          }

          .quotation-process-heading {
            font-size: 31px;
            line-height: 1.25;

            margin-bottom: 50px;
          }

        }


        /* ======================================================
           MOBILE
           <= 768px
        ====================================================== */

        @media (max-width: 768px) {

          .quotation-process-section {
            margin-top: 44px;
          }

          .quotation-process-heading {
            font-size: 27px;

            line-height: 1.25;

            letter-spacing: -0.025em;

            margin-bottom: 36px;
          }

          .quotation-process-heading
          .quotation-process-italic {
            font-weight: 400 !important;
            font-style: italic !important;
          }

        }


        /* ======================================================
           SMALL MOBILE
           <= 480px
        ====================================================== */

        @media (max-width: 480px) {

          .quotation-process-section {
            margin-top: 38px;
          }

          .quotation-process-heading {
            font-size: 25px;

            line-height: 1.25;

            letter-spacing: -0.025em;

            margin-bottom: 32px;
          }

        }

      `}</style>

    </section>
  );
}