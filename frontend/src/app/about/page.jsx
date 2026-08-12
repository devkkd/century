"use client";
import HomeBuildingSection from "@/components/HomeBuildingSection";
import WhyBuyers from "@/components/Whybuyers";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

// Playfair Display for headings (via next/font/google)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

// NOTE: Mona Sans is not on Google Fonts. Drop the woff2 files in
// /public/fonts/mona-sans/ and add this @font-face to your global stylesheet
// (e.g. app/globals.css) and it will be picked up automatically. Until then
// it falls back to system sans-serif.
// @font-face {
//   font-family: 'Mona Sans';
//   src: url('/fonts/mona-sans/Mona-Sans.woff2') format('woff2-variations');
//   font-weight: 200 900;
// }

const productGrid = [
  {
    img: "/images/about/4.png",
    titleBefore: "Handmade",
    ampersand: "&",
    titleAfter: "Recycled Paper",
    desc: "Our founding product and still our most important. Cotton-rag sheets in weights from 90 to 300 GSM acid-free, tree-free, and archival-quality. Available plain, coloured, textured, and embossed.",
  },
  {
    img: "/images/about/5.png",
    title: "Plantable Seed Paper",
    desc: "Cotton-base paper embedded with wildflower, herb, vegetable, and specialty seeds. Used widely in sustainable stationery, event design, and corporate gifting.",
  },
  {
    img: "/images/about/6.png",
    title: "Leather Journals",
    desc: "Full-grain leather-covered journals with handmade cotton-rag pages. Available in multiple closures bobbin elastic, key lock, wrap tie, embossed covers, and laser-engraved MDF.",
  },
  {
    img: "/images/about/8.png",
    title: "Leather Bags",
    desc: "Tote bags, backpacks, and laptop cases in hand-stitched, vegetable-tanned leather. Built for daily use and designed to improve with age.",
  },
  {
    img: "/images/about/9.png",
    title: "Paper Honeycomb Décor",
    desc: "Paper sculpture ornaments in 36 designs across 9 sizes (8 cm to 30 cm). Used extensively in home décor, retail display, and seasonal collections.",
  },
  {
    img: "/images/about/10.png",
    title: "Lampshades",
    desc: "MDF and cord pendant lights with geometric string-art patterning. Minimalist yet distinctive.",
  },
 {
  img: "/images/about/11.png",
  titleBefore: "Gifting",
  ampersand: "&",
  titleAfter: "Packaging",
  desc: "Handmade paper cones, envelopes, pouches, and gift wraps — available plain or custom-printed.",
},
  {
    img: "/images/about/12.png",
    title: "Plantable Stationery",
    desc: "Seed-paper notebooks, greeting cards, bibles with leather covers, and artist sheets that grow after use.",
  },
 {
  img: "/images/about/13.png",
  titleBefore: "Christmas",
  ampersand: "&",
  titleAfter: "Seasonal Décor",
  desc: "Paper ornaments, honeycomb balls, and festive decorative objects for retail and gifting markets.",
},
];

const glanceStats = [
  { label: "Founded", value: "1st January 2000", sub: "Paper-making traditions in the family since 1980." },
  { label: "Workforce", value: "200+", sub: "Skilled artisans" },
  { label: "Production Capacity", value: "2 Lakh (200,000)", sub: "Sheets per month" },
  { label: "Export Reach", value: "20+ countries", sub: "Across Europe, North America, Australasia, and Southeast Asia" },
  { label: "Distribution", value: "Pan-India", sub: "Presence + direct international export" },
  { label: "Certification", value: "FSC", sub: "Certified sourcing" },
];

const leadership = [
  {
    img: "/images/about/14.png",
    name: "Naushad Kagzi",
    role: "Director",
    bio: [
      "Naushad Kagzi brings the weight of four centuries of craft heritage to every decision.",
      "As a member of the Kagzi community the artisan class whose identity is synonymous with handmade paper, Naushad has devoted his career to ensuring that the craft of Sanganer continues to grow, evolve, and reach markets across the world.",
      "He oversees production, quality, and the long-term integrity of the Century Papers standard.",
    ],
  },
  {
    img: "/images/about/15.png",
    name: "Aqib Kagzi",
    role: "Marketing Director",
    bio: [
      "Aqib Kagzi leads Century Papers' commercial growth and international relationships.",
      "With a deep understanding of both the craft and the global market for premium handmade goods, Aqib is the primary contact for export buyers, branding partners, and custom commission clients.",
      "He is reachable directly at aqib@centurypapers.com and responds personally to all substantive enquiries.",
    ],
  },
];

