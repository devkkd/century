"use client";

import { useRouter } from "next/navigation";

const collections = [
  {
    image: "/images/home/26.png",
    title: "Journals",
    description:
      "Handcrafted Leather-covered Journals With Handmade Cotton-rag Pages. Each Journal Is A Unique Piece Designed To Inspire Daily Writing And To Last Decades.",
  },
  {
    image: "/images/home/25.png",
    title: "Decoration",
    description:
      "Architectural Paper Sculpture Produced By Hand In 36 Distinct Shapes Across 9 Sizes. Used Extensively In Home Décor, Retail Window Display, Event Design, And Seasonal Product Ranges.",
  },
  {
    image: "/images/home/24.png",
    title: "Lightings",
    description:
      "Pendant Lampshades Crafted From Mdf, Cord, And Paper, With Geometric String-art Patterns And Minimalist Aesthetic. Each Shade Creates A Warm, Patterned Glow That Transforms A Space.",
  },
  {
    image: "/images/home/8.png",
    title: "Handmade Paper",
    description:
      "Born In A Vat Of Pure Cotton Fibre, Dried Under Rajasthan's Open Sky, Finished By A Craftsperson Who Has Spent A Lifetime Perfecting A Single Gesture. Every Sheet Is Unrepeatable. Every Deckle Edge Is A Signature.",
  },
  // {
  //   image: "/images/home/9.png",
  //   title: "Leather Bags",
  //   description:
  //     "Hand-stitched Bags In Vegetable-tanned Leather. Designed For Everyday Use And Built To Improve With Age.",
  // },
  // {
  //   image: "/images/home/10.png",
  //   title: "Gifting Segment",
  //   description:
  //     "Hand-stitched Bags In Vegetable-tanned Leather. Designed For Everyday Use And Built To Improve With Age.",
  // },
];

