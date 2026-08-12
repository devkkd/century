"use client";

import { useEffect, useRef, useState } from "react";

// ------------------------------------------------------------------
// Content — same as reference design
// ------------------------------------------------------------------
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I chose Century Overseas because I could not find any other company that offered all the tools I need under one roof – quality, reliability, on-time delivery. I also appreciate the large variety of their extended line of products. I can do all my purchases from a single source.",
    name: "Stuart",
    role: "Buyer, Haiti",
  },
  {
    id: 2,
    quote:
      "It is a pleasure to work with Century Overseas. They bring many years of experience in the packaging industry. Their knowledge of current market trends is excellent. They have maintained exceptionally high product standards, insightful customer service, and superior quality labels. Their commitment has been important for our growing success. Today we have a strong partnership built on trust.",
    name: "Laura",
    role: "Buyer, UK",
  },
  {
    id: 3,
    quote:
      "Excellent quality packaging. Excellent customer service. Great assistance with international shipments.",
    name: "Maxica",
    role: "Buyer, Mexico",
  },
  {
    id: 4,
    quote:
      "Reliable, premium, and genuinely responsive. Century Papers handles our annual stationery order with a care and communication standard that most domestic suppliers cannot match. The leather journals sell out every season.",
    name: "Margaret O'Brien",
    role: "Boutique Paper Goods Retailer, Dublin, Ireland",
  },
  {
    id: 5,
    quote:
      "I chose Century Overseas because I could not find any other company that offered all the tools I need under one roof – quality, reliability, on-time delivery. I also appreciate the large variety of their extended line of products. I can do all my purchases from a single source.",
    name: "Stuart",
    role: "Buyer, Haiti",
  },
];