const promises = [
  {
    img: "/images/about/logo.png",
    title: "Quality",
    desc: "We do not ship a sheet, a journal, or a bag that we would not keep ourselves. Every item is inspected by hand before leaving the workshop.",
  },
  {
    img: "/images/about/logo2.png",
    title: "Transparency",
    desc: "We follow moral business policies and complete transparency in all transactions. Our pricing reflects real production costs. Our certifications are audited and documented.",
  },
  {
    img: "/images/about/logo3.png",
    title: "Craft Heritage",
    desc: "We are custodians of a tradition that is over 400 years old. We will not cut corners that damage the craft, even if doing so might improve short-term margins.",
  },
  {
    img: "/images/about/logo4.png",
    title: "Sustainability",
    desc: "Cotton-rag sourced from post-consumer textile waste. No chemical bleach. Solar-dried sheets. Biodegradable packaging. These are not marketing choices, they are how the work has always been done.",
  },
];

export default function AboutPage() {
  return (
    <main className={`${playfair.variable} about-page`}>
      {/* ===== HERO / ABOUT ===== */}
      <section className="section hero">
        <div className="container">
          <div className="eyebrow-pill center">ABOUT US</div>

          <h1 className="heading-xl center">
            We Have Been <em>Making</em> Things by Hand
            <br />
            Since Before It Was a Trend
          </h1>

          <div className="hero-copy center">
  <p>
    <strong>Established In The Year 2000, Century Papers</strong> Is A Leading
    Manufacturer And Exporter Of Cotton-recycled Handmade Paper And Gift Paper
    Products In India. With A Large Production Capacity, We Are Equipped To
    Meet High-volume Requirements While Maintaining The Quality And Character
    Of Handmade Paper.
  </p>

  <p>
    We Are Committed To Providing <strong>Good-quality Paper And A Wide Product
    Portfolio</strong>, Backed By Premium Quality, Competitive Pricing, Strong
    Brand Reputation, And Reliable Customer Service. Our Products Are Designed
    With Care To Meet The Expectations Of Customers, And We Direct All Our
    Activities Towards Delivering Consistent Quality And Satisfaction.
  </p>

  <p>
    Moreover, We Follow <strong>Moral Business Policies And Complete
    Transparency</strong> In All Our Transactions To Build Healthy And
    Long-lasting Relationships With Our Customers. Our Growth And
    Accomplishments Have Been Supported By Continuous Guidance And Direction
    From Our Mentors, Whose Experience Has Helped Us Achieve Steady Development
    In The Market.
  </p>
</div>

          <div className="hero-gallery">
            <div className="hero-gallery__large">
              <Image
                src="/images/about/1.png"
                alt="Century Overseas showroom"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="cover-img"
              />
            </div>
            <div className="hero-gallery__stack">
              <div className="hero-gallery__stack-item">
                <Image
                  src="/images/about/2.png"
                  alt="Century Papers facility exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="cover-img"
                />
              </div>
              <div className="hero-gallery__stack-item">
                <Image
                  src="/images/about/3.png"
                  alt="Century Papers facility building"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="cover-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE MAKE ===== */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">WHAT WE MAKE</div>
          <div className="section-head">
            <h2 className="heading-lg">
              A Complete Range <em>Built</em> from One
              <br />
              Honest Material
            </h2>
            <p className="section-head__copy">
              Our product portfolio spans twelve distinct categories, each grounded in the same
              philosophy: natural materials, artisan skill, no industrial shortcuts.
            </p>
          </div>

          <div className="product-grid">
            {productGrid.map((item) => (
              <article className="product-card" key={item.title}>
                <div className="product-card__img">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="cover-img"
                  />
                </div>
             <h3 className="product-card__title">
  {item.titleBefore ? (
    <>
      {item.titleBefore}{" "}
      <span className="product-card__amp">&amp;</span>{" "}
      {item.titleAfter}
    </>
  ) : (
    item.title
  )}
</h3>
                <p className="product-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY AT A GLANCE ===== */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">COMPANY</div>
          <h2 className="heading-lg">
            Century Papers at a <em>Glance</em>
          </h2>

          <div className="glance-grid">
            {glanceStats.map((stat) => (
              <div className="glance-card" key={stat.label}>
                <span className="eyebrow-pill small">{stat.label}</span>
                <div className="glance-card__value">{stat.value}</div>
                <p className="glance-card__sub">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">LEADERSHIP</div>
          <h2 className="heading-lg">
            The People <em>Behind</em> the Workshop
          </h2>

          <div className="leadership-grid">
            {leadership.map((person) => (
              <div className="leadership-card" key={person.name}>
                <div className="leadership-card__img">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 40vw, 220px"
                    className="cover-img"
                  />
                </div>
                <div className="leadership-card__body">
                  <h3 className="leadership-card__name">{person.name}</h3>
                  <div className="leadership-card__role">{person.role}</div>
                  {person.bio.map((para, i) => (
                    <p className="leadership-card__bio" key={i}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <blockquote className="quote">
            <p>
              &ldquo;A sheet of our paper holds the memory of <em>every</em> hand that shaped it.
              <br />
              We think that matters not just <em>aesthetically</em>, but ethically.&rdquo;
            </p>
            <cite>– Century Papers, Sanganer</cite>
          </blockquote>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section className="section section--last">
        <div className="container">
          <div className="eyebrow">OUR PROMISE</div>
          <h2 className="heading-lg">
            Four Things We Will <em>Never</em> Compromise On
          </h2>

          <div className="promise-grid">
            {promises.map((item) => (
              <div className="promise-card" key={item.title}>
                <div className="promise-card__icon">
                  <Image src={item.img} alt="" fill sizes="48px" className="cover-img" />
                </div>
                <h3 className="promise-card__title">{item.title}</h3>
                <p className="promise-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* =====================================================
           ROOT / TOKENS — scoped to .about-page, no :global
           Custom properties inherit down to every descendant.
           ===================================================== */

        .about-page {
          --color-green: #017574;
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
          .about-page {
            --side-padding: 20px;
          }
        }

        .container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding-left: var(--side-padding);
          padding-right: var(--side-padding);
          box-sizing: border-box;
        }

        .section {
          width: 100%;
          padding: 60px 0;
      
          box-sizing: border-box;
        }

        .section--last {
          border-bottom: none;
          padding-bottom: 70px;
        }

        /* =====================================================
           TYPOGRAPHY
           ===================================================== */

        .eyebrow {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-black);
          opacity: 0.65;

          padding-bottom: 18px;
          margin-bottom: 30px;

          border-bottom: 1px solid var(--color-border);
        }

        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: var(--color-green);
          background: #ecffff;

          border: 1px solid rgba(1, 117, 116, 0.25);
          border-radius: 999px;

          padding: 8px 20px;
          margin-bottom: 22px;
        }

        .eyebrow-pill.small {
          font-size: 10px;
          padding: 6px 13px;
          margin-bottom: 14px;
        }

        .eyebrow-pill.center {
          display: flex;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .heading-xl {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
          color: #004342;
          text-align: center;
          margin: 0 0 24px;
        }

        .heading-lg {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.015em;
          color: #004342;
          margin: 0 0 16px;
        }

        /* Italic emphasis words: keep them lighter and closer to body
           weight so they read as an accent, not an oversized headline. */
        .heading-xl em,
        .heading-lg em,
        .quote em {
          font-style: italic;
          font-weight: 400;
          font-size: 0.92em;
        }

        .center {
          text-align: center;
        }

        /* =====================================================
           HERO
           ===================================================== */

        .hero {
          padding-top: 50px;
        }

        .hero-copy {
          width: 100%;
          max-width: 900px;
          margin: 0 auto 48px;
        }

        .hero-copy p {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;
          color: rgba(0, 18, 18, 0.72);

          margin: 0 0 16px;
        }

        .hero-copy p:last-child {
          margin-bottom: 0;
        }

        .hero-copy strong {
          font-weight: 600;
          color: var(--color-black);
        }

        /* =====================================================
           HERO GALLERY
           ===================================================== */

        .hero-gallery {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .hero-gallery__large {
          position: relative;
          width: 100%;
          min-height: 670px;
          overflow: hidden;
          border-radius: 18px;
        }

        .hero-gallery__stack {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 22px;
        }

        .hero-gallery__stack-item {
          position: relative;
          width: 100%;
          min-height: 224px;
          overflow: hidden;
          border-radius: 18px;
        }

        .cover-img {
          object-fit: cover;
          object-position: center;
        }

        /* =====================================================
           WHAT WE MAKE
           ===================================================== */

        .section-head {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 42px;
        }

        .section-head .heading-lg {
          margin-bottom: 0;
        }

        .section-head__copy {
          width: 100%;
          max-width: 590px;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.7;
          color: rgba(0, 18, 18, 0.65);
          margin: 0;
        }

        /* =====================================================
           PRODUCT GRID
           ===================================================== */

        .product-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 28px;
          row-gap: 42px;
        }

        .product-card {
          width: 100%;
          min-width: 0;
        }

        .product-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 16px;
        }

    .product-card__title {
  font-family: "Mona Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #001212;
  margin: 0;
}

.product-card__amp {
  font-family: "Mona Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

        .product-card__desc {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(0, 18, 18, 0.65);
          margin: 0;
        }

       /* =====================================================
   COMPANY AT A GLANCE
   ===================================================== */

.glance-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  /* cards ke beech gap mat do,
     divider ki spacing card padding se aayegi */
  gap: 0;

  margin-top: 36px;
}

.glance-card {
  min-width: 0;
  position: relative;

  /* divider ke left/right proper space */
  padding: 0 28px;

  box-sizing: border-box;
}

/* first card left se start hoga */
.glance-card:first-child {
  padding-left: 0;
}

/* last card right side unnecessary space nahi */
.glance-card:last-child {
  padding-right: 0;
}

/* HAR CARD KE BAAD DIVIDER */
.glance-card:not(:last-child)::after {
  content: "";
  position: absolute;

  top: 0;
  right: 0;

  width: 1px;
  height: 100%;

  background: rgba(0, 67, 66, 0.22);
}

/* Small pill */
.eyebrow-pill.small {
  font-size: 10px;
  padding: 6px 13px;
  margin-bottom: 14px;
}

/* Value */
.glance-card__value {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #017574;

  margin: 3px 0 12px;
}

/* Description */
.glance-card__sub {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;

  color: rgba(0, 18, 18, 0.7);
  margin: 0;
}

        /* =====================================================
           LEADERSHIP
           ===================================================== */

        .leadership-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          margin-top: 36px;
          margin-bottom: 60px;
        }

        .leadership-card {
          display: flex;
          align-items: flex-start;
          gap: 22px;
        }

        .leadership-card__img {
          position: relative;
          width: 200px;
          height: 250px;
          flex: 0 0 200px;
          overflow: hidden;
          border-radius: 14px;
        }

        .leadership-card__body {
          flex: 1;
          min-width: 0;
        }

        .leadership-card__name {
          font-family: var(--font-heading);
          font-size: 21px;
          font-weight: 600;
          line-height: 1.3;
          color: #017574;
          margin: 0 0 8px;
        }

        .leadership-card__role {
          font-family: var(--font-body);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-black);
          margin-bottom: 10px;
        }

        .leadership-card__bio {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(0, 18, 18, 0.7);
          margin: 0 0 10px;
        }

        .leadership-card__bio:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           QUOTE
           ===================================================== */

        .quote {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .quote p {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 500;
          line-height: 1.45;
          color: #004342;
          margin: 0 0 14px;
        }

        .quote cite {
          font-family: var(--font-heading);
          font-size: 24px;
          font-style: italic;
          font-weight: 400;
          color: #004342;
        }

        /* =====================================================
           OUR PROMISE
           ===================================================== */

        .promise-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 36px;
          margin-top: 34px;
        }

        .promise-card {
          min-width: 0;
        }

        .promise-card__icon {
          position: relative;
          width: 48px;
          height: 48px;
          overflow: hidden;
          margin-bottom: 14px;
        }

        .promise-card__title {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
          color: var(--color-black);
          margin: 0 0 8px;
        }

        .promise-card__desc {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(0, 18, 18, 0.65);
          margin: 0;
        }

      /* =========================================================
   TABLET
   769px — 1024px
   DESKTOP CSS ABOVE THIS REMAINS UNCHANGED
   ========================================================= */

@media (max-width: 1024px) {

  .about-page {
    --side-padding: 28px;
  }

  .section {
    padding: 48px 0;
  }

  .section--last {
    padding-bottom: 55px;
  }

  /* ---------- TYPOGRAPHY ---------- */

  .heading-xl {
    font-size: 36px;
    line-height: 1.25;
  }

  .heading-lg {
    font-size: 30px;
    line-height: 1.25;
  }

  .eyebrow {
    font-size: 12px;
    padding-bottom: 16px;
    margin-bottom: 26px;
  }

  /* ---------- HERO ---------- */

  .hero {
    padding-top: 42px;
  }

  .hero-copy {
    max-width: 820px;
    margin-bottom: 38px;
  }

  .hero-gallery {
    gap: 18px;
  }

  .hero-gallery__large {
    min-height: 520px;
  }

  .hero-gallery__stack {
    gap: 18px;
  }

  /* ---------- WHAT WE MAKE ---------- */

  .section-head {
    gap: 35px;
    margin-bottom: 34px;
  }

  .section-head__copy {
    max-width: 470px;
  }

  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 20px;
    row-gap: 34px;
  }

  /* ---------- COMPANY ---------- */

  .glance-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    margin-top: 30px;
  }

  .glance-card {
    padding: 20px 24px;
  }

  .glance-card:first-child {
    padding-left: 0;
  }

  .glance-card:nth-child(3) {
    padding-right: 0;
  }

  .glance-card:nth-child(4) {
    padding-left: 0;
  }

  .glance-card:last-child {
    padding-right: 0;
  }

  /* desktop dividers reset */
  .glance-card::after {
    display: none !important;
  }

  /* first two columns divider */
  .glance-card:not(:nth-child(3n))::after {
    content: "";
    display: block !important;
    position: absolute;
    right: 0;
    top: 18px;
    bottom: 18px;
    width: 1px;
    height: auto;
    background: rgba(0, 67, 66, 0.18);
  }

  /* first row bottom line */
  .glance-card:nth-child(-n + 3) {
    border-bottom: 1px solid rgba(0, 67, 66, 0.12);
  }

  /* ---------- LEADERSHIP ---------- */

  .leadership-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 30px;
    margin-bottom: 48px;
  }

  .leadership-card {
    width: 100%;
    display: grid;
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 26px;
    align-items: start;
  }

  .leadership-card__img {
    width: 180px;
    height: 220px;
    min-width: 180px;
    flex: none;
  }

  .leadership-card__body {
    width: 100%;
    min-width: 0;
  }

  /* ---------- PROMISE ---------- */

  .promise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 40px;
    row-gap: 40px;
  }
}


/* =========================================================
   MOBILE
   481px — 768px
   ========================================================= */

@media (max-width: 768px) {

  .about-page {
    --side-padding: 20px;
  }

  .container {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .section {
    padding: 36px 0;
  }

  .section--last {
    padding-bottom: 40px;
  }


  /* =====================================================
     COMMON TYPOGRAPHY
     ===================================================== */

  .eyebrow {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.14em;

    padding-bottom: 14px;
    margin-bottom: 24px;
  }

  .eyebrow-pill {
    font-size: 9px;
    padding: 7px 15px;
    margin-bottom: 15px;
  }

  .heading-xl {
    font-size: 27px;
    line-height: 1.22;
    letter-spacing: -0.015em;
    margin-bottom: 16px;
  }

  .heading-xl br {
    display: none;
  }

  .heading-lg {
    font-size: 25px;
    line-height: 1.25;
    letter-spacing: -0.015em;
    margin-bottom: 12px;
  }

  .heading-lg br {
    display: none;
  }

  .heading-xl em,
  .heading-lg em,
  .quote em {
    font-weight: 400;
  }


  /* =====================================================
     HERO
     ===================================================== */

  .hero {
    padding-top: 28px;
  }

  .hero-copy {
    width: 100%;
    max-width: 100%;
    margin: 0 auto 28px;
  }

  .hero-copy p {
    font-size: 11.5px;
    line-height: 1.6;
    margin-bottom: 11px;
  }

  .hero-gallery {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .hero-gallery__large {
    width: 100%;
    min-height: 250px;
    border-radius: 14px;
  }

  .hero-gallery__stack {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;
    gap: 12px;
  }

  .hero-gallery__stack-item {
    width: 100%;
    min-height: 145px;
    border-radius: 14px;
  }


  /* =====================================================
     WHAT WE MAKE
     ===================================================== */

  .section-head {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 25px;
  }

  .section-head .heading-lg {
    margin-bottom: 0;
  }

  .section-head__copy {
    width: 100%;
    max-width: 100%;
    font-size: 11.5px;
    line-height: 1.55;
  }


  /* =====================================================
     PRODUCT GRID
     ===================================================== */

  .product-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 14px;
    row-gap: 26px;
  }

  .product-card {
    width: 100%;
    min-width: 0;
  }

  .product-card__img {
    width: 100%;
    aspect-ratio: 1 / 0.9;
    border-radius: 12px;
    margin-bottom: 10px;
  }

  .product-card__title {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 6px;
  }

  .product-card__desc {
    font-size: 10px;
    line-height: 1.5;
  }


  /* =====================================================
     COMPANY AT A GLANCE
     2 x 3 GRID
     ===================================================== */

  .glance-grid {
    width: 100%;
    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      minmax(0, 1fr);

    gap: 0;

    margin-top: 26px;
  }

  .glance-card {
    position: relative;
    width: 100%;
    min-width: 0;

    padding: 22px 18px;

    box-sizing: border-box;

    border-bottom: none;
  }

  /* left column */

  .glance-card:nth-child(odd) {
    padding-left: 0;
    padding-right: 18px;
  }

  /* right column */

  .glance-card:nth-child(even) {
    padding-left: 18px;
    padding-right: 0;
  }

  /* remove desktop divider */

  .glance-card::after {
    display: none !important;
  }

  /* vertical middle divider */

  .glance-card:nth-child(odd)::after {
    content: "";
    display: block !important;

    position: absolute;

    right: 0;
    top: 16px;
    bottom: 16px;

    width: 1px;
    height: auto;

    background: rgba(0, 67, 66, 0.18);
  }

  /* horizontal divider after row 1 + row 2 */

  .glance-card:nth-child(-n + 4) {
    border-bottom: 1px solid rgba(0, 67, 66, 0.13);
  }

  .eyebrow-pill.small {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: fit-content;

    font-size: 8px;
    font-weight: 500;
    line-height: 1;

    letter-spacing: 0.04em;

    padding: 5px 9px;
    margin: 0 0 11px;

    white-space: nowrap;
  }

  .glance-card__value {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;

    margin: 0 0 7px;
  }

  .glance-card__sub {
    font-size: 10px;
    line-height: 1.45;

    max-width: 150px;

    margin: 0;
  }


  /* =====================================================
     LEADERSHIP

     IMAGE = FIXED LEFT
     CONTENT = REST OF WIDTH
     ===================================================== */

  .leadership-grid {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;

    gap: 30px;

    margin-top: 25px;
    margin-bottom: 38px;
  }

  .leadership-card {
    width: 100%;

    display: grid;

    /* fixed image + remaining content */
    grid-template-columns: 120px minmax(0, 1fr);

    align-items: start;

    gap: 18px;
  }

  .leadership-card__img {
    position: relative;

    width: 120px;
    height: 150px;

    min-width: 120px;

    flex: none;

    overflow: hidden;

    border-radius: 14px;
  }

  .leadership-card__body {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
  }

  .leadership-card__name {
    width: 100%;

    font-size: 19px;
    line-height: 1.2;

    margin: 0 0 6px;
  }

  .leadership-card__role {
    width: 100%;

    font-size: 11px;
    line-height: 1.35;

    margin: 0 0 9px;
  }

  .leadership-card__bio {
    width: 100%;

    font-size: 10.5px;
    line-height: 1.55;

    margin: 0 0 8px;

    /* important */
    word-break: normal;
    overflow-wrap: normal;
    white-space: normal;
  }

  .leadership-card__bio:last-child {
    margin-bottom: 0;
  }


  /* =====================================================
     QUOTE
     ===================================================== */

  .quote {
    width: 100%;
    max-width: 100%;

    margin: 8px auto 0;

    padding: 0 5px;

    box-sizing: border-box;

    text-align: center;
  }

  .quote p {
    font-size: 20px;
    line-height: 1.38;

    margin: 0 0 13px;
  }

  .quote p br {
    display: none;
  }

  .quote cite {
    display: block;

    font-size: 17px;
    line-height: 1.3;

    margin: 0;
  }


  /* =====================================================
     OUR PROMISE
     FIXED ICON → TITLE → DESCRIPTION ALIGNMENT
     ===================================================== */

  .promise-grid {
    width: 100%;

    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      minmax(0, 1fr);

    column-gap: 22px;
    row-gap: 34px;

    margin-top: 28px;
  }

  .promise-card {
    width: 100%;
    min-width: 0;

    display: grid;

    /*
       Row 1 = icon fixed
       Row 2 = title fixed
       Row 3 = description
    */

    grid-template-rows:
      58px
      42px
      auto;

    align-content: start;
  }

  /* ---------- ICON AREA ---------- */

  .promise-card__icon {
    position: relative;

    width: 48px;
    height: 48px;

    margin: 0;

    overflow: hidden;

    align-self: start;
  }

  .promise-card__icon .cover-img {
    object-fit: contain;
  }

  /* ---------- TITLE AREA ---------- */

  .promise-card__title {
    width: 100%;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;

    margin: 0;

    align-self: start;
  }

  /* ---------- DESCRIPTION AREA ---------- */

  .promise-card__desc {
    width: 100%;

    font-size: 10.5px;
    font-weight: 400;
    line-height: 1.55;

    margin: 0;

    align-self: start;

    word-break: normal;
    overflow-wrap: normal;
  }
}


/* =========================================================
   SMALL MOBILE
   <= 480px
   ========================================================= */

@media (max-width: 480px) {

  .about-page {
    --side-padding: 18px;
  }

  .container {
    padding-left: 18px;
    padding-right: 18px;
  }

  .section {
    padding: 32px 0;
  }

  .section--last {
    padding-bottom: 34px;
  }


  /* ---------- HEADINGS ---------- */

  .eyebrow {
    font-size: 9.5px;
    padding-bottom: 13px;
    margin-bottom: 21px;
  }

  .heading-xl {
    font-size: 25px;
    line-height: 1.22;
  }

  .heading-lg {
    font-size: 23px;
    line-height: 1.24;
  }


  /* ---------- HERO ---------- */

  .hero {
    padding-top: 24px;
  }

  .hero-copy p {
    font-size: 11px;
  }

  .hero-gallery__large {
    min-height: 215px;
  }

  .hero-gallery__stack {
    gap: 10px;
  }

  .hero-gallery__stack-item {
    min-height: 125px;
  }


  /* ---------- PRODUCTS ---------- */

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 10px;
    row-gap: 23px;
  }

  .product-card__img {
    border-radius: 10px;
    margin-bottom: 9px;
  }

  .product-card__title {
    font-size: 12.5px;
    line-height: 1.3;
  }

  .product-card__desc {
    font-size: 9.5px;
    line-height: 1.45;
  }


  /* =====================================================
     COMPANY
     ===================================================== */

  .glance-grid {
    margin-top: 22px;
  }

  .glance-card {
    min-height: 150px;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .glance-card:nth-child(odd) {
    padding-left: 0;
    padding-right: 14px;
  }

  .glance-card:nth-child(even) {
    padding-left: 14px;
    padding-right: 0;
  }

  .glance-card:nth-child(odd)::after {
    top: 14px;
    bottom: 14px;
  }

  .eyebrow-pill.small {
    font-size: 7.5px;

    padding: 5px 8px;

    margin-bottom: 10px;
  }

  .glance-card__value {
    font-size: 13px;
    line-height: 1.3;

    margin-bottom: 6px;
  }

  .glance-card__sub {
    font-size: 9.5px;
    line-height: 1.4;

    max-width: 135px;
  }


  /* =====================================================
     LEADERSHIP
     ===================================================== */

  .leadership-grid {
    gap: 28px;

    margin-top: 23px;
    margin-bottom: 34px;
  }

  .leadership-card {
    /*
      Screenshot wali problem solve:
      image 105px fixed,
      remaining entire width text ko
    */

    grid-template-columns: 105px minmax(0, 1fr);

    gap: 15px;
  }

  .leadership-card__img {
    width: 105px;
    height: 132px;

    min-width: 105px;

    border-radius: 12px;
  }

  .leadership-card__name {
    font-size: 18px;
    line-height: 1.18;

    margin-bottom: 5px;
  }

  .leadership-card__role {
    font-size: 10.5px;
    line-height: 1.3;

    margin-bottom: 8px;
  }

  .leadership-card__bio {
    font-size: 10px;
    line-height: 1.5;

    margin-bottom: 7px;
  }


  /* ---------- QUOTE ---------- */

  .quote {
    padding: 0;
    margin-top: 4px;
  }

  .quote p {
    font-size: 18px;
    line-height: 1.4;

    margin-bottom: 12px;
  }

  .quote cite {
    font-size: 15px;
    line-height: 1.3;
  }


  /* =====================================================
     PROMISE
     ===================================================== */

  .promise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 18px;
    row-gap: 30px;

    margin-top: 25px;
  }

  .promise-card {
    /*
      ALL CARDS SAME:

      52px logo
      38px heading
      remaining description
    */

    grid-template-rows:
      52px
      38px
      auto;
  }

  .promise-card__icon {
    width: 42px;
    height: 42px;

    margin: 0;
  }

  .promise-card__title {
    font-size: 13px;
    line-height: 1.25;

    margin: 0;
  }

  .promise-card__desc {
    font-size: 9.5px;
    line-height: 1.5;

    margin: 0;
  }
}


/* =========================================================
   VERY SMALL MOBILE
   <= 360px
   ========================================================= */

@media (max-width: 360px) {

  .about-page {
    --side-padding: 15px;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .heading-xl {
    font-size: 23px;
  }

  .heading-lg {
    font-size: 21px;
  }


  /* ---------- PRODUCTS ---------- */

  .product-grid {
    column-gap: 9px;
  }

  .product-card__title {
    font-size: 12px;
  }


  /* ---------- COMPANY ---------- */

  .glance-card:nth-child(odd) {
    padding-right: 11px;
  }

  .glance-card:nth-child(even) {
    padding-left: 11px;
  }

  .glance-card__value {
    font-size: 12px;
  }

  .glance-card__sub {
    font-size: 9px;
  }


  /* ---------- LEADERSHIP ---------- */

  .leadership-card {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 13px;
  }

  .leadership-card__img {
    width: 92px;
    height: 118px;

    min-width: 92px;
  }

  .leadership-card__name {
    font-size: 16px;
  }

  .leadership-card__role {
    font-size: 10px;
  }

  .leadership-card__bio {
    font-size: 9.5px;
    line-height: 1.45;
  }


  /* ---------- PROMISE ---------- */

  .promise-grid {
    column-gap: 14px;
  }

  .promise-card__title {
    font-size: 12.5px;
  }

  .promise-card__desc {
    font-size: 9px;
  }
}
      `}</style>
      <WhyBuyers />
      <div className="h-15"></div>
      <HomeBuildingSection />
    </main>
  );
}