export default function Collections() {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/collection");
  };

  return (
    <section className="col-section">
      <div className="col-inner">
        <p className="col-label">Collections</p>
        <div className="col-top-divider" />

        <div className="col-heading-row">
          <h2 className="col-heading">
            Made for <em>Those</em> Who, Value the <em>Real</em> Thing
          </h2>
          <div className="col-badge">22+</div>
        </div>

        <p className="col-subtitle">
          Browse our full range of handmade paper goods, leather products,
          and decorative crafts. Every category below is available for
          wholesale, retail, and bespoke commission.
        </p>

        <div className="col-grid">
          {collections.map((item) => (
            <div className="col-card" key={item.title}>
              <div className="col-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="col-card-img"
                />
              </div>
              <h3 className="col-card-title">{item.title}</h3>
              <p className="col-card-desc">{item.description}</p>
              <button
                type="button"
                className="col-card-btn"
                onClick={handleSeeAll}
              >
                See All Products <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .col-section {
          width: 100%;
          box-sizing: border-box;
        }

        .col-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 32px;
          box-sizing: border-box;
        }

        .col-label {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 18px;
        }

        .col-top-divider {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          margin-bottom: 36px;
        }

       .col-heading-row {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

/* heading */
.col-heading {
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: 34px;
  line-height: 1.3;
  color: #004342;
  margin: 0;
  max-width: 780px;
}

/* THIN ITALIC WORDS */
.col-heading em {
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.08em;
  letter-spacing: -0.5px;
  color: #004342;
}

/* BADGE */
.col-badge {
  position: absolute;

  /* divider ke just neeche attach */
  top: -37px;
  right: 0;

  width: 110px;
  height: 98px;

  background: #017574;
  color: #ffffff;

  /*
    TOP = straight
    BOTTOM = round
  */
  border-radius: 0 0 55px 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 8px;
  box-sizing: border-box;

  font-family: "Playfair Display", serif;
  font-size: 34px;
  font-weight: 550;
  line-height: 1;

  flex-shrink: 0;
}

        .col-subtitle {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4a4a4a;
          max-width: 1220px;
          margin: 20px 0 0;
        }

        /* ---------- GRID ---------- */
        .col-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 32px;
          margin-top: 56px;
        }

        .col-card {
          display: flex;
          flex-direction: column;
        }

       .col-card-img-wrap {
  width: 100%;
  aspect-ratio: 2 / 1.5;
  overflow: hidden;
  margin-bottom: 20px;
}

        .col-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  border-radius: 20px;
}

        .col-card-title {
          font-family: "Mona Sans", sans-serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: #004342;
          margin: 0 0 12px;
        }

        .col-card-desc {
          font-family: "Mona Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0 0 18px;
          flex-grow: 1;
        }

        .col-card-btn {
          align-self: flex-start;
          font-family: "Mona Sans", sans-serif;
          background: #004342;
          color: #ffffff;
          border: none;
          border-radius: 85px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

      /* =========================================================
   TABLET
   769px - 1024px
========================================================= */

@media (min-width: 769px) and (max-width: 1024px) {

  .col-inner {
    max-width: 100%;
    padding: 50px 28px;
  }

  /* ---------- LABEL ---------- */

  .col-label {
    font-size: 12px;
    margin: 0 0 15px;
  }

  .col-top-divider {
    margin-bottom: 32px;
  }

  /* ---------- HEADING ---------- */

  .col-heading-row {
    position: relative;
    width: 100%;
    gap: 20px;
  }

  .col-heading {
    max-width: 650px;
    padding-right: 100px;

    font-size: 30px;
    line-height: 1.3;
  }

  /* ---------- BADGE ---------- */

  .col-badge {
    top: -33px;
    right: 0;

    width: 90px;
    height: 82px;

    border-radius: 0 0 45px 45px;

    padding-bottom: 6px;

    font-size: 28px;
  }

  /* ---------- SUBTITLE ---------- */

  .col-subtitle {
    max-width: 850px;

    margin-top: 18px;

    padding-right: 80px;

    font-size: 13.5px;
    line-height: 1.6;
  }

  /* ---------- GRID ---------- */

  .col-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    column-gap: 22px;
    row-gap: 36px;

    margin-top: 45px;
  }

  .col-card {
    width: 100%;
    min-width: 0;
  }

  .col-card-img-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;

    margin-bottom: 16px;

    border-radius: 16px;
  }

  .col-card-img {
    border-radius: 16px;
  }

  .col-card-title {
    font-size: 15px;
    margin-bottom: 9px;
  }

  .col-card-desc {
    font-size: 12px;
    line-height: 1.6;

    margin-bottom: 14px;
  }

  .col-card-btn {
    padding: 9px 15px;

    font-size: 11px;
  }
}


/* =========================================================
   MOBILE
   481px - 768px
========================================================= */

@media (min-width: 481px) and (max-width: 768px) {

  .col-section {
    width: 100%;
    overflow: hidden;
  }

  .col-inner {
    width: 100%;
    max-width: 100%;

    margin: 0;

    /* IMPORTANT - TOP PADDING */
    padding: 45px 20px 4px;

    box-sizing: border-box;
  }

  /* =====================================================
     LABEL
  ===================================================== */

  .col-label {
    margin: 0 0 12px;

    font-size: 10px;
    font-weight: 500;

    letter-spacing: 0.5px;
  }

  /* =====================================================
     DIVIDER
  ===================================================== */

  .col-top-divider {
    width: 100%;
    height: 1px;

    margin: 0 0 28px;

    background: #d9d9d9;
  }

  /* =====================================================
     HEADING
  ===================================================== */

  .col-heading-row {
    position: relative;

    display: block;

    width: 100%;

    min-height: 60px;

    margin: 0;

    padding: 0;

    box-sizing: border-box;
  }

  .col-heading {
    width: 100%;
    max-width: 100%;

    /*
      Badge ke liye jagah.
      Isse heading badge ke neeche nahi jayegi.
    */
    padding-right: 75px;

    margin: 0;

    box-sizing: border-box;

    font-size: 26px;
    line-height: 1.28;

    overflow-wrap: break-word;
  }

  /* =====================================================
     22+ BADGE
  ===================================================== */

  .col-badge {
    position: absolute;

    /*
      Divider ke just neeche se start.
    */
    top: -29px;
    right: 0;

    width: 66px;
    height: 62px;

    /*
      TOP STRAIGHT
      BOTTOM ROUND
    */
    border-radius: 0 0 33px 33px;

    background: #017574;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 0 5px;

    box-sizing: border-box;

    font-family: "Playfair Display", serif;

    font-size: 20px;
    font-weight: 550;
    line-height: 1;

    z-index: 2;
  }

  /* =====================================================
     SUBTITLE
  ===================================================== */

  .col-subtitle {
    width: 100%;
    max-width: 100%;

    margin: 17px 0 0;

    padding: 0;

    font-size: 12.5px;
    line-height: 1.6;

    color: #4a4a4a;
  }

  /* =====================================================
     GRID
  ===================================================== */

  .col-grid {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    width: 100%;

    column-gap: 16px;
    row-gap: 30px;

    margin-top: 32px;
  }

  /* =====================================================
     CARD
  ===================================================== */

  .col-card {
    width: 100%;
    max-width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;
  }

  /* =====================================================
     IMAGE
  ===================================================== */

  .col-card-img-wrap {
    width: 100%;

    aspect-ratio: 4 / 3;

    margin: 0 0 12px;

    overflow: hidden;

    border-radius: 14px;
  }

  .col-card-img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    display: block;

    border-radius: 14px;
  }

  /* =====================================================
     CARD TITLE
  ===================================================== */

  .col-card-title {
    width: 100%;

    margin: 0 0 7px;

    font-size: 13px;
    line-height: 1.3;

    letter-spacing: 0.2px;

    overflow-wrap: break-word;
  }

  /* =====================================================
     DESCRIPTION
  ===================================================== */

  .col-card-desc {
    width: 100%;

    margin: 0 0 12px;

    font-size: 10.5px;
    line-height: 1.55;

    color: #4a4a4a;

    flex-grow: 1;

    overflow-wrap: break-word;
  }

  /* =====================================================
     BUTTON
  ===================================================== */

  .col-card-btn {
    align-self: flex-start;

    padding: 8px 12px;

    border-radius: 50px;

    font-size: 9.5px;
    line-height: 1;

    gap: 5px;

    white-space: nowrap;
  }
}


