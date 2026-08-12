import React from "react";
import QuotationProcess from "@/components/QuotationProcess";
import QuotationForm from "@/components/QuotationForm";

export default function RequestQuotePage() {
  return (
    <main className="quote-page min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">

      {/* =========================================================
          TOP HEADER SECTION
      ========================================================= */}
      <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-20">

        {/* Pill Button */}
        <div className="border border-[#017574]/30 bg-[#ECFFFF] text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
          Request Quote
        </div>

        {/* Main Title */}
        <h1 className="quote-main-heading mb-8">
          Tell Us What You{" "}
          <span className="quote-italic">Need</span>, We'll Tell You
          <br className="hidden md:block" /> What It Costs
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[13px] text-gray-700 leading-relaxed max-w-4xl mx-auto">
          No Automated Pricing. No Algorithmic Estimates. When You Submit A
          Quotation Request, It Goes Directly To Aqib Kagzi At The Workshop.
          We Will Review Your Requirements, Ask Any Clarifying Questions, And
          Provide An Honest, Itemised Quotation Usually Within One Working Day.
        </p>
      </div>


      {/* =========================================================
          PROCESS DIVIDER
      ========================================================= */}
      <div className="mb-8">
        <p className="text-xs text-gray-800 uppercase tracking-widest mb-4 font-medium">
          Process
        </p>

        <hr className="border-gray-300 w-full" />
      </div>


      {/* =========================================================
          QUOTATION PROCESS
      ========================================================= */}
      <QuotationProcess />


      {/* =========================================================
          QUOTATION FORM
      ========================================================= */}
      <QuotationForm />


      {/* =========================================================
          ALTERNATIVE CONTACT METHODS
          LAST SECTION
      ========================================================= */}
      <section className="alternative-contact-section">

        {/* Label */}
        <div className="alternative-label-wrap">
          <p className="alternative-label">
            Alternative Contact Methods
          </p>

          <div className="alternative-divider" />
        </div>


        {/* Heading + Description */}
        <div className="alternative-top">

          <h2 className="alternative-heading">
            Prefer to Talk?
          </h2>

          <p className="alternative-description">
            Not all requirements fit neatly into a form. If your project is
            complex, your timeline is tight, or you simply prefer a direct
            conversation, contact us directly:
          </p>

        </div>


        {/* Contact Cards */}
        <div className="alternative-cards">

          {/* Email */}
          <div className="alternative-card">
            <p className="alternative-card-label">
              Email:
            </p>

            <a
              href="mailto:aqib@centurypapers.com"
              className="alternative-card-value"
            >
              aqib@centurypapers.com
            </a>
          </div>


          {/* WhatsApp */}
          <div className="alternative-card">
            <p className="alternative-card-label">
              WhatsApp:
            </p>

            <a
              href="https://wa.me/919660505555"
              target="_blank"
              rel="noopener noreferrer"
              className="alternative-card-value whatsapp-number"
            >
              +91 96605 05555
            </a>
          </div>


          {/* Office Hours */}
          <div className="alternative-card">
            <p className="alternative-card-label">
              Office Hours:
            </p>

            <p className="alternative-card-value">
              Mon - Sat, 10:00 AM - 6:00 PM IST
            </p>
          </div>

        </div>


        {/* Bottom Note */}
        <p className="alternative-note">
          For buyers outside India, email is recommended for initial contact.
          We hold WhatsApp calls and video calls by appointment.
        </p>

      </section>


      {/* =========================================================
          PAGE SPECIFIC CSS
      ========================================================= */}
      <style>{`

        /* ======================================================
           MAIN HEADING
        ====================================================== */

        .quote-main-heading {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif !important;

          font-size: 48px;
          line-height: 1.28;
          font-weight: 700 !important;
          letter-spacing: -0.035em;

          color: #004342;

          margin-top: 0;
        }


        /* NEED = THIN ITALIC */

        .quote-main-heading .quote-italic {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif !important;

          font-style: italic !important;
          font-weight: 400 !important;
        }



        /* ======================================================
           ALTERNATIVE CONTACT SECTION
        ====================================================== */

        .alternative-contact-section {
          width: 100%;

          margin-top: 90px;
          padding-top: 0;
          padding-bottom: 38px;

          box-sizing: border-box;
        }



        /* ======================================================
           LABEL + LINE
        ====================================================== */

        .alternative-label-wrap {
          width: 100%;
          margin-bottom: 46px;
        }


        .alternative-label {
          font-family:
            "Mona Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12px;
          line-height: 1.4;

          font-weight: 500;

          color: #1d2928;

          text-transform: uppercase;

          margin: 0 0 15px;
        }


        .alternative-divider {
          width: 100%;
          height: 1px;

          background: #cfd6d5;
        }



        /* ======================================================
           HEADING + DESCRIPTION
        ====================================================== */

        .alternative-top {
          display: grid;

          grid-template-columns:
            minmax(280px, 1fr)
            minmax(400px, 0.75fr);

          justify-content: space-between;

          gap: 80px;

          align-items: start;

          margin-bottom: 42px;
        }


        .alternative-heading {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif !important;

          font-size: 34px;
          line-height: 1.2;

          font-weight: 700 !important;

          letter-spacing: -0.035em;

          color: #004342;

          margin: 0;
        }


        .alternative-description {
          font-family:
            "Mona Sans",
            Arial,
            Helvetica,
            sans-serif;

          max-width: 500px;

          font-size: 12px;
          line-height: 1.65;

          font-weight: 400;

          color: #1e2928;

          margin: 0;

          justify-self: end;
        }



        /* ======================================================
           CONTACT CARDS
        ====================================================== */

        .alternative-cards {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 28px;

          margin-bottom: 42px;
        }


        .alternative-card {
          min-height: 100px;

          background: #ecffff;

          border-radius: 20px;

          padding: 26px 34px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          justify-content: center;

          align-items: flex-start;
        }


        .alternative-card-label {
          font-family:
            "Mona Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;
          line-height: 1.35;

          font-weight: 400;

          color: #1b2928;

          margin: 0 0 3px;
        }


        .alternative-card-value {
          font-family:
            "Mona Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;
          line-height: 1.45;

          font-weight: 400;

          color: #001f1e;

          margin: 0;

          text-decoration: none;
        }


        a.alternative-card-value:hover {
          color: #017574;
        }


        .whatsapp-number {
          white-space: nowrap;
        }



        /* ======================================================
           BOTTOM NOTE
        ====================================================== */

        .alternative-note {
          font-family:
            "Mona Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12px;
          line-height: 1.6;

          font-weight: 400;

          color: #273130;

          margin: 0;
        }



        /* ======================================================
           TABLET
           769px - 1024px
        ====================================================== */

        @media (max-width: 1024px) {

          .quote-main-heading {
            font-size: 40px;
          }


          .alternative-contact-section {
            margin-top: 75px;
          }


          .alternative-top {
            grid-template-columns: 1fr 1fr;

            gap: 50px;

            margin-bottom: 36px;
          }


          .alternative-heading {
            font-size: 31px;
          }


          .alternative-description {
            max-width: 100%;
          }


          .alternative-cards {
            gap: 18px;
          }


          .alternative-card {
            padding: 24px 22px;

            border-radius: 18px;
          }


          .alternative-card-label,
          .alternative-card-value {
            font-size: 14px;
          }

        }



        /* ======================================================
           MOBILE
           <= 768px
        ====================================================== */

        @media (max-width: 768px) {

          /*
           * Main Heading
           */

          .quote-main-heading {
            font-size: 30px;

            line-height: 1.25;

            letter-spacing: -0.025em;
          }



          /*
           * Section spacing
           */

          .alternative-contact-section {
            margin-top: 58px;

            padding-bottom: 15px;
          }


          .alternative-label-wrap {
            margin-bottom: 30px;
          }


          .alternative-label {
            font-size: 10px;

            letter-spacing: 0.04em;

            margin-bottom: 12px;
          }



          /*
           * Heading and description
           */

          .alternative-top {
            display: flex;

            flex-direction: column;

            gap: 16px;

            margin-bottom: 26px;
          }


          .alternative-heading {
            font-size: 28px;

            line-height: 1.2;
          }


          .alternative-description {
            max-width: 100%;

            font-size: 12px;

            line-height: 1.6;

            justify-self: auto;
          }



          /*
           * Cards
           */

          .alternative-cards {
            grid-template-columns: 1fr;

            gap: 12px;

            margin-bottom: 26px;
          }


          .alternative-card {
            width: 100%;

            min-height: auto;

            padding: 20px 22px;

            border-radius: 16px;
          }


          .alternative-card-label {
            font-size: 13px;

            margin-bottom: 3px;
          }


          .alternative-card-value {
            font-size: 13px;

            line-height: 1.45;
          }


          /*
           * WhatsApp stays on one line
           */

          .whatsapp-number {
            white-space: nowrap;
          }



          /*
           * Bottom note
           */

          .alternative-note {
            font-size: 11px;

            line-height: 1.6;
          }

        }



        /* ======================================================
           SMALL MOBILE
           <= 480px
        ====================================================== */

        @media (max-width: 480px) {

          .quote-main-heading {
            font-size: 27px;

            line-height: 1.25;
          }


          .alternative-contact-section {
            margin-top: 48px;
          }


          .alternative-label-wrap {
            margin-bottom: 26px;
          }


          .alternative-heading {
            font-size: 26px;
          }


          .alternative-top {
            gap: 14px;

            margin-bottom: 22px;
          }


          .alternative-cards {
            gap: 10px;

            margin-bottom: 22px;
          }


          .alternative-card {
            padding: 18px 20px;

            border-radius: 15px;
          }


          .alternative-card-label,
          .alternative-card-value {
            font-size: 13px;
          }


          .alternative-note {
            font-size: 10.5px;
          }

        }

      `}</style>

    </main>
  );
}