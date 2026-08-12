"use client";

const craftStages = [
  {
    image: "/images/home/11.png",
    title: "Fibre Sourcing & Selection",
    description:
      "Post-consumer cotton textile waste hosiery offcuts, fabric remnants, clean plant fibres. Nothing virgin. Nothing synthetic. The quality of raw material determines the character of the finished sheet.",
    tag: "Zero-Waste Input",
  },
  {
    image: "/images/home/12.png",
    title: "Pulping & Colour",
    description:
      "Cleaned fibres are soaked, beaten to a fine slurry, and blended with natural mineral pigments or botanical dyes for coloured papers. No optical brighteners, no chemical bleach colour that mellows beautifully with age.",
    tag: "Natural Pigment Only",
  },
  {
    image: "/images/home/13.png",
    title: "Mould & Deckle Forming",
    description:
      "A skilled artisan submerges the mould into the vat, lifts it level, and holds steady while the water drains. This moment the lift and the drain is entirely human. No robot performs it. The deckled edge is not decorative; it is the direct consequence of this step.",
    tag: "Hand-Formed Sheets",
  },
  {
    image: "/images/home/14.png",
    title: "Sun Drying & Pressing",
    description:
      "Couched sheets are stacked between felts and cold-pressed to remove excess water, then transferred to sloped boards and sun-dried in open air. Sanganer's dry heat and strong light produce a natural, surface-hardened finish unique to this geography.",
    tag: "Solar-Dried, Zero Energy",
  },
  {
    image: "/images/home/15.png",
    title: "Finishing & Quality Check",
    description:
      "Each sheet is inspected by hand, calendered if required, and sized for writing or printing use. Rejected sheets are repulped nothing goes to waste. Only sheets that meet our standard leave the workshop.",
    tag: "100% Hand-Inspected",
  },
];

