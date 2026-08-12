// FILE LOCATION: app/collection/[category]/page.jsx
// Route:  /collection/journals, /collection/lightings, etc.
// Opens when a "See All Products" button is clicked from /collection.
// IMPORTANT: every product in this category is rendered in ONE grid below —
// there are no "Leather Journals" / "Paper Journals" style sub-tabs. Whichever
// preview card the user clicked on the collection page, they land on this
// same page with everything mixed together.

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { categories, getCategoryBySlug } from "@/data/collectionData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

// Pre-render every category at build time.
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return notFound();

  return (
    <main className={`${playfair.variable} category-page`}>
      <div className="container">
        <div className="eyebrow-pill center">COLLECTION</div>

        <h1 className="heading-xl center">{category.label}</h1>

        <p className="intro center">{category.description}</p>

        <div className="info-grid">
          <div>
            <h2 className="mini-heading">Specifications</h2>
            <ul className="spec-list">
              {category.specifications.map((spec) => (
                <li key={spec.label}>
                  <span className="spec-arrow">→</span>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mini-heading">Ideal For</h2>
            <p className="ideal-for">{category.idealFor}</p>
          </div>
        </div>

        {/* Single mixed product grid — every product in this category, no filters */}
       <div className="product-grid">
  {category.products.map((product) => (
    <div className="product-card" key={product.slug}>
      
      <div className="product-card__img">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
          className="cover-img"
        />
      </div>

      <h3 className="product-card__name">
        {product.name}
      </h3>

      <p className="product-card__desc">
        {product.desc}
      </p>

      {product.meta.map((line) => (
        <p className="product-card__meta" key={line}>
          {line}
        </p>
      ))}

      <span className="btn-outline">
        Enquire Now <span aria-hidden="true">→</span>
      </span>

    </div>
  ))}
</div>
      </div>

      <style >{`
        .category-page {
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
          .category-page {
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
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: var(--color-dark);
          margin: 0 0 24px;
        }

        .intro {
          max-width: 760px;
          margin: 0 auto 48px;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(0, 18, 18, 0.68);
        }

        /* ---- specifications / ideal for ---- */
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--color-border);
        }

        .mini-heading {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: var(--color-black);
          margin: 0 0 14px;
        }

        .spec-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .spec-list li {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(0, 18, 18, 0.68);
        }

        .spec-arrow {
          color: var(--color-green);
          margin-right: 4px;
        }

        .spec-list strong {
          font-weight: 700;
          color: var(--color-black);
        }

        .ideal-for {
          font-size: 13px;
          line-height: 1.75;
          color: rgba(0, 18, 18, 0.68);
          margin: 0;
        }

        /* ---- product grid ---- */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .product-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 16px;
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }

        .product-card:hover {
          box-shadow: 0 8px 24px rgba(0, 18, 18, 0.08);
          transform: translateY(-2px);
        }

       .product-card__img {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #ffffff;
}

.cover-img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

        .product-card__name {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: #004342;
          margin: 0 0 8px;
        }

        .product-card__desc {
          font-size: 12px;
          line-height: 1.6;
          color: rgba(0, 18, 18, 0.65);
          margin: 0 0 8px;
        }

        .product-card__meta {
          font-size: 11.5px;
          line-height: 1.6;
          color: rgba(0, 18, 18, 0.5);
          margin: 0 0 4px;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-green);
          border: 1px solid var(--color-green);
          border-radius: 999px;
          padding: 9px 18px;
          margin-top: 12px;
        }

        /* =====================================================
           TABLET
           ===================================================== */
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .info-grid {
            gap: 32px;
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
            font-size: 28px;
            margin-bottom: 16px;
          }

          .intro {
            font-size: 12px;
            margin-bottom: 32px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-bottom: 32px;
            margin-bottom: 32px;
          }

          .mini-heading {
            font-size: 14px;
          }

          .spec-list li,
          .ideal-for {
            font-size: 12px;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .product-card {
            padding: 10px;
          }

          .product-card__name {
            font-size: 13px;
          }

          .product-card__desc,
          .product-card__meta {
            font-size: 10.5px;
          }

          .btn-outline {
            font-size: 11px;
            padding: 8px 14px;
          }
        }

        @media (max-width: 420px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}