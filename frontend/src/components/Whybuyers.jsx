"use client";

const reasons = [
  {
    number: "01",
    title: "Pure Cotton & Natural Fibre",
    description:
      "Every sheet we make is tree-free. Our base material is post-consumer and plant fibre materials that produce a stronger, more durable, more beautiful sheet than wood pulp, and carry a fraction of the environmental burden.",
  },
  {
    number: "02",
    title: "FSC Certified Sourcing",
    description:
      "For any component that falls within FSC scope, we source only certified material and maintain chain-of-custody documentation. Our certification is audited annually and available on request we do not make claims we cannot substantiate.",
  },
  {
    number: "03",
    title: "Consistent Export Quality",
    description:
      "We have shipped to buyers across North America, Australasia, and Southeast Asia. Each order is packed and documented to meet international import standards. Our record on delivery accuracy and damage rates is the reason most clients become repeat buyers.",
  },
  {
    number: "04",
    title: "Full Custom Capability",
    description:
      "Colour, texture, weight, size, seed embedding, embossing, screen printing, foil we accommodate specification-level customisation across most product categories. Minimum order quantities are discussed per project. Samples are always available before commitment.",
  },
  {
    number: "05",
    title: "Artisan Welfare First",
    description:
      "Our craftspeople are paid above minimal benchmarks and work in conditions we would be comfortable showing any buyer. Fair-practice sourcing is not an add-on at Century Papers it is a precondition of how we operate, and has been since our founding.",
  },
  {
    number: "06",
    title: "Responsive Direct Trade",
    description:
      "No agents, no intermediaries. You correspond directly with the workshop, which means faster sampling, clearer specification, and a pricing structure that reflects actual production costs rather than a chain of margins. Most enquiries receive a substantive response within one business day.",
  },
];

export default function WhyBuyers() {
  return (
    <section className="wby-section">
      <div className="wby-inner">
        <p className="wby-label">Worldwide</p>
        <div className="wby-top-divider" />

        <div className="wby-heading-row">
          <h2 className="wby-heading">
            Why Buyers in <em>30+ Countries</em>
            <br />
            Choose Century Papers
          </h2>
          <p className="wby-subtitle">
            We do not compete on price with industrial producers. We
            compete on authenticity, consistency, and the kind of
            relationship a buyer can only have with a maker not a
            manufacturer.
          </p>
        </div>

        <div className="wby-grid-wrap">
          <div className="wby-divider-line" />
          <div className="wby-grid">
            {reasons.map((item) => (
              <div className="wby-card" key={item.number}>
                <p className="wby-card-number">{item.number}&middot;</p>
                <h3 className="wby-card-title">{item.title}</h3>
                <p className="wby-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .wby-section {
          width: 100%;
          box-sizing: border-box;
        }

        .wby-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 32px 0;
          
          box-sizing: border-box;
        }

        .wby-label {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 18px;
        }

        .wby-top-divider {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          margin-bottom: 36px;
        }

        .wby-heading-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 48px;
        }

        .wby-heading {
          font-family: "Playfair Display", serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.35;
          color: #004342;
          margin: 0;
        }

        .wby-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .wby-subtitle {
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          align-self: center;
        }

        /* ---------- GRID ---------- */
        .wby-grid-wrap {
          position: relative;
        }

       

        .wby-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .wby-card {
          padding: 32px 28px;
          box-sizing: border-box;
        }

        .wby-card:nth-child(odd) {
          background: #ecffff;
        }

        .wby-card:nth-child(even) {
          background: #ffffff;
        }

        .wby-card-number {
          font-family: "Mona Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #017574;
          margin: 0 0 12px;
        }

        .wby-card-title {
          font-family: "Mona Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #004342;
          margin: 0 0 14px;
          line-height: 1.35;
        }

        .wby-card-desc {
          font-family: "Mona Sans", sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: #4a4a4a;
          margin: 0;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 768px) {
          .wby-inner {
            padding: 20px 20px;
          }

          .wby-label {
            font-size: 11px;
            margin-bottom: 14px;
          }

          .wby-top-divider {
            margin-bottom: 24px;
          }

          .wby-heading-row {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 28px;
          }

          .wby-heading {
            font-size: 22px;
          }

          .wby-subtitle {
            font-size: 13px;
          }

          .wby-grid {
            grid-template-columns: 1fr 1fr;
          }

          .wby-card {
            padding: 20px 16px;
          }

          .wby-card-number {
            font-size: 12px;
            margin-bottom: 8px;
          }

          .wby-card-title {
            font-size: 13.5px;
            margin-bottom: 0;
          }

          /* description hidden on mobile */
          .wby-card-desc {
            display: none;
          }
        }
          @media (max-width: 768px) {
  .wby-inner {
    padding: 20px 20px;
  }

  .wby-label {
    font-size: 11px;
    margin-bottom: 14px;
  }

  .wby-top-divider {
    margin-bottom: 24px;
  }

  .wby-heading-row {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 28px;
  }

  .wby-heading {
    font-size: 22px;
    line-height: 1.35;
  }

  .wby-subtitle {
    font-size: 13px;
    line-height: 1.6;
  }

  /* =========================
     2 COLUMN GRID
  ========================= */

  .wby-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .wby-card {
    padding: 20px 16px;
    min-height: 115px;
    box-sizing: border-box;
  }

  /* =========================
     RESET DESKTOP COLORS
  ========================= */

  .wby-card:nth-child(odd),
  .wby-card:nth-child(even) {
    background: #ffffff;
  }

  /* =========================
     CHECKERBOARD PATTERN

     01 COLOR  | 02 WHITE
     03 WHITE  | 04 COLOR
     05 COLOR  | 06 WHITE
  ========================= */

  .wby-card:nth-child(1),
  .wby-card:nth-child(4),
  .wby-card:nth-child(5) {
    background: #ecffff;
  }

  .wby-card:nth-child(2),
  .wby-card:nth-child(3),
  .wby-card:nth-child(6) {
    background: #ffffff;
  }

  /* =========================
     NUMBER
  ========================= */

  .wby-card-number {
    font-size: 12px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  /* =========================
     TITLE
  ========================= */

  .wby-card-title {
    font-size: 13.5px;
    line-height: 1.35;
    margin: 0;
  }

  /* =========================
     DESCRIPTION HIDE
  ========================= */

  .wby-card-desc {
    display: none;
  }
}
      `}</style>
    </section>
  );
}