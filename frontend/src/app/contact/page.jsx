import EnquiryForm from "@/components/EnquiryForm";
import QuotationSuccess from "@/components/QuotationSuccess";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-24">

          {/* Pill Button */}
          <div className="bg-[#ECFFFF] border border-[#004342]/20 text-[#004342] px-6 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-10">
            Contact Us
          </div>

          {/* Main Heading */}
          <h1 className="contact-main-heading">
            Start a Conversation, Not a{" "}
            <span className="contact-heading-italic">Catalogue</span>{" "}
            Browse.
          </h1>

          {/* Intro Paragraph */}
          <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We Would Rather Talk To You Than Send You A Pdf. Whether You Have
            A Specific Requirement, A Question About Materials, A Custom
            Project In Mind, Or Simply Want To Understand What We Can Do
            Before Committing Get In Touch. You Will Hear From The Workshop
            Directly, Not From An Automated System.
          </p>
        </div>


        {/* ================= DIVIDER ================= */}
        <div className="mb-16">
          <p className="text-xs text-gray-800 uppercase tracking-wider mb-4 font-medium">
            Contact Details
          </p>

          <hr className="border-gray-300 w-full" />
        </div>


        {/* ================= DETAILS SECTION ================= */}
        <div>

          {/* Sub Heading */}
          <h2 className="contact-section-heading">
            How to{" "}
            <span className="contact-heading-italic">Reach</span>{" "}
            Us
          </h2>


          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x divide-gray-300">

            {/* ================= COLUMN 1 ================= */}
            <div className="lg:pr-8">

              <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                Office/factory addresses
              </h3>

              <p className="font-bold text-black text-[14px] mb-4">
                Century Overseas 
              </p>

              <p className="text-gray-700 text-[13px] leading-relaxed">
              KHASRA NO . 2701,2702, Jain Hostel Rd, behind 
                <br />
             JAIN HOSTEL, Sanganer, Jaipur, 
                <br />
               Rajasthan 302029

              </p>

            </div>


            {/* ================= COLUMN 2 ================= */}
            <div className="lg:px-8">

              <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                Email
              </h3>

              <div className="mb-6">

                <p className="font-bold text-black text-[14px] mb-2">
                  General & International Sales:
                </p>

                <p className="text-gray-700 text-[13px]">
                  aqib@centurypapers.com

                </p>

              </div>

              <div>

                <p className="font-bold text-black text-[14px] mb-2">
                  Orders & Operations:
                </p>

                <p className="text-gray-700 text-[13px]">
                  sales@centurypapers.com

                </p>

              </div>

            </div>


            {/* ================= COLUMN 3 ================= */}
            <div className="lg:px-8">

              <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                Orders & Operations
              </h3>
               <p className="font-bold text-black text-[14px] mb-4">
                Contact person - Mr. Aqib Kagzi

              </p>

              <p className="font-bold text-gray-700 text-[14px] mb-4">
                +91 96605 05555
              </p>

              <p className="text-gray-700 text-[13px] mb-6 leading-relaxed">
               Working hours - 9.30 AM - 6 PM
              </p>

              {/* <p className="text-gray-700 text-[13px] leading-relaxed">
                WhatsApp preferred for time-sensitive queries and image
                sharing.
              </p> */}

            </div>


            {/* ================= COLUMN 4 ================= */}
            <div className="lg:pl-8">

              <h3 className="text-[#004342] text-2xl lg:text-3xl font-playfair mb-6 tracking-tight">
                Sample Dispatch
              </h3>

              <p className="text-gray-700 text-[13px] leading-relaxed">
                Sample sets are available on request. Most orders are
                dispatched within 5 working days from the date of request
                confirmation.
              </p>

            </div>

          </div>
        </div>


        {/* =====================================================
            HEADING CSS ONLY
            Baaki design ko touch nahi karega
        ===================================================== */}

        <style>{`

          /* ==========================================
             MAIN CONTACT HEADING
          ========================================== */

          .contact-main-heading {
            font-family:
              "Playfair Display",
              Georgia,
              "Times New Roman",
              serif !important;

            color: #004342;

            font-size: 48px;
            line-height: 1.2;

            font-weight: 700 !important;
            font-style: normal !important;

            letter-spacing: -0.04em;

            max-width: 1000px;

            margin: 0 0 32px 0;
            padding: 0;
          }


          /* ==========================================
             HOW TO REACH US
          ========================================== */

          .contact-section-heading {
            font-family:
              "Playfair Display",
              Georgia,
              "Times New Roman",
              serif !important;

            color: #004342;

            font-size: 42px;
            line-height: 1.2;

            font-weight: 700 !important;
            font-style: normal !important;

            letter-spacing: -0.04em;

            margin: 0 0 48px 0;
            padding: 0;
          }


          /* ==========================================
             ALL ITALIC WORDS

             Catalogue
             Reach
          ========================================== */

          .contact-heading-italic {
            font-family:
              "Playfair Display",
              Georgia,
              "Times New Roman",
              serif !important;

            font-size: inherit !important;
            line-height: inherit !important;

            font-weight: 400 !important;
            font-style: italic !important;

            letter-spacing: inherit !important;

            color: inherit !important;
          }


          /* ==========================================
             TABLET
          ========================================== */

          @media (max-width: 1024px) {

            .contact-main-heading {
              font-size: 40px;
              line-height: 1.2;
            }

            .contact-section-heading {
              font-size: 38px;
              line-height: 1.2;
            }

            .contact-heading-italic {
              font-weight: 400 !important;
              font-style: italic !important;
            }

          }


          /* ==========================================
             MOBILE
          ========================================== */

          @media (max-width: 768px) {

            .contact-main-heading {
              font-size: 30px;
              line-height: 1.2;

              letter-spacing: -0.03em;

              margin-bottom: 32px;
            }

            .contact-section-heading {
              font-size: 30px;
              line-height: 1.2;

              letter-spacing: -0.03em;

              margin-bottom: 48px;
            }

            .contact-heading-italic {
              font-weight: 400 !important;
              font-style: italic !important;
            }

          }


          /* ==========================================
             SMALL MOBILE
          ========================================== */

          @media (max-width: 480px) {

            .contact-main-heading {
              font-size: 28px;
              line-height: 1.22;
            }

            .contact-section-heading {
              font-size: 28px;
              line-height: 1.2;
            }

          }

        `}</style>

      </main>


      {/* ================= ENQUIRY FORM ================= */}
      <EnquiryForm />


      {/* ================= SUCCESS SECTION ================= */}
      {/* <QuotationSuccess /> */}

    </>
  );
}