export default function OurCraft() {
  return (
    <section className="crf-section">
      <div className="crf-inner">
        <p className="crf-label">Our Craft</p>
        <div className="crf-top-divider" />

        <div className="crf-heading-row">
          <h2 className="crf-heading">
            Five <em>Stages,</em> No Shortcuts
          </h2>
          <button type="button" className="crf-link-btn">
            See All Our Craft <span>→</span>
          </button>
        </div>

        <div className="crf-grid">
          {craftStages.map((stage, i) => (
            <div className="crf-card" key={stage.title}>
              <div className="crf-card-img-wrap">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="crf-card-img"
                />
              </div>
              <h3 className="crf-card-title">{stage.title}</h3>
              <p className="crf-card-desc">{stage.description}</p>
              <div className="crf-tag">{stage.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .crf-section {
          width: 100%;
          box-sizing: border-box;
        }

        .crf-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .crf-label {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 18px;
        }

        .crf-top-divider {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          margin-bottom: 36px;
        }

        .crf-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
        }

        .crf-heading {
          font-family: "Playfair Display", serif;
          font-weight: 600;
          font-size: 34px;
          line-height: 1.3;
          color: #004342;
          margin: 0;
        }

        .crf-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .crf-link-btn {
          flex-shrink: 0;
          font-family: "Mona Sans", sans-serif;
          background: none;
          border: none;
          color: #004342;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          white-space: nowrap;
        }

        /* ---------- GRID ---------- */
        .crf-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .crf-card {
          display: flex;
          flex-direction: column;
          padding: 0 24px;
          box-sizing: border-box;
          border-left: 1px solid #d9d9d9;
        }

        .crf-card:first-child {
          padding-left: 0;
          border-left: none;
        }

        .crf-card:last-child {
          padding-right: 0;
        }

        .crf-card-img-wrap {
  width: 230px;
  height: 235px;
  overflow: hidden;
  border-radius: 18px;
  margin-bottom: 24px;
  flex-shrink: 0;
}

.crf-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

        .crf-card-title {
          font-family: "Mona Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
          color: #004342;
          margin: 0 0 16px;
        }

        .crf-card-desc {
          font-family: "Mona Sans", sans-serif;
          font-size: 12px;
          line-height: 1.65;
          color: #4a4a4a;
          margin: 0 0 24px;
          flex-grow: 1;
        }

        .crf-tag {
          font-family: "Mona Sans", sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          color: #004342;
          background: #ecffff;
          padding: 12px 16px;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
        }

       /* =========================================================
   MOBILE RESPONSIVE
   0px - 768px
========================================================= */

@media (max-width: 768px) {

  /* ================= SECTION ================= */

  .crf-section {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .crf-inner {
    width: 100%;
    max-width: 100%;
    margin: 0;

    /* top | left-right | bottom */
    padding: 40px 20px 25px;

    box-sizing: border-box;
  }


  /* ================= LABEL ================= */

  .crf-label {
    font-family: "Mona Sans", sans-serif;

    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;

    letter-spacing: 0.5px;
    text-transform: uppercase;

    margin: 0 0 12px;
  }


  /* ================= TOP LINE ================= */

  .crf-top-divider {
    width: 100%;
    height: 1px;

    background: #d9d9d9;

    margin: 0 0 25px;
  }


  /* ================= HEADING ROW ================= */

  .crf-heading-row {
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: flex-end;
    justify-content: space-between;

    gap: 15px;

    margin: 0 0 28px;
  }


  /* ================= MAIN HEADING ================= */

  .crf-heading {
    font-family: "Playfair Display", serif;

    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;

    color: #004342;

    margin: 0;

    min-width: 0;
  }

  .crf-heading em {
    font-style: italic;
    font-weight: 500;
  }


  /* ================= SEE ALL ================= */

  .crf-link-btn {
    flex-shrink: 0;

    font-family: "Mona Sans", sans-serif;

    font-size: 10px;
    font-weight: 500;

    color: #004342;

    background: transparent;
    border: none;

    padding: 0 0 3px;

    display: inline-flex;
    align-items: center;

    gap: 4px;

    white-space: nowrap;

    cursor: pointer;
  }


  /* =====================================================
     GRID
  ===================================================== */

  .crf-grid {
    width: 100%;

    display: grid;

    /* 2 CARDS PER ROW */
    grid-template-columns: repeat(2, minmax(0, 1fr));

    column-gap: 0;
    row-gap: 28px;

    margin: 0;
  }


  /* =====================================================
     CARD
  ===================================================== */

  .crf-card {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    padding: 0 12px;

    border-left: 1px solid #d9d9d9;
  }


  /* LEFT SIDE CARDS */

  .crf-card:nth-child(odd) {
    padding-left: 0;
    padding-right: 12px;

    border-left: none;
  }


  /* RIGHT SIDE CARDS */

  .crf-card:nth-child(even) {
    padding-left: 12px;
    padding-right: 0;

    border-left: 1px solid #d9d9d9;
  }


  /* =====================================================
     IMAGE WRAPPER
  ===================================================== */

  .crf-card-img-wrap {
    /*
      FIXED IMAGE SIZE
    */

    width: 100%;
    height: 180px;

    margin: 0 0 12px;

    overflow: hidden;

    border-radius: 12px;

    flex-shrink: 0;

    box-sizing: border-box;
  }


  /* ================= IMAGE ================= */

  .crf-card-img {
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

  .crf-card-title {
    width: 100%;

    font-family: "Mona Sans", sans-serif;

    font-size: 13px;
    font-weight: 600;
    line-height: 1.35;

    color: #004342;

    margin: 0 0 11px;

    /*
      Heading ki jagah same rakhega,
      taaki tag upar-niche na ho.
    */
    min-height: 36px;

    overflow-wrap: break-word;
  }


  /* =====================================================
     DESCRIPTION HIDE
  ===================================================== */

  .crf-card-desc {
    display: none;
  }


  /* =====================================================
     TAG
  ===================================================== */

  .crf-tag {
    width: 100%;

    margin-top: auto;

    padding: 8px 8px;

    box-sizing: border-box;

    background: #ecffff;

    border-radius: 5px;

    font-family: "Mona Sans", sans-serif;

    font-size: 9px;
    font-weight: 500;
    line-height: 1.3;

    color: #004342;

    text-align: left;
  }


  /* =====================================================
     LAST CARD
     5th card same rahega — left column
  ===================================================== */

  .crf-card:last-child {
    width: 100%;

    padding-left: 0;
    padding-right: 12px;

    border-left: none;
  }
}


/* =========================================================
   NORMAL MOBILE
   361px - 480px
========================================================= */

@media (min-width: 361px) and (max-width: 480px) {

  .crf-inner {
    padding: 35px 16px 20px;
  }


  /* ---------- LABEL ---------- */

  .crf-label {
    font-size: 9px;

    margin-bottom: 10px;
  }


  /* ---------- DIVIDER ---------- */

  .crf-top-divider {
    margin-bottom: 22px;
  }


  /* ---------- HEADING ROW ---------- */

  .crf-heading-row {
    align-items: flex-end;

    gap: 10px;

    margin-bottom: 24px;
  }


  /* ---------- HEADING ---------- */

  .crf-heading {
    font-size: 21px;
    line-height: 1.25;
  }


  /* ---------- SEE ALL ---------- */

  .crf-link-btn {
    font-size: 8.5px;

    gap: 3px;

    padding-bottom: 2px;
  }


  /* ---------- GRID ---------- */

  .crf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    row-gap: 24px;
  }


  /* ---------- CARD ---------- */

  .crf-card {
    padding: 0 9px;
  }

  .crf-card:nth-child(odd) {
    padding-left: 0;
    padding-right: 9px;

    border-left: none;
  }

  .crf-card:nth-child(even) {
    padding-left: 9px;
    padding-right: 0;

    border-left: 1px solid #d9d9d9;
  }


  /* =====================================================
     FIXED IMAGE
  ===================================================== */

  .crf-card-img-wrap {
    width: 100%;

    /*
      FIXED HEIGHT
    */
    height: 155px;

    margin-bottom: 10px;

    border-radius: 10px;
  }

  .crf-card-img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    border-radius: 10px;
  }


  /* =====================================================
     ONLY HEADING
  ===================================================== */

  .crf-card-title {
    width: 100%;

    font-size: 11px;
    line-height: 1.3;

    margin: 0 0 9px;

    min-height: 30px;
  }


  /* DESCRIPTION COMPLETELY HIDE */

  .crf-card-desc {
    display: none;
  }


  /* ---------- TAG ---------- */

  .crf-tag {
    width: 100%;

    margin-top: auto;

    padding: 7px 6px;

    font-size: 8px;
    line-height: 1.25;

    border-radius: 4px;
  }


  /* =====================================================
     LAST / 5TH CARD
  ===================================================== */

  .crf-card:last-child {
    width: 100%;

    padding-left: 0;
    padding-right: 9px;

    border-left: none;
  }
}


/* =========================================================
   VERY SMALL MOBILE
   <= 360px
========================================================= */

@media (max-width: 360px) {

  .crf-inner {
    padding: 30px 14px 18px;
  }


  /* ---------- LABEL ---------- */

  .crf-label {
    font-size: 8px;

    margin-bottom: 9px;
  }


  /* ---------- LINE ---------- */

  .crf-top-divider {
    margin-bottom: 20px;
  }


  /* ---------- HEADING ---------- */

  .crf-heading-row {
    gap: 8px;

    margin-bottom: 22px;
  }

  .crf-heading {
    font-size: 19px;
    line-height: 1.22;
  }

  .crf-link-btn {
    font-size: 7.5px;

    gap: 2px;
  }


  /* ---------- GRID ---------- */

  .crf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    row-gap: 21px;
  }


  /* ---------- CARD ---------- */

  .crf-card {
    padding: 0 8px;
  }

  .crf-card:nth-child(odd) {
    padding-left: 0;
    padding-right: 8px;

    border-left: none;
  }

  .crf-card:nth-child(even) {
    padding-left: 8px;
    padding-right: 0;

    border-left: 1px solid #d9d9d9;
  }


  /* =====================================================
     FIXED IMAGE
  ===================================================== */

  .crf-card-img-wrap {
    width: 100%;
    height: 135px;

    margin-bottom: 9px;

    border-radius: 9px;
  }

  .crf-card-img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    border-radius: 9px;
  }


  /* ---------- TITLE ---------- */

  .crf-card-title {
    font-size: 10px;
    line-height: 1.3;

    min-height: 27px;

    margin-bottom: 8px;
  }


  /* ---------- DESCRIPTION HIDE ---------- */

  .crf-card-desc {
    display: none;
  }


  /* ---------- TAG ---------- */

  .crf-tag {
    padding: 6px 5px;

    font-size: 7px;

    border-radius: 4px;
  }


  /* ---------- LAST CARD ---------- */

  .crf-card:last-child {
    width: 100%;

    padding-left: 0;
    padding-right: 8px;

    border-left: none;
  }
}
      `}</style>
    </section>
  );
}