// Duplicate the list so the strip can loop seamlessly
const LOOP_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const rafId = useRef(null);
  const [paused, setPaused] = useState(false);

  // ------------------------------------------------------------
  // Continuous auto-scroll (pauses on hover / touch)
  // ------------------------------------------------------------
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6; // px per frame

    const step = () => {
      if (!isPaused.current && track) {
        track.scrollLeft += speed;

        // half the track width = one full set of (non-duplicated) cards
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const pause = () => {
    isPaused.current = true;
    setPaused(true);
  };
  const resume = () => {
    isPaused.current = false;
    setPaused(false);
  };

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".testimonial-card");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p className="eyebrow">VERIFIED CLIENTS &middot; WORLDWIDE</p>
        <div className="eyebrow-divider" />

        <div className="title-row">
          <h2 className="title">
            What Our <em>Buyers</em> Say
          </h2>
          <button type="button" className="see-all-btn">
            See All <span className="arrow">&rarr;</span>
          </button>
        </div>
      </div>

      <div
        className={`track-wrapper ${paused ? "is-paused" : ""}`}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div className="track" ref={trackRef}>
          {LOOP_ITEMS.map((t, i) => (
            <article
              key={`${t.id}-${i}`}
              className={`testimonial-card ${
                i % 2 === 0 ? "card-even" : "card-odd"
              }`}
            >
              <svg
                className="quote-icon"
                width="44"
                height="32"
                viewBox="0 0 49 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 0C11.4 3.6 6.8 9.6 6.8 17.2c0 6.8 4.4 11.6 10 11.6 5.2 0 8.8-4 8.8-8.8 0-4.4-3.2-7.6-7.2-7.6-1.2 0-2 .2-2.8.6C16.4 8 19.6 4 25.2 1.6L18.2 0zM38.6 0c-6.8 3.6-11.4 9.6-11.4 17.2 0 6.8 4.4 11.6 10 11.6 5.2 0 8.8-4 8.8-8.8 0-4.4-3.2-7.6-7.2-7.6-1.2 0-2 .2-2.8.6C36.8 8 40 4 45.6 1.6L38.6 0z"
                  fill="#0F5D57"
                />
              </svg>

              <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>

              <p className="quote-author">
                &mdash; {t.name} &mdash; {t.role}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="nav-controls">
        {/* <button
          type="button"
          className="nav-btn"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path
              d="M9 1L2 8l7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
        {/* <button
          type="button"
          className="nav-btn"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path
              d="M1 1l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
      </div>

     <style jsx global>{`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,500;1,600&display=swap");
  @import url("https://api.fontshare.com/v2/css?f[]=mona-sans@400,500,600,700&display=swap");
`}</style>

      <style jsx>{`
        .testimonials-section {
          width: 100%;
          padding: 88px 72px 56px;
         
          font-family: "Mona Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          box-sizing: border-box;
        }

        .testimonials-header {
          margin-bottom: 32px;
        }

        .eyebrow {
          margin: 0 0 16px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #001212
        }

        .eyebrow-divider {
          height: 1px;
          width: 100%;
          background: #e4e7ec;
          margin-bottom: 24px;
        }

        .title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

    .title {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-size: clamp(26px, 2.4vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.8px;
  color: #004342;
  white-space: nowrap;
}

.title em {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 300;
  color: #004342;
}

        .see-all-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: none;
          border-radius: 999px;
          background: #0f5d57;
          color: #ffffff;
          font-family: "Mona Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.35s ease, transform 0.25s ease,
            box-shadow 0.35s ease;
        }

        .see-all-btn:hover {
          background: #004342;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 67, 66, 0.35);
        }

        .see-all-btn .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .see-all-btn:hover .arrow {
          transform: translateX(4px);
        }

        .track-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }

        .track::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          flex: 0 0 auto;
          width: 300px;
          border-radius: 18px;
          padding: 28px 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        /* Desktop: alternation starts with #ECFFFF */
        .card-even {
          background-color: #ecffff;
        }
        .card-odd {
          background-color: #ecffff;
        }

        .track-wrapper.is-paused .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .quote-icon {
          margin-bottom: 18px;
        }

        .quote-text {
          margin: 0 0 20px;
          font-size: 14px;
          line-height: 1.6;
          color: #344054;
          flex-grow: 1;
        }

        .quote-author {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: #0d2b28;
        }

        .nav-controls {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #98a2b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .nav-btn:hover {
          background: #004342;
          transform: scale(1.06);
        }

        /* ------------------------------------------------------------ */
        /* Tablet                                                       */
        /* ------------------------------------------------------------ */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 40px 28px 48px;
          }
        
          .testimonial-card {
            width: 240px;
          }
        }

        /* ------------------------------------------------------------ */
        /* Mobile — show exactly 2 cards, hide description, keep header */
        /* row (title + button) fixed side by side                     */
        /* ------------------------------------------------------------ */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 28px 16px 36px;
          }

          .eyebrow {
            font-size: 10px;
            margin-bottom: 12px;
          }

          .eyebrow-divider {
            margin-bottom: 18px;
          }

          .title-row {
            flex-wrap: nowrap;
            align-items: center;
            gap: 12px;
          }

          .title {
            font-size: 20px;
            white-space: nowrap;
          }

          .see-all-btn {
            padding: 9px 14px;
            font-size: 12px;
            gap: 6px;
          }

          .track {
            gap: 12px;
          }

          .testimonial-card {
            width: calc(50% - 6px);
            padding: 18px 14px;
            border-radius: 14px;
          }

          /* Mobile: alternation starts with white first, then #ECFFFF */
          .card-even {
            background-color: #ffffff;
          }
          .card-odd {
            background-color: #ecffff;
          }

          .quote-icon {
            width: 30px;
            height: 22px;
            margin-bottom: 10px;
          }
            .quote-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 10.5px;
  line-height: 1.45;
  margin: 0 0 12px;

  /* 2 lines ki fixed height */
  min-height: 30px;
  max-height: 30px;
}

          /* description hidden on mobile, only quote-icon + author shown */
         

          .quote-author {
            font-size: 11.5px;
            line-height: 1.4;
          }

          .nav-controls {
            margin-top: 20px;
            gap: 12px;
          }

          .nav-btn {
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 380px) {
          .title {
            font-size: 17px;
          }
          .see-all-btn {
            padding: 8px 10px;
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}