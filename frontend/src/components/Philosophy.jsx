"use client";

const philosophyItems = [
  {
    paragraphs: [
      "Century Papers was founded on a single conviction: that the world is better when things are made by hand.",
      "Not as nostalgia, not as a premium price point but because handmade objects carry a fundamentally different relationship between maker, material, and recipient.",
    ],
  },
  {
    paragraphs: [
      "Our workshop sits in Sanganer, Jaipur a town whose identity has been shaped by its makers for generations. We employ skilled craftspeople from the Kagzi community, whose intuitive knowledge of cotton pulp, natural dye, and leather behaviour cannot be written into a machine instruction. It is lived knowledge, passed from hand to hand for over four centuries.",
    ],
  },
  {
    paragraphs: [
      "We serve retailers, studios, designers, publishers, and individual collectors across more than 30 countries. Our product range spans handmade and seed-embedded papers, FSC-certified pulp goods, leather journals and bags, decorative paper objects, seasonal ornaments, and custom commissions.",
    ],
  },
  {
    paragraphs: [
      "We do not use chemical bleach in our paper. We source our cotton fibre from post-consumer textile waste. We ship in recycled and biodegradable packaging. Sustainability is not a feature we added it is the oldest characteristic of what we do.",
    ],
  },
];

function LeafIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="phi-icon"
    >
      {/* upper sweeping petal */}
      <path
        d="M9 19
           C20 25, 36 26, 47 17
           C41 24, 35 29, 29 31"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* middle left petal */}
      <path
        d="M3 28
           C14 32, 23 34, 31 30
           C24 29, 17 27, 10 24"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* center curved stem */}
      <path
        d="M31 29
           C29 38, 29 46, 33 56"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* right inner stem */}
      <path
        d="M34 28
           C34 38, 37 46, 42 52"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* right outer stem */}
      <path
        d="M38 25
           C37 34, 40 40, 47 45"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* small center connection */}
      <path
        d="M26 30
           C31 29, 35 26, 39 22"
        stroke="#004342"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Philosophy() {
  return (
    <section className="phi-section">
      <div className="phi-inner">
        <p className="phi-label">Our Philosophy</p>
        <div className="phi-top-divider" />

        <div className="phi-top-grid">
          <h2 className="phi-heading">
            We Don&apos;t <em>Make</em> Products,
            <br />
            We <em>Make</em> Evidence of Craft
          </h2>
          <p className="phi-intro">
            Every item that leaves our Sanganer workshop carries the
            irreducible mark of a human hand a slight variance in texture, a
            warmth in the fibres, a breathing quality that industrial
            production has never achieved and never will.
          </p>
        </div>

        <div className="phi-grid">
          {philosophyItems.map((item, i) => (
            <div className="phi-item" key={i}>
              <LeafIcon />
              <div className="phi-item-text">
                {item.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .phi-section {
          width: 100%;
          box-sizing: border-box;
        }

        .phi-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          margin-bottom: 30px;
          box-sizing: border-box;
        }

        .phi-label {
          font-family: "Mona Sans", sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 18px;
        }

        .phi-top-divider {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          margin-bottom: 48px;
        }

        /* ---------- TOP GRID ---------- */
        .phi-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 64px;
        }

        .phi-heading {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 34px;
          line-height: 1.4;
          color: #004342;
          margin: 0;
        }

        .phi-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .phi-intro {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          align-self: center;
        }

        /* ---------- BOTTOM GRID ---------- */
        .phi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .phi-item {
          padding: 0 32px;
          box-sizing: border-box;
          border-left: 1px solid #d9d9d9;
        }

        .phi-item:first-child {
          padding-left: 0;
          border-left: none;
        }

        .phi-item:last-child {
          padding-right: 0;
        }

        .phi-icon {
          margin-bottom: 20px;
          display: block;
        }

        .phi-item-text p {
          font-family: "Mona Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: #1a1a1a;
          margin: 0 0 16px;
        }

        .phi-item-text p:last-child {
          margin-bottom: 0;
        }

        /* ---------- MOBILE ---------- */
/* =========================================================
   TABLET
   769px - 1024px
========================================================= */

@media (min-width: 769px) and (max-width: 1024px) {
  .phi-inner {
    max-width: 100%;
    padding: 0 20px;
  }

  .phi-label {
    font-size: 11px;
    margin-bottom: 16px;
  }

  .phi-top-divider {
    margin-bottom: 38px;
  }

  /* ---------- TOP ---------- */

  .phi-top-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }

  .phi-heading {
    font-size: 30px;
    line-height: 1.35;
  }

  .phi-intro {
    font-size: 14px;
    line-height: 1.65;
  }

  /* ---------- ITEMS ---------- */

  .phi-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }

  .phi-item {
    padding: 0 28px;
    border-left: 1px solid #d9d9d9;
  }

  .phi-item:nth-child(odd) {
    padding-left: 0;
    border-left: none;
  }

  .phi-item:nth-child(even) {
    padding-right: 0;
  }

  .phi-item:nth-child(-n + 2) {
    padding-bottom: 36px;
    border-bottom: 1px solid #d9d9d9;
  }

  .phi-item:nth-child(n + 3) {
    padding-top: 4px;
  }

  .phi-icon {
    width: 26px;
    height: 26px;
    margin-bottom: 16px;
  }

  .phi-item-text p {
    font-size: 13px;
    line-height: 1.65;
    margin-bottom: 14px;
  }
}


/* =========================================================
   MOBILE
   481px - 768px
========================================================= */

@media (min-width: 481px) and (max-width: 768px) {
  .phi-section {
    width: 100%;
    overflow: hidden;
  }

  .phi-inner {
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    margin: 0;
    box-sizing: border-box;
  }

  /* ---------- LABEL ---------- */

  .phi-label {
    font-size: 10px;
    line-height: 1.3;
    letter-spacing: 0.5px;
    margin: 0 0 12px;
  }

  .phi-top-divider {
    width: 100%;
    margin-bottom: 28px;
  }

  /* =====================================================
     HEADING + INTRO
  ===================================================== */

  .phi-top-grid {
    display: flex;
    flex-direction: column;
    gap: 18px;

    width: 100%;
    margin-bottom: 38px;
  }

  .phi-heading {
    width: 100%;
    margin: 0;

    font-size: 27px;
    line-height: 1.3;

    overflow-wrap: break-word;
  }

  .phi-heading br {
    display: none;
  }

  .phi-heading em {
    font-style: italic;
    font-weight: 500;
  }

  .phi-intro {
    width: 100%;
    margin: 0;

    font-size: 13px;
    line-height: 1.65;

    color: #4a4a4a;
  }

  /* =====================================================
     PHILOSOPHY ITEMS
  ===================================================== */

  .phi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;

    column-gap: 0;
    row-gap: 0;
  }

  .phi-item {
    width: 100%;

    padding: 0 18px 28px;

    box-sizing: border-box;

    border-left: 1px solid #d9d9d9;
  }

  /* LEFT CARDS */

  .phi-item:nth-child(odd) {
    padding-left: 0;
    padding-right: 18px;

    border-left: none;
  }

  /* RIGHT CARDS */

  .phi-item:nth-child(even) {
    padding-left: 18px;
    padding-right: 0;
  }

  /* TOP ROW */

  .phi-item:nth-child(1),
  .phi-item:nth-child(2) {
    border-bottom: 1px solid #d9d9d9;
  }

  /* BOTTOM ROW */

  .phi-item:nth-child(3),
  .phi-item:nth-child(4) {
    padding-top: 28px;
    padding-bottom: 0;
  }

  /* ---------- ICON ---------- */

  .phi-icon {
    display: block;

    width: 23px;
    height: 23px;

    margin: 0 0 14px;
  }

  /* ---------- ITEM TEXT ---------- */

  .phi-item-text {
    width: 100%;
  }

  .phi-item-text p {
    width: 100%;

    margin: 0 0 12px;

    font-size: 12px;
    line-height: 1.6;

    color: #1a1a1a;

    overflow-wrap: break-word;
  }

  .phi-item-text p:last-child {
    margin-bottom: 0;
  }

  /* IMPORTANT:
     paragraph hide/truncate nahi hoga
  */

  .phi-item-text p:not(:first-child) {
    display: block;
  }

  .phi-item-text p:first-child {
    display: block;

    overflow: visible;

    white-space: normal;

    text-overflow: unset;

    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }
}


/* =========================================================
   MOBILE
   361px - 480px
========================================================= */

@media (min-width: 361px) and (max-width: 480px) {
  .phi-section {
    width: 100%;
    overflow: hidden;
  }

  .phi-inner {
    width: 100%;
    max-width: 100%;

    margin: 0;

    padding: 0 16px;

    box-sizing: border-box;
  }

  /* ---------- LABEL ---------- */

  .phi-label {
    font-size: 9px;
    line-height: 1.3;

    letter-spacing: 0.5px;

    margin: 0 0 11px;
  }

  .phi-top-divider {
    width: 100%;
    height: 1px;

    margin-bottom: 25px;
  }

  /* =====================================================
     HEADING
  ===================================================== */

  .phi-top-grid {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    margin-bottom: 32px;
  }

  .phi-heading {
    width: 100%;

    margin: 0;

    font-size: 24px;
    line-height: 1.28;
  }

  /* desktop forced line-break remove */

  .phi-heading br {
    display: none;
  }

  .phi-intro {
    width: 100%;

    margin: 0;

    font-size: 12px;
    line-height: 1.6;
  }

  /* =====================================================
     CARDS
  ===================================================== */

  .phi-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    width: 100%;

    column-gap: 0;
    row-gap: 0;
  }

  .phi-item {
    width: 100%;

    min-width: 0;

    box-sizing: border-box;

    border-left: 1px solid #d9d9d9;

    padding: 0 13px 24px;
  }

  /* LEFT */

  .phi-item:nth-child(odd) {
    padding-left: 0;
    padding-right: 13px;

    border-left: none;
  }

  /* RIGHT */

  .phi-item:nth-child(even) {
    padding-left: 13px;
    padding-right: 0;
  }

  /* horizontal divider */

  .phi-item:nth-child(1),
  .phi-item:nth-child(2) {
    border-bottom: 1px solid #d9d9d9;
  }

  /* second row */

  .phi-item:nth-child(3),
  .phi-item:nth-child(4) {
    padding-top: 24px;
    padding-bottom: 0;
  }

  /* ---------- ICON ---------- */

  .phi-icon {
    display: block;

    width: 21px;
    height: 21px;

    margin: 0 0 12px;
  }

  /* ---------- TEXT ---------- */

  .phi-item-text {
    width: 100%;

    min-width: 0;
  }

  .phi-item-text p {
    width: 100%;

    margin: 0 0 10px;

    font-size: 10.5px;
    line-height: 1.55;

    overflow-wrap: break-word;

    word-break: normal;
  }

  .phi-item-text p:last-child {
    margin-bottom: 0;
  }

  /* RESET OLD TRUNCATION */

  .phi-item-text p:not(:first-child) {
    display: block;
  }

  .phi-item-text p:first-child {
    display: block;

    white-space: normal;

    overflow: visible;

    text-overflow: unset;

    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }
}


