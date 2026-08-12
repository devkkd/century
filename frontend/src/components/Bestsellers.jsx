"use client";

import { useRouter } from "next/navigation";

const bestSellers = [
  {
    image: "/images/home/26.png",
    tag: "Handmade Paper",
    title: "Swede Leather Journal with Vintage Pages",
    description:
      "Swede Leather Journal with Vintage Pages and Key Lock. Size 7 x 5' 8 x 6' | Item Code: COJL-012 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  },
  {
    image: "/images/home/17.png",
    tag: "Leather Journals",
    title: "Laser Engraved MDF Cover Journals",
    description:
      "Swede Leather Journal with Vintage Pages and Key Lock. Size 7 x 5' 8 x 6' | Item Code: COJL-012 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  },
  {
    image: "/images/home/18.png",
    tag: "Leather Bag",
    title: "Green Leather Laptop Backpack",
    description:
      "Green Leather Laptop Backpack for Women Size 14 x 15 x 5' | Item Code: COLB-01 Acid-Free, Tree-Free",
  },
  {
    image: "/images/home/19.png",
    tag: "Lampshades",
    title: "MDF Pendant Lamp with Cord",
    description:
      "MDF Pendant Lamp with Cord Size 7 x 5' 8 x 6' | Item Code: COJL-012 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  },
  // {
  //   image: "/images/home/20.png",
  //   tag: "Paper Honeycomb Décor",
  //   title: "Paper Honeycomb Décor",
  //   description:
  //     "Architectural paper sculpture 36 designs, 9 sizes from 8 cm to 30 cm. Size: XS - 5XL | Item Code: CO/HC-006 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  // },
  // {
  //   image: "/images/home/21.png",
  //   tag: "Leather Journals",
  //   title: "Laser Engraved MDF Cover Journals",
  //   description:
  //     "Swede Leather Journal with Vintage Pages and Key Lock. Size 7 x 5' 8 x 6' | Item Code: COJL-012 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  // },
  // {
  //   image: "/images/home/22.png",
  //   tag: "Leather Bag",
  //   title: "Green Leather Laptop Backpack",
  //   description:
  //     "Green Leather Laptop Backpack for Women Size 14 x 15 x 5' | Item Code: COLB-01 Acid-Free, Tree-Free",
  // },
  // {
  //   image: "/images/home/23.png",
  //   tag: "Lampshades",
  //   title: "MDF Pendant Lamp with Cord",
  //   description:
  //     "MDF Pendant Lamp with Cord Size 7 x 5' 8 x 6' | Item Code: COJL-012 90 GSM | Acid-Free, Tree-Free | MOQ: 50 units",
  // },
];

export default function BestSellers() {
   const router = useRouter();
  return (
    <section className="bs-section">
      <div className="bs-inner">
        <p className="bs-label">Best Sellers</p>
        <div className="bs-top-divider" />

        <div className="bs-heading-row">
          <h2 className="bs-heading">
            The Products <em>Our Buyers</em>
            <br />
            Reorder Every Season
          </h2>
          <p className="bs-subtitle">
            These are not our newest products. <br />They are our most trusted
            chosen by buyers across retail, publishing, branding, and
            gifting, each item below has earned its place through
            consistent quality and repeat demand across 30+ countries.
          </p>
        </div>

        <div className="bs-grid">
          {bestSellers.map((item, i) => (
            <div className="bs-card" key={i}>
              <div className="bs-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="bs-card-img"
                />
                <span className="bs-card-tag">{item.tag}</span>
              </div>
              <h3 className="bs-card-title">{item.title}</h3>
              <p className="bs-card-desc">{item.description}</p>
             <button
  type="button"
  className="bs-card-btn"
  onClick={() => router.push("/request")}
>
  Enquire Now <span>→</span>
</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bs-section {
          width: 100%;
          box-sizing: border-box;
        }

        .bs-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 32px 0;
          box-sizing: border-box;
        }

        .bs-label {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 18px;
        }

        .bs-top-divider {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          margin-bottom: 36px;
        }

        .bs-heading-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 48px;
        }

        .bs-heading {
          font-family: "Playfair Display", serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.3;
          color: #004342;
          margin: 0;
        }

        .bs-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .bs-subtitle {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          align-self: center;
        }

        /* ---------- GRID ---------- */
        .bs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px 24px;
        }

        .bs-card {
          display: flex;
          flex-direction: column;
        }

        .bs-card-img-wrap {
          position: relative;
          border-radius:18px;
          width: 100%;
          aspect-ratio: 1 / 1.02;
          overflow: hidden;
          margin-bottom: 18px;
        }

        .bs-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .bs-card-tag {
          position: absolute;
          bottom: 14px;
          left: 10px;
          background: #ffffff;
          color: #1a1a1a;
          font-family: "Mona Sans", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
        }

        .bs-card-title {
          font-family: "Mona Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #004342;
          margin: 0 0 10px;
        }

        .bs-card-desc {
          font-family: "Mona Sans", sans-serif;
          font-size: 12.5px;
          line-height: 1.6;
          color: #4a4a4a;
          margin: 0 0 18px;
          flex-grow: 1;
        }

        .bs-card-btn {
          align-self: flex-start;
          font-family: "Mona Sans", sans-serif;
          background: #ffffff;
          color: #004342;
          border: 1.5px solid #004342;
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.25s ease, color 0.25s ease,
            border-color 0.25s ease;
        }

        .bs-card-btn:hover,
        .bs-card-btn:focus-visible,
        .bs-card-btn:active {
          background: #004342;
          color: #ffffff;
          border-color: #004342;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 768px) {
          .bs-inner {
            padding: 0 20px;
          }

          .bs-label {
            font-size: 11px;
            margin-bottom: 14px;
          }

          .bs-top-divider {
            margin-bottom: 24px;
          }

          .bs-heading-row {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 28px;
          }

          .bs-heading {
            font-size: 22px;
          }

          .bs-subtitle {
            font-size: 13px;
          }

          .bs-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px 12px;
          }

          .bs-card-img-wrap {
            margin-bottom: 10px;
          }

         .bs-card-tag {
  top: auto;
  bottom: 8px;
  left: 8px;
  right: auto;

  width: auto;
  height: auto;

  max-width: calc(100% - 16px);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  color: #1a1a1a;

  font-family: "Mona Sans", sans-serif;
  font-size: 7px;
  font-weight: 600;
  line-height: 1;

  letter-spacing: 0.2px;
  text-transform: uppercase;

  padding: 5px 7px;

  border-radius: 999px;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  box-sizing: border-box;

  z-index: 2;
}

          .bs-card-title {
            font-size: 12.5px;
            margin-bottom: 6px;
          }

          .bs-card-desc {
            font-size: 10.5px;
            line-height: 1.5;
            margin-bottom: 12px;
          }

          .bs-card-btn {
            padding: 8px 14px;
            font-size: 10.5px;
          }
        }
      `}</style>
    </section>
  );
}