/* =========================================================
   NORMAL MOBILE
   361px - 480px
========================================================= */

@media (min-width: 361px) and (max-width: 480px) {

  .col-section {
    width: 100%;
    overflow: hidden;
  }

  .col-inner {
    width: 100%;
    max-width: 100%;

    margin: 0;

    /* TOP GAP / PADDING */
    padding: 40px 16px 1px;

    box-sizing: border-box;
  }

  /* =====================================================
     LABEL
  ===================================================== */

  .col-label {
    margin: 0 0 11px;

    font-size: 9px;
    line-height: 1.2;

    letter-spacing: 0.5px;
  }

  /* =====================================================
     DIVIDER
  ===================================================== */

  .col-top-divider {
    width: 100%;
    height: 1px;

    margin: 0 0 25px;

    background: #d9d9d9;
  }

  /* =====================================================
     HEADING AREA
  ===================================================== */

  .col-heading-row {
    position: relative;

    display: block;

    width: 100%;

    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  .col-heading {
    width: 100%;
    max-width: 100%;

    /*
      right side badge ki space
    */
    padding-right: 62px;

    margin: 0;

    box-sizing: border-box;

    font-size: 22px;
    line-height: 1.27;

    overflow-wrap: break-word;
  }

  /* =====================================================
     BADGE
  ===================================================== */

  .col-badge {
    position: absolute;

    top: -26px;
    right: 0;

    width: 56px;
    height: 54px;

    background: #017574;
    color: #ffffff;

    /*
      Reference jaisa:
      upar straight
      neeche circular
    */
    border-radius: 0 0 28px 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 0 4px;

    box-sizing: border-box;

    font-family: "Playfair Display", serif;

    font-size: 17px;
    font-weight: 550;
    line-height: 1;

    z-index: 2;
  }

  /* =====================================================
     SUBTITLE
  ===================================================== */

  .col-subtitle {
    width: 100%;
    max-width: 100%;

    margin: 15px 0 0;

    padding: 0;

    font-size: 11.5px;
    line-height: 1.55;

    color: #4a4a4a;
  }

  /* =====================================================
     GRID
  ===================================================== */

  .col-grid {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    width: 100%;

    column-gap: 12px;
    row-gap: 26px;

    margin-top: 28px;
  }

  /* =====================================================
     CARD
  ===================================================== */

  .col-card {
    width: 100%;
    max-width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;
  }

  /* =====================================================
     IMAGE
  ===================================================== */

  .col-card-img-wrap {
    width: 100%;

    aspect-ratio: 1 / 0.82;

    margin: 0 0 10px;

    overflow: hidden;

    border-radius: 12px;
  }

  .col-card-img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    border-radius: 12px;
  }

  /* =====================================================
     TITLE
  ===================================================== */

  .col-card-title {
    width: 100%;

    margin: 0 0 6px;

    font-size: 11.5px;
    line-height: 1.3;

    font-weight: 600;

    letter-spacing: 0.1px;

    overflow-wrap: break-word;
  }

  /* =====================================================
     DESCRIPTION
  ===================================================== */

  .col-card-desc {
    width: 100%;

    margin: 0 0 10px;

    font-size: 9px;
    line-height: 1.5;

    color: #4a4a4a;

    flex-grow: 1;

    overflow-wrap: break-word;
  }

  /* =====================================================
     BUTTON
  ===================================================== */

  .col-card-btn {
    align-self: flex-start;

    padding: 7px 10px;

    border-radius: 50px;

    font-size: 8px;
    font-weight: 500;

    line-height: 1;

    gap: 4px;

    white-space: nowrap;
  }
}


