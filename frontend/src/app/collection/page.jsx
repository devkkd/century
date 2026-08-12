// FILE LOCATION: app/collection/page.jsx
// Route:  /collection
// Data:   imports from data/collectionData.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { categories } from "@/data/collectionData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export default function CollectionPage() {
  return (
    <main className={`${playfair.variable} collection-page`}>
      <div className="container">
        <div className="eyebrow-pill center">COLLECTION</div>

        <h1 className="heading-xl center">
          Everything <em>We Make</em>, Made for You
        </h1>

        <p className="intro center">
          Browse Our Complete Range Of Handmade Paper Goods, Leather Products, And Decorative
          Crafts.
          <br />
          All Items Are Available For Wholesale, Retail, And Custom Commission. Minimum Order
          Quantities Vary By Category.
        </p>

        {/* Tabs: anchor links to each category section below. "See All Products"
            inside each section always points to /collection/[category] — every
            product card in a category shares that one link, nothing is split
            into sub-pages. */}
        <nav className="tabs" aria-label="Category tabs">
          <a href="#top" className="tab tab--active">
            All
          </a>
          {categories.map((cat) => (
            <a href={`#${cat.slug}`} className="tab" key={cat.slug}>
              {cat.tabLabel}
            </a>
          ))}
        </nav>

        {categories.map((cat) => (
          <section className="category-block" id={cat.slug} key={cat.slug}>
            <div className="category-block__grid">
              <div className="category-block__info">
                <h2 className="heading-lg">{cat.label}</h2>
                <p className="category-block__desc">{cat.description}</p>

                <h3 className="mini-heading">Specifications</h3>
                <ul className="spec-list">
                  {cat.specifications.map((spec) => (
                    <li key={spec.label}>
                      <span className="spec-arrow">→</span>
                      <strong>{spec.label}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>

                <h3 className="mini-heading">Ideal For</h3>
                <p className="ideal-for">{cat.idealFor}</p>
              </div>

              <div className="category-block__cards">
                {cat.previewCards.map((card) => (
                  <div className="preview-card" key={card.name}>
                    <div className="preview-card__img">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="cover-img"
                      />
                    </div>
                    <div className="preview-card__name">{card.name}</div>
                    {/* Same href for every card in this category — one mixed page, no sub-splits */}
                    <Link href={`/collection/${cat.slug}`} className="btn-pill">
                      See All Products <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

     <style>{`
        .collection-page {
          --color-green: #017574;
          --color-dark: #004342;
          --color-black: #001212;
          --color-border: rgba(0, 18, 18, 0.1);
          --max-width: 1400px;
          --side-padding: 32px;
          --font-heading: var(--font-playfair), "Playfair Display", serif;
          --font-body: "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif;

          font-family: var(--font-body);
          color: var(--color-black);
          width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          .collection-page {
            --side-padding: 20px;
          }
        }

        .container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 34px var(--side-padding) 96px;
          box-sizing: border-box;
        }

        .center {
          text-align: center;
        }

        .eyebrow-pill {
          display: flex;
          width: fit-content;
          margin: 0 auto 24px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-green);
          background: #ecffff;
          border: 1px solid rgba(1, 117, 116, 0.25);
          border-radius: 999px;
          padding: 8px 20px;
        }

        .heading-xl {
          font-family: var(--font-heading);
          font-size: 40px;
          font-weight: 600;
          line-height: 1.28;
          color: var(--color-dark);
          margin: 0 0 16px;
        }

        .heading-xl em {
          font-style: italic;
          font-weight: 400;
          font-size: 0.92em;
        }

        .intro {
          max-width: 820px;
          margin: 0 auto 40px;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(0, 18, 18, 0.65);
        }

        /* ---- tabs ---- */
        .tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
          padding-bottom: 20px;
          margin-bottom: 56px;
          border-bottom: 1px solid var(--color-border);
        }

        .tab {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(0, 18, 18, 0.5);
          text-decoration: none;
          padding-bottom: 18px;
          margin-bottom: -21px;
          border-bottom: 2px solid transparent;
        }

        .tab:hover {
          color: var(--color-green);
        }

        .tab--active {
          color: var(--color-dark);
          border-bottom-color: var(--color-green);
        }

        /* ---- category block ---- */
        .category-block {
          padding-top: 24px;
          margin-bottom: 72px;
          scroll-margin-top: 90px;
        }

        .category-block:last-child {
          margin-bottom: 0;
        }

        .category-block__grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 48px;
          align-items: start;
        }

        .heading-lg {
          font-family: var(--font-heading);
          font-size: 25px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: var(--color-dark);
          margin: 0 0 14px;
        }

        .category-block__desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(0, 18, 18, 0.68);
          margin: 0 0 22px;
        }

        .mini-heading {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-black);
          margin: 0 0 10px;
        }

        .spec-list {
          list-style: none;
          margin: 0 0 22px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .spec-list li {
          font-size: 12.5px;
          line-height: 1.6;
          color: rgba(0, 18, 18, 0.68);
        }

        .spec-arrow {
          color: var(--color-green);
          margin-right: 4px;
        }

        .spec-list strong {
          font-weight: 600;
          color: var(--color-black);
        }

        .ideal-for {
          font-size: 12.5px;
          line-height: 1.7;
          color: rgba(0, 18, 18, 0.68);
          margin: 0;
        }

        /* ---- preview cards ---- */
        .category-block__cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .preview-card {
          display: flex;
          flex-direction: column;
        }

        .preview-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          margin-bottom: 14px;
        }

        .cover-img {
          object-fit: cover;
        }

        .preview-card__name {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-black);
          margin-bottom: 14px;
        }

        .btn-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: fit-content;
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 500;
          color: #fff;
          background: var(--color-green);
          border: 1px solid var(--color-green);
          border-radius: 999px;
          padding: 11px 22px;
          text-decoration: none;
          transition: opacity 0.15s ease;
        }

        .btn-pill:hover {
          opacity: 0.85;
        }

        /* =====================================================
           TABLET
           ===================================================== */
        @media (max-width: 1024px) {
          .category-block__grid {
            grid-template-columns: 280px 1fr;
            gap: 36px;
          }
        }

        /* =====================================================
           MOBILE
           ===================================================== */
        @media (max-width: 768px) {
          .container {
            padding: 40px var(--side-padding) 56px;
          }

          .heading-xl {
            font-size: 26px;
          }

          .intro {
            font-size: 12px;
            margin-bottom: 28px;
          }

          .intro br {
            display: none;
          }

          .tabs {
            justify-content: flex-start;
            overflow-x: auto;
            gap: 20px;
            margin-bottom: 36px;
            padding-bottom: 14px;
            -webkit-overflow-scrolling: touch;
          }

          .tab {
            white-space: nowrap;
            font-size: 11px;
            padding-bottom: 14px;
            margin-bottom: -15px;
          }

          .category-block {
            margin-bottom: 48px;
          }

          .category-block__grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .heading-lg {
            font-size: 21px;
          }

          .category-block__cards {
            gap: 16px;
          }

          .preview-card__name {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .btn-pill {
            font-size: 11px;
            padding: 9px 16px;
          }
        }

        @media (max-width: 480px) {
          .category-block__cards {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </main>
  );
}