/* =========================================================
   VERY SMALL MOBILE
   <= 360px
========================================================= */

@media (max-width: 360px) {
  .phi-section {
    width: 100%;

    overflow: hidden;
  }

  .phi-inner {
    width: 100%;
    max-width: 100%;

    margin: 0;

    padding: 0 14px;

    box-sizing: border-box;
  }

  /* ---------- LABEL ---------- */

  .phi-label {
    margin-bottom: 10px;

    font-size: 8px;
    letter-spacing: 0.4px;
  }

  .phi-top-divider {
    margin-bottom: 22px;
  }

  /* =====================================================
     TOP
  ===================================================== */

  .phi-top-grid {
    display: flex;

    flex-direction: column;

    width: 100%;

    gap: 14px;

    margin-bottom: 28px;
  }

  .phi-heading {
    width: 100%;

    margin: 0;

    font-size: 22px;
    line-height: 1.25;
  }

  .phi-heading br {
    display: none;
  }

  .phi-intro {
    width: 100%;

    margin: 0;

    font-size: 11px;
    line-height: 1.55;
  }

  /* =====================================================
     ITEMS
  ===================================================== */

  .phi-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    width: 100%;

    column-gap: 0;
    row-gap: 0;
  }

  .phi-item {
    width: 100%;

    min-width: 0;

    box-sizing: border-box;

    padding: 0 10px 21px;

    border-left: 1px solid #d9d9d9;
  }

  .phi-item:nth-child(odd) {
    padding-left: 0;
    padding-right: 10px;

    border-left: none;
  }

  .phi-item:nth-child(even) {
    padding-left: 10px;
    padding-right: 0;
  }

  .phi-item:nth-child(1),
  .phi-item:nth-child(2) {
    border-bottom: 1px solid #d9d9d9;
  }

  .phi-item:nth-child(3),
  .phi-item:nth-child(4) {
    padding-top: 21px;
    padding-bottom: 0;
  }

  /* ---------- ICON ---------- */

  .phi-icon {
    width: 19px;
    height: 19px;

    margin-bottom: 10px;
  }

  /* ---------- TEXT ---------- */

  .phi-item-text {
    width: 100%;

    min-width: 0;
  }

  .phi-item-text p {
    width: 100%;

    margin: 0 0 9px;

    font-size: 9.5px;
    line-height: 1.5;

    overflow-wrap: break-word;
  }

  .phi-item-text p:last-child {
    margin-bottom: 0;
  }

  .phi-item-text p:not(:first-child) {
    display: block;
  }

  .phi-item-text p:first-child {
    display: block;

    white-space: normal;

    overflow: visible;

    text-overflow: unset;

    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }
}
      `}</style>
    </section>
  );
}