/* =========================================================
   VERY SMALL MOBILE
   <= 360px
========================================================= */

@media (max-width: 360px) {

  .col-section {
    width: 100%;
    overflow: hidden;
  }

  .col-inner {
    width: 100%;
    max-width: 100%;

    margin: 0;

    /* top padding maintain */
    padding: 35px 14px 3px;

    box-sizing: border-box;
  }

  /* ---------- LABEL ---------- */

  .col-label {
    margin-bottom: 9px;

    font-size: 8px;
    letter-spacing: 0.4px;
  }

  /* ---------- DIVIDER ---------- */

  .col-top-divider {
    margin-bottom: 22px;
  }

  /* ---------- HEADING ---------- */

  .col-heading-row {
    position: relative;

    display: block;

    width: 100%;
  }

  .col-heading {
    width: 100%;

    padding-right: 55px;

    font-size: 20px;
    line-height: 1.25;
  }

  /* ---------- BADGE ---------- */

  .col-badge {
    position: absolute;

    top: -23px;
    right: 0;

    width: 49px;
    height: 48px;

    border-radius: 0 0 25px 25px;

    padding-bottom: 4px;

    font-size: 15px;
  }

  /* ---------- SUBTITLE ---------- */

  .col-subtitle {
    margin-top: 14px;

    font-size: 10.5px;
    line-height: 1.5;
  }

  /* ---------- GRID ---------- */

  .col-grid {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 10px;
    row-gap: 23px;

    margin-top: 25px;
  }

  /* ---------- CARD ---------- */

  .col-card {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  /* ---------- IMAGE ---------- */

  .col-card-img-wrap {
    width: 100%;

    aspect-ratio: 1 / 0.82;

    margin-bottom: 9px;

    overflow: hidden;

    border-radius: 10px;
  }

  .col-card-img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    border-radius: 10px;
  }

  /* ---------- TITLE ---------- */

  .col-card-title {
    margin-bottom: 5px;

    font-size: 10px;
    line-height: 1.25;
  }

  /* ---------- DESCRIPTION ---------- */

  .col-card-desc {
    margin-bottom: 9px;

    font-size: 8px;
    line-height: 1.45;
  }

  /* ---------- BUTTON ---------- */

  .col-card-btn {
    padding: 6px 8px;

    font-size: 7px;

    border-radius: 50px;

    gap: 3px;
  }
}
      `}</style>
    </section>
  );
}