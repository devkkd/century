// FILE LOCATION: app/product/[slug]/page.jsx
// Route: /product/[slug]  (e.g. /product/swede-leather-journal-vintage-1)
// Opens when any product card inside a category page (/collection/[category]) is clicked.

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { getAllProducts, getProductBySlug } from "@/data/collectionData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <main className={`${playfair.variable} product-page`}>
      <div className="container">
        <Link href={`/collection/${product.categorySlug}`} className="back-link">
          ← Back to {product.categoryLabel}
        </Link>

        <div className="product-layout">
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="cover-img"
            />
          </div>

          <div className="product-info">
            <div className="eyebrow-pill">{product.categoryLabel}</div>
            <h1 className="heading-lg">{product.name}</h1>
            <p className="product-desc">{product.desc}</p>

            <ul className="meta-list">
              {product.meta.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <button type="button" className="btn-solid">
              Enquire Now <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <style >{`
        .product-page {
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
          .product-page {
            --side-padding: 20px;
          }
        }

        .container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 48px var(--side-padding) 96px;
          box-sizing: border-box;
        }

        .back-link {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-green);
          text-decoration: none;
          margin-bottom: 32px;
        }

        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .product-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .cover-img {
          object-fit: cover;
        }

        .eyebrow-pill {
          display: inline-flex;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-green);
          background: #ecffff;
          border: 1px solid rgba(1, 117, 116, 0.25);
          border-radius: 999px;
          padding: 8px 20px;
          margin-bottom: 20px;
        }

        .heading-lg {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.3;
          margin: 0 0 16px;
        }

        .product-desc {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(0, 18, 18, 0.68);
          margin: 0 0 24px;
        }

        .meta-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meta-list li {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(0, 18, 18, 0.6);
          padding-bottom: 8px;
          border-bottom: 1px solid var(--color-border);
        }

        .btn-solid {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: var(--color-green);
          border: none;
          border-radius: 999px;
          padding: 13px 28px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .container {
            padding: 32px var(--side-padding) 56px;
          }

          .product-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .heading-lg {
            font-size: 24px;
          }

          .product-desc {
            font-size: 12.5px;
          }
        }
      `}</style>
    </main>
  );
}