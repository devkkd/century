"use client";

import { useEffect, useRef, useState } from "react";

// ------------------------------------------------------------------
// Content — same as reference design
// ------------------------------------------------------------------
const CATEGORIES = [
  {
    id: "products",
    label: "Products",
    faqs: [
      {
        q: "What materials are your papers made from?",
        a: "All our handmade papers are made from post-consumer cotton textile waste specifically hosiery offcuts and fabric remnants along with clean plant fibres. We do not use wood pulp. Our paper is 100% tree-free, acid-free, and made without chemical bleach.",
      },
      {
        q: "Are your papers suitable for printing?",
        a: "Yes. Our handmade papers are suitable for letterpress, offset lithography, and digital printing, depending on weight and surface. For best results, we recommend testing a sample with your specific printing setup before placing a production order. We are happy to advise on which paper weights and surfaces work best for different print applications.",
      },
      {
        q: "How does the plantable seed paper work?",
        a: "Our seed papers are made from a cotton-rag base embedded with live, viable seeds during the forming process. To grow, tear the paper into pieces, place it on a thin layer of soil, cover lightly, water, and keep in a warm, light location. Most seeds germinate within 7–14 days. The paper decomposes naturally as the seeds sprout.",
      },
      {
        q: "What seed varieties are available?",
        a: "We offer wildflower mixes, culinary herb varieties (basil, coriander, mustard, fenugreek, and others), and vegetable varieties (tomato, onion, carrot, and others). Custom seed varieties are available for larger orders — please enquire with your specification.",
      },
      {
        q: "What sizes do the leather journals come in?",
        a: 'Our standard leather journal sizes are 6×4", 7×5", and 8×6". Custom sizes are available on request, subject to minimum order quantities.',
      },
      {
        q: "Can I order a leather bag in a custom colour?",
        a: "Yes. Custom colours, finishes, and hardware options are available for leather bags on minimum order quantities. Contact us with your specification and we will provide a sample and quotation.",
      },
      {
        q: "What are the available sizes for Paper Honeycomb Décor?",
        a: "Our honeycomb décor range is available in 9 sizes: XS (8 cm), S (10 cm), M (12.5 cm), L (15 cm), XL (17.5 cm), XXL (20 cm), 3XL (22.5 cm), 4XL (25 cm), and 5XL (30 cm). We offer 36 distinct shapes across these sizes.",
      },
      {
        q: "Are your lampshades suitable for all bulb types?",
        a: "Our MDF and cord lampshades are suitable for use with LED bulbs. We recommend LED bulbs of no more than 8–10W to avoid heat build-up in close proximity to the paper and cord elements. All lampshades are supplied without bulb fittings – they are designed to be fitted by a qualified electrician to a standard pendant fitting.",
      },
    ],
  },
  {
    id: "ordering",
    label: "Ordering & Minimum Quantities",
    faqs: [
      {
        q: "What is the minimum order quantity?",
        a: "Our standard minimum order quantity is 50 units per product. For some product categories particularly custom commissions and large-format items minimum quantities may differ. We discuss this per enquiry and will always tell you the minimum before you commit.",
      },
      {
        q: "Can I order a mixed variety pack below the minimum order quantity?",
        a: "In some cases, yes. For retail sampling or first orders, we are sometimes able to accommodate mixed-specification orders below our standard MOQ. Contact us to discuss your requirement.",
      },
      {
        q: "How do I place an order?",
        a: "All orders begin with an enquiry – either through our Contact form, by email to sales@centurypapers.com, or via WhatsApp. We will provide a quotation with pricing, lead time, and payment terms. Orders are confirmed upon written acceptance of the quotation and receipt of the agreed advance payment.",
      },
      {
        q: "Do you have a wholesale catalogue with prices?",
        a: "We do not publish a standard price list, because our pricing varies by specification, quantity, and customisation requirements. We provide individual quotations in response to specific enquiries. This allows us to give you accurate, fair pricing rather than a list rate that may not reflect what you actually need.",
      },
    ],
  },
  {
    id: "samples",
    label: "Samples",
    faqs: [
      {
        q: "Can I request samples before placing an order?",
        a: "Yes, always. We strongly encourage buyers to request samples before committing to an order. Sample sets are available on request and are usually dispatched within 5 working days. Contact us at aqib@centurypapers.com or via WhatsApp to request samples.",
      },
      {
        q: "Is there a cost for samples?",
        a: "Sample costs and arrangements are discussed on a case-by-case basis depending on the product range and volume of samples requested. For standard paper samples, we typically provide a small selection at no cost. For product samples requiring significant production time (e.g., custom-specification journals), a sample charge may apply, which is credited against your first production order.",
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping & Export",
    faqs: [
      {
        q: "Which countries do you ship to?",
        a: "We ship to more than 20 countries worldwide, including across Europe, North America, Australasia, and Southeast Asia. If you are unsure whether we can ship to your country, please ask — we will tell you directly.",
      },
      {
        q: "What are your standard lead times?",
        a: "Lead times vary by product and quantity. Standard paper orders are typically ready for dispatch in 15–25 working days. Custom orders, large volumes, or complex products may require longer lead times. We specify lead time in every quotation.",
      },
      {
        q: "Do you handle all export documentation?",
        a: "Yes. We prepare all standard export documentation including commercial invoice, packing list, certificate of origin, and any phytosanitary certificates required for seed-paper shipments. If your destination requires specific documentation, let us know in advance.",
      },
      {
        q: "Who is responsible for import duties in the destination country?",
        a: "Import duties and taxes in the destination country are the responsibility of the buyer. We declare all goods accurately on export documentation and do not under-declare to reduce import duties.",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom & Branding",
    faqs: [
      {
        q: "Can you produce custom-branded products?",
        a: "Yes. Custom branding is available across most product categories including embossed logos on leather journals and bags, custom screen printing on paper products, foil stamping, and custom seed varieties in seed paper. Discuss your branding requirements when you enquire.",
      },
      {
        q: "What is the process for a custom commission?",
        a: "Send us your specification including dimensions, materials, quantities, design files (if applicable), and timeline. We will review your requirements, advise on feasibility and any modifications needed, and provide a quotation with a sample production timeline. We produce a pre-production sample for your approval before proceeding to full production.",
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    faqs: [
      {
        q: "Is your packaging sustainable?",
        a: "Yes. All outgoing shipments are packed in recycled and biodegradable packaging materials. We do not use polystyrene void fill or virgin plastic wrapping unless essential for moisture protection in transit.",
      },
      {
        q: "Is your paper certified sustainable?",
        a: "Our handmade paper is inherently sustainable made from post-consumer cotton waste without wood pulp, chemical bleach, or artificial drying energy. For MDF-based products, we source FSC-certified material. Our FSC certification documentation is available to buyers on request.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [openKey, setOpenKey] = useState(null); // e.g. "products-0"
  const sectionRefs = useRef({});

  // ------------------------------------------------------------
  // Scroll-spy: highlight the sidebar item for the section in view
  // ------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.categoryId);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(id);
    }
  };

  const toggleFaq = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="faq-section">
      <div className="faq-inner">
        {/* -------------------------------------------------- */}
        {/* Header                                              */}
        {/* -------------------------------------------------- */}
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h1 className="faq-title">
            Frequently <em>Asked</em> Questions
          </h1>
        <p className="faq-subtext">
  If Your Question Isn&apos;t Answered Here, Contact Us Directly At{" "}
  <span className="faq-email">Aqib@centurypapers.com</span>
  {" "}Or Via Whatsapp:{" "}
  <span className="faq-whatsapp">+91 96605 05555.</span>
  <br />
  We Respond Personally To All Substantive Enquiries.
</p>
        </div>

        <div className="faq-divider" />

        {/* -------------------------------------------------- */}
        {/* Body: sidebar + content                             */}
        {/* -------------------------------------------------- */}
        <div className="faq-body">
          <aside className="faq-sidebar">
            <nav className="faq-nav">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`faq-nav-item ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => scrollToCategory(cat.id)}
                >
                  {cat.label.toUpperCase()}
                </button>
              ))}
            </nav>
          </aside>

          <div className="faq-content">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="faq-category"
                data-category-id={cat.id}
                ref={(el) => (sectionRefs.current[cat.id] = el)}
              >
                <h3 className="faq-category-title">
                  {cat.label.toUpperCase()}
                </h3>

                {cat.faqs.map((item, idx) => {
                  const key = `${cat.id}-${idx}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      className={`faq-item ${isOpen ? "open" : ""}`}
                      key={key}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleFaq(key)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span className="faq-toggle-icon">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div className="faq-answer-wrapper">
                        <p className="faq-answer">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            <div className="faq-footer">
              <p>
                MORE QUESTIONS? Contact us directly: aqib@centurypapers.com{" "}
                &nbsp;|&nbsp; WhatsApp: +91 96605 05555
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,500&display=swap");
        @import url("https://api.fontshare.com/v2/css?f[]=mona-sans@400,500,600,700&display=swap");
      `}</style>

      <style jsx>{`
        .faq-section {
          width: 100%;
         
          font-family: "Mona Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .faq-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 56px 32px 80px;
          box-sizing: border-box;
        }

        /* ---------------- Header ---------------- */
        .faq-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-badge {
          display: inline-block;
          padding: 8px 22px;
          border: 1px solid #cfe3e1;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #004342;
          background: #ECFFFF;
          margin-bottom: 20px;
        }

        .faq-title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 1.2;
          color: #004342;
          margin: 0 0 20px;
        }

        .faq-title em {
          font-style: italic;
          font-weight: 400;
          color: #004342;
        }

        .faq-subtext {
          font-size: 13px;
          line-height: 1.7;
          color: #001212;
          margin: 0;
        }

        .faq-divider {
          height: 1px;
          width: 100%;
          background: #e4e7ec;
          margin: 48px 0 0;
        }

        /* ---------------- Body layout ---------------- */
        .faq-body {
          display: flex;
          gap: 64px;
          margin-top: 48px;
          align-items: flex-start;
        }

        .faq-sidebar {
          flex: 0 0 260px;
          position: sticky;
          top: 32px;
        }

        .faq-nav {
          display: flex;
          flex-direction: column;
        }

        .faq-nav-item {
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid #e4e7ec;
          padding: 16px 0;
          font-family: "Mona Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #98a2b3;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .faq-nav-item.active {
          color: #017574;
        }

        .faq-nav-item:hover {
          color: #0f5d57;
        }

        /* ---------------- Content ---------------- */
        .faq-content {
          flex: 1;
          min-width: 0;
        }

        .faq-category {
          margin-bottom: 44px;
          scroll-margin-top: 32px;
        }

        .faq-category-title {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #017574;
          margin: 0 0 20px;
        }

        .faq-item {
          border-bottom: 1px solid #e4e7ec;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          text-align: left;
          padding: 20px 0;
          font-family: "Mona Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #001212;
          cursor: pointer;
        }

        .faq-toggle-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #98a2b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease, background-color 0.3s ease;
        }

        .faq-item.open .faq-toggle-icon {
          background: #004342;
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }

        .faq-item.open .faq-answer-wrapper {
          grid-template-rows: 1fr;
        }

        .faq-answer {
          overflow: hidden;
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #475467;
          padding-right: 40px;
          min-height: 0;
        }

        .faq-item.open .faq-answer {
          padding-bottom: 20px;
        }

        .faq-footer {
          margin-top: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e4e7ec;
        }

        .faq-footer p {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: #0d2b28;
        }

        /* ---------------- Tablet ---------------- */
        @media (max-width: 1024px) {
          .faq-body {
            gap: 40px;
          }
          .faq-sidebar {
            flex-basis: 200px;
          }
          .faq-title {
            font-size: 34px;
          }
        }

       /* =========================
   MOBILE
========================= */
@media (max-width: 768px) {

  .faq-inner {
    padding: 24px 18px 40px;
  }

  /* ---------- HEADER ---------- */

  .faq-header {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .faq-badge {
    padding: 6px 17px;
    font-size: 10px;
    line-height: 1;
    margin-bottom: 16px;
  }

  .faq-title {
    font-size: 25px;
    line-height: 1.18;
    margin: 0 0 12px;
  }

  .faq-title em {
    font-weight: 400;
  }

  .faq-subtext {
    max-width: 570px;
    margin: 0 auto;
    font-size: 11.5px;
    line-height: 1.55;
    text-align: center;
  }

  /* number kabhi break nahi hoga */
  .faq-whatsapp {
    white-space: nowrap;
    display: inline-block;
  }

  .faq-email {
    white-space: nowrap;
  }

  /* ---------- DIVIDER ---------- */

  .faq-divider {
    margin-top: 22px;
  }

  /* ---------- BODY ---------- */

  .faq-body {
    display: block;
    margin-top: 20px;
  }

  /* ---------- CATEGORY NAV ---------- */

  .faq-sidebar {
    position: static;
    width: 100%;
    margin: 0 0 26px;
  }

  .faq-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 18px;
    row-gap: 8px;

    width: 100%;
  }

  .faq-nav-item {
    width: auto;
    flex: 0 0 auto;

    border: none;
    padding: 4px 0;

    font-size: 10.5px;
    line-height: 1.25;
    font-weight: 600;

    white-space: nowrap;
  }

  /* ---------- FAQ CONTENT ---------- */

  .faq-content {
    width: 100%;
  }

  .faq-category {
    margin: 0 0 26px;
    scroll-margin-top: 20px;
  }

  .faq-category-title {
    font-size: 11px;
    line-height: 1.2;
    margin: 0 0 8px;
  }

  /* ---------- QUESTIONS ---------- */

  .faq-item {
    width: 100%;
  }

  .faq-question {
    width: 100%;

    padding: 12px 0;

    font-size: 12.5px;
    line-height: 1.4;

    gap: 12px;

    align-items: center;
  }

  .faq-question > span:first-child {
    flex: 1;
    min-width: 0;
  }

  /* ---------- ARROW ---------- */

  .faq-toggle-icon {
    width: 22px;
    height: 22px;

    min-width: 22px;
    flex-shrink: 0;
  }

  .faq-toggle-icon svg {
    width: 10px;
    height: 7px;
  }

  /* ---------- ANSWER ---------- */

  .faq-answer {
    padding-right: 0;

    font-size: 11.5px;
    line-height: 1.55;
  }

  .faq-item.open .faq-answer {
    padding-bottom: 12px;
  }

  /* ---------- FOOTER ---------- */

  .faq-footer {
    margin-top: 20px;
    padding-bottom: 14px;
  }

  .faq-footer p {
    font-size: 10.5px;
    line-height: 1.5;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {

  .faq-inner {
    padding:
      22px
      16px
      35px;
  }

  .faq-badge {
    padding: 6px 16px;
    margin-bottom: 14px;
  }

  .faq-title {
    font-size: 23px;
    line-height: 1.2;
    margin-bottom: 11px;
  }

  .faq-subtext {
    font-size: 11px;
    line-height: 1.5;
  }

  .faq-divider {
    margin-top: 20px;
  }

  .faq-body {
    margin-top: 18px;
  }

  .faq-sidebar {
    margin-bottom: 22px;
  }

  .faq-nav {
    column-gap: 15px;
    row-gap: 7px;
  }

  .faq-nav-item {
    font-size: 10px;
    padding: 3px 0;
  }

  .faq-category {
    margin-bottom: 22px;
  }

  .faq-category-title {
    margin-bottom: 6px;
  }

  .faq-question {
    padding: 11px 0;
    font-size: 12px;
  }

  .faq-answer {
    font-size: 11px;
  }
}
      `}</style>
    </section>
  );
}