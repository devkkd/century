"use client";

import { useState } from "react";

const heroImages = [
  "/images/home/2.png",
  "/images/home/2.png",
  "/images/home/2.png"
];

const leatherImages = [
  "/images/home/3.png",
  "/images/home/3.png",
  "/images/home/3.png"
];

const stats = [
  { num: "30+", label: "Export Markets" },
  { num: "FSC", label: "Certified" },
  { num: "100%", label: "Handmade" },
  { num: "ECO", label: "Responsible Manufacturing" },
  { num: "Since 1990", label: "Sustainably Made" }
];

const categoriesLeft = [
  { label: "Handmade Paper", active: true },
  { label: "Antique & Vintage Paper" },
  { label: "Plantable Seed Paper" },
  { label: "Paper Honeycomb Décor" },
  { label: "Lampshades" }
];

const categoriesRight = [
  { label: "Leather Journals" },
  { label: "Leather Bags" },
  { label: "Gifting & Packaging" },
  { label: "Plantable Stationery" },
  { label: "See All Paper →", link: true }
];

export default function HeroSection() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [leatherIndex, setLeatherIndex] = useState(0);

  const nextHero = () => setHeroIndex(prev => (prev + 1) % heroImages.length);
  const prevHero = () =>
    setHeroIndex(prev => (prev - 1 + heroImages.length) % heroImages.length);

  const nextLeather = () =>
    setLeatherIndex(prev => (prev + 1) % leatherImages.length);
  const prevLeather = () =>
    setLeatherIndex(
      prev => (prev - 1 + leatherImages.length) % leatherImages.length
    );

  return (
    <>
      <section className="hop-hero">
        <div className="hop-hero-inner">
          {/* TOP ROW */}
          <div className="hop-hero-top">
            <div className="hop-hero-left">
              <div className="hop-heading-row">
                <h1 className="hop-heading">
                  The Touch <em>that</em> No Machine Has Ever Replicated
                </h1>

                <div className="hop-badge">
                  <img
                    src="/images/home/1.png"
                    alt="Century Overseas Papers"
                    className="hop-badge-image"
                  />
                </div>
              </div>

              <p className="hop-desc">
                We Turn Raw Cotton Fibre, Botanical Pulp, And Artisan Skill Into
                Objects Of Lasting Worth Paper That Breathes, Leather That Ages
                Beautifully, And Goods That Carry A Maker&apos;s Mark No Factory
                Will Ever Stamp.
              </p>

              <div className="hop-btn-row">
                <button type="button" className="hop-btn-primary">
                  Explore the Collection <span>→</span>
                </button>
                <button type="button" className="hop-btn-text">
                  See How It&apos;s Made <span>→</span>
                </button>
              </div>
            </div>

            <div className="hop-hero-right">
              <div className="hop-carousel">
                <img
                  src={heroImages[heroIndex]}
                  alt="Handmade paper craft"
                  className="hop-carousel-img"
                />
                <button
                  type="button"
                  aria-label="Previous slide"
                  className="hop-arrow hop-arrow-left"
                  onClick={prevHero}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  className="hop-arrow hop-arrow-right"
                  onClick={nextHero}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="hop-hero-bottom">
            <div className="hop-bottom-left">
              <div className="hop-leather-row">
                <div className="hop-leather-carousel">
                  <img
                    src={leatherImages[leatherIndex]}
                    alt="Handmade leather journals"
                    className="hop-leather-img"
                  />
                  <button
                    type="button"
                    aria-label="Previous"
                    className="hop-arrow hop-arrow-left hop-arrow-sm"
                    onClick={prevLeather}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    className="hop-arrow hop-arrow-right hop-arrow-sm"
                    onClick={nextLeather}
                  >
                    ›
                  </button>
                </div>

                <ul className="hop-stats">
                  {stats.map(s => (
                    <li key={s.label}>
                      <span className="hop-stat-num">{s.num}</span>{" "}
                      <span className="hop-stat-label">{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="hop-handmade-text">handmade paper</p>
            </div>

            <div className="hop-bottom-right">
              <div className="hop-categories">
                <ul className="hop-cat-col">
                  {categoriesLeft.map(c => (
                    <li
                      key={c.label}
                      className={c.active ? "hop-cat-active" : ""}
                    >
                      {c.label}
                    </li>
                  ))}
                </ul>
                <ul className="hop-cat-col">
                  {categoriesRight.map(c => (
                    <li key={c.label} className={c.link ? "hop-cat-link" : ""}>
                      {c.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hop-quote">
        <div className="hop-quote-inner">
          <p className="hop-quote-text">
            &quot;A sheet of our paper holds the memory of <em>every</em> hand
            that shaped it. We think that matters not just{" "}
            <em>aesthetically</em>, but ethically.&quot;
          </p>
          <p className="hop-quote-author">— Century Papers, Sanganer</p>
        </div>
      </section>

      <style jsx>{`
        .hop-hero {
          box-sizing: border-box;
          width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
        }

        .hop-hero-inner {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ---------- TOP ROW (desktop) ---------- */
        .hop-hero-top {
          display: grid;
          grid-template-columns: 63% 37%;
          min-height: 610px;
          gap: 0;

          /* IMPORTANT */
          position: static;
        }

        .hop-hero-left {
          padding: 1px 55px 0px 58px;
          box-sizing: border-box;
        }

        .hop-heading-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
        }

        .hop-heading {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(26px, 2.5vw, 46px);
          line-height: 1.35;
          color: #004342;
          margin: 0;
          max-width: 450px;
        }

        .hop-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .hop-badge {
          flex-shrink: 0;
          width: 115px;
          height: 115px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        .hop-badge-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .hop-desc {
          font-family: "Mona Sans", sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #6b6b6b;
          max-width: 600px;
          margin: 20px 0 38px;
        }

        .hop-btn-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .hop-btn-primary {
          font-family: "Mona Sans", sans-serif;
          background: #017574;
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 14px 26px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .hop-btn-text {
          font-family: "Mona Sans", sans-serif;
          background: none;
          border: none;
          color: #004342;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
        }

        .hop-hero-right {
          position: absolute;

          top: -142px;
          right: 0;

          width: 37%;
          height: 692px;

          margin: 0;
          padding: 0;

          z-index: 1;
        }

        .hop-carousel {
          position: relative;
          width: 100%;
          height: 80%;
          margin: 0;
          padding: 0;
          overflow: hidden;

          border-radius: 20px 0 0 20px;
        }

        .hop-carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;

          border-radius: 0 0 0 20px;
        }

        .hop-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.85);
          color: #004342;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hop-arrow-left {
          left: 16px;
        }

        .hop-arrow-right {
          right: 16px;
        }

        .hop-arrow-sm {
          width: 28px;
          height: 28px;
          font-size: 16px;
        }

        /* ---------- BOTTOM ROW (desktop) ---------- */
        .hop-hero-bottom {
          display: grid;
          grid-template-columns: 63% 37%;
          width: 100%;
          gap: 0;
          margin-top: -200px;
          align-items: start;
          box-sizing: border-box;
        }

        .hop-bottom-left {
          width: 100%;
          padding: 0 35px 55px 0;
          margin-top: -70px;
          box-sizing: border-box;
          position: relative;
        }

        .hop-bottom-right {
          width: 100%;

          display: flex;
          align-items: flex-start;

          padding: 14px 30px 45px 0;

          box-sizing: border-box;
        }

        .hop-leather-row {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
        }

        .hop-leather-carousel {
          position: relative;

          width: 49%;
          height: 255px;

          flex-shrink: 0;

          overflow: hidden;

          /* screenshot jaisa right corners */
          border-radius: 0 16px 16px 0;
        }

        .hop-leather-img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          display: block;
        }

        .hop-stats {
          list-style: none;

          margin: 3px 0 0 0;
          padding: 0;

          display: flex;
          flex-direction: column;

          gap: 8px;

          flex: 1;
        }

        .hop-stats li {
          font-family: "Mona Sans", sans-serif;

          font-size: 14px;
          line-height: 1.25;

          color: #222;

          white-space: nowrap;
        }

        .hop-stat-num {
          font-weight: 700;
          color: #004342;
        }

        .hop-stat-label {
          font-weight: 400;
          color: #222;
        }

        .hop-handmade-text {
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-weight: 500;
          font-size: 47px;
          color: rgba(1, 117, 116, 0.12);
          text-align: right;

          margin: 0 0;
          margin-top: -114px;
          margin-right: 90px;
        }

        .hop-categories {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          width: 100%;
        }

        .hop-cat-col {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        .hop-cat-col li {
          font-family: "Mona Sans", sans-serif;

          font-size: 11px;
          line-height: 1.25;

          font-weight: 600;

          letter-spacing: 0;

          text-transform: uppercase;

          color: #81908f;

          cursor: pointer;

          white-space: nowrap;
        }

        /* active Handmade Paper */
        .hop-cat-col li.hop-cat-active {
          color: #017574;

          padding-bottom: 5px;

          border-bottom: 0px ;

          width: fit-content;
        }

        /* See all paper */
        .hop-cat-col li.hop-cat-link {
          color: #017574;
          font-weight: 700;
        }

        .hop-cat-active {
          color: #017574;
          padding-bottom: 6px;
          border-bottom: 2px solid #017574;
          width: fit-content;
        }

        .hop-cat-link {
          color: #017574;
        }

        /* ---------- QUOTE SECTION ---------- */
        .hop-quote {
          width: 100%;
          box-sizing: border-box;
          padding: 100px 32px;
        }

        .hop-quote-inner {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .hop-quote-text {
          font-family: "Playfair Display", serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.5;
          color: #004342;
          margin: 0 0 24px;
        }

        .hop-quote-text em {
          font-style: italic;
          font-weight: 400;
        }

        .hop-quote-author {
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-size: 32px;
          color: #004342;
          margin: 0;
        }

        /* ---------- TABLET / MOBILE (below xl = 1280px) ----------
           Header switches from absolute-transparent to relative-solid
           at the same breakpoint, so the hero no longer needs top
           padding to clear an overlaid header. */
        /* =========================================================
   TABLET RESPONSIVE
   769px - 1279px
========================================================= */

        @media (min-width: 769px) and (max-width: 1279px) {
          /* ---------- HERO ---------- */

          .hop-hero {
            width: 100%;
            position: relative;
            overflow: hidden;
          }

          .hop-hero-inner {
            width: 100%;
            max-width: 100%;
          }

          .hop-hero-top {
            display: flex;
            flex-direction: column;
            min-height: auto;
            width: 100%;
          }

          .hop-hero-left {
            width: 100%;
            padding: 50px 40px 35px;
          }

          .hop-heading-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 30px;
          }

          .hop-heading {
            font-size: 42px;
            line-height: 1.25;
            max-width: 650px;
          }

          .hop-badge {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
          }

          .hop-desc {
            font-size: 15px;
            line-height: 1.6;
            max-width: 600px;
            margin: 24px 0 30px;
          }

          .hop-btn-row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          /* ---------- MAIN HERO IMAGE ---------- */

          .hop-hero-right {
            position: relative;
            top: auto;
            right: auto;

            width: 100%;
            height: 500px;

            margin: 0;
            padding: 0;

            z-index: 1;
          }

          .hop-carousel {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }

          .hop-carousel-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0;
          }

          /* ---------- BOTTOM ---------- */

          .hop-hero-bottom {
            display: grid;
            grid-template-columns: 1fr;

            width: 100%;

            margin-top: 0;

            gap: 35px;
          }

          .hop-bottom-left {
            width: 100%;

            margin-top: 0;

            padding: 40px;
          }

          .hop-leather-row {
            display: grid;
            grid-template-columns: 50% 1fr;

            gap: 30px;

            align-items: start;
          }

          .hop-leather-carousel {
            width: 100%;
            height: 280px;

            border-radius: 16px;
          }

          .hop-stats {
            margin: 0;
            gap: 12px;
          }

          .hop-stats li {
            font-size: 15px;
          }

          .hop-handmade-text {
            font-size: 42px;

            text-align: left;

            margin: 25px 0 0;

            white-space: normal;
          }

          /* ---------- CATEGORIES ---------- */

          .hop-bottom-right {
            width: 100%;

            padding: 0 40px 50px;
          }

          .hop-categories {
            grid-template-columns: 1fr 1fr;

            column-gap: 50px;
            row-gap: 20px;
          }

          .hop-cat-col li {
            font-size: 12px;
          }
        }

        /* =========================================================
   RESPONSIVE CSS
   DESKTOP CSS ABOVE THIS WILL REMAIN UNTOUCHED
========================================================= */

        /* =========================================================
   TABLET / SMALL LAPTOP
   769px - 1279px
========================================================= */

        @media (min-width: 769px) and (max-width: 1279px) {
          /* ================= HERO ================= */

          .hop-hero {
            width: 100%;
            margin: 0;
            padding: 0;
            position: relative;
            overflow: hidden;
          }

          .hop-hero-inner {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
          }

          /* IMAGE FIRST → TEXT SECOND */

          .hop-hero-top {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: auto;
            margin: 0;
            padding: 0;
            position: relative;
          }

          /* ================= MAIN IMAGE ================= */

          .hop-hero-right {
            order: 1;

            position: relative;
            top: auto;
            right: auto;

            width: 100%;
            height: 500px;

            margin: 0;
            padding: 0;

            z-index: 1;
          }

          .hop-carousel {
            position: relative;

            width: 100%;
            height: 100%;

            margin: 0;
            padding: 0;

            overflow: hidden;

            border-radius: 0 0 22px 22px;
          }

          .hop-carousel-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;
            object-position: center;

            border-radius: 0 0 22px 22px;
          }

          /* ================= HERO TEXT ================= */

          .hop-hero-left {
            order: 2;

            width: 100%;

            margin: 0;

            padding: 45px 40px 45px;

            box-sizing: border-box;
          }

          /* Heading + Badge */

          .hop-heading-row {
            width: 100%;

            display: grid;

            grid-template-columns: 1fr 100px;

            align-items: start;

            gap: 30px;
          }

          .hop-heading {
            width: 100%;

            max-width: 650px;

            margin: 0;

            font-size: 44px;
            line-height: 1.22;

            overflow-wrap: break-word;
          }

          .hop-badge {
            width: 100px;
            height: 100px;

            margin: 0;

            flex-shrink: 0;
          }

          .hop-badge-image {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: contain;
          }

          /* Description */

          .hop-desc {
            width: 100%;

            max-width: 620px;

            margin: 25px 0 30px;

            font-size: 15px;
            line-height: 1.65;
          }

          /* Buttons */

          .hop-btn-row {
            display: flex;

            align-items: center;

            gap: 22px;

            flex-wrap: wrap;
          }

          .hop-btn-primary {
            padding: 14px 24px;

            font-size: 13px;
          }

          .hop-btn-text {
            font-size: 13px;
          }

          /* ================= ARROWS ================= */

          .hop-arrow {
            width: 36px;
            height: 36px;

            font-size: 20px;
          }

          .hop-arrow-left {
            left: 18px;
          }

          .hop-arrow-right {
            right: 18px;
          }

          /* =================================================
     SECOND SECTION
     IMAGE → STATS/TEXT
  ================================================= */

          .hop-hero-bottom {
            display: flex;

            flex-direction: column;

            width: 100%;

            margin: 0;
            padding: 0;

            gap: 0;

            box-sizing: border-box;
          }

          .hop-bottom-left {
            width: 100%;

            margin: 0;

            padding: 0 40px 45px;

            box-sizing: border-box;

            position: relative;
          }

          /* Second image first */

          .hop-leather-row {
            display: flex;

            flex-direction: column;

            width: 100%;

            gap: 28px;

            align-items: stretch;
          }

          .hop-leather-carousel {
            order: 1;

            position: relative;

            width: 100%;
            height: 380px;

            margin: 0;

            flex-shrink: 0;

            overflow: hidden;

            border-radius: 18px;
          }

          .hop-leather-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;
            object-position: center;
          }

          /* Stats second */

          .hop-stats {
            order: 2;

            width: 100%;

            list-style: none;

            margin: 0;
            padding: 0;

            display: grid;

            grid-template-columns: repeat(3, 1fr);

            gap: 15px 25px;
          }

          .hop-stats li {
            font-size: 14px;
            line-height: 1.4;

            white-space: normal;
          }

          .hop-stat-num {
            font-weight: 700;

            color: #004342;
          }

          .hop-stat-label {
            color: #222;
          }

          /* Handmade paper */

          .hop-handmade-text {
            width: 100%;

            margin: 28px 0 0;

            padding: 0;

            font-size: 42px;
            line-height: 1.1;

            text-align: left;

            color: rgba(1, 117, 116, 0.12);

            white-space: normal;
          }

          /* ================= CATEGORIES ================= */

          .hop-bottom-right {
            width: 100%;

            margin: 0;

            padding: 0 40px 50px;

            box-sizing: border-box;
          }

          .hop-categories {
            display: grid;

            grid-template-columns: 1fr 1fr;

            width: 100%;

            column-gap: 60px;
            row-gap: 0;
          }

          .hop-cat-col {
            width: 100%;

            margin: 0;
            padding: 0;

            gap: 18px;
          }

          .hop-cat-col li {
            font-size: 12px;
            line-height: 1.4;

            white-space: normal;
          }

          /* ================= QUOTE ================= */

          .hop-quote {
            width: 100%;

            padding: 75px 40px;

            box-sizing: border-box;
          }

          .hop-quote-inner {
            width: 100%;

            max-width: 900px;

            margin: 0 auto;
          }

          .hop-quote-text {
            font-size: 28px;
            line-height: 1.5;
          }

          .hop-quote-author {
            font-size: 18px;
          }
        }

        /* =========================================================
   MOBILE
   481px - 768px

   ORDER:
   IMAGE
   TEXT
   IMAGE
   STATS
   HANDMADE
   CATEGORIES
========================================================= */

        @media (min-width: 481px) and (max-width: 768px) {
          /* ================= GENERAL ================= */

          .hop-hero {
            width: 100%;

            margin: 0;
            padding: 0;

            position: relative;

            overflow: hidden;
          }

          .hop-hero-inner {
            width: 100%;

            max-width: 100%;

            margin: 0;
            padding: 0;
          }

          /* ================= TOP ================= */

          .hop-hero-top {
            display: flex;

            flex-direction: column;

            width: 100%;

            min-height: auto;

            margin: 0;
            padding: 0;

            position: relative;
          }

          /* ================= MAIN IMAGE FIRST ================= */

          .hop-hero-right {
            order: 1;

            position: relative;

            top: auto;
            right: auto;

            width: 100%;

            height: auto;

            margin: 0;
            padding: 0;

            z-index: 1;
          }

          .hop-carousel {
            position: relative;

            width: 100%;

            height: 390px;

            margin: 0;
            padding: 0;

            overflow: hidden;

            border-radius: 0 0 18px 18px;
          }

          .hop-carousel-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;
            object-position: center;

            border-radius: 0 0 18px 18px;
          }

          /* ================= TEXT SECOND ================= */

          .hop-hero-left {
            order: 2;

            width: 100%;

            margin: 0;

            padding: 34px 22px 38px;

            box-sizing: border-box;
          }

          /* Heading */

          .hop-heading-row {
            display: grid;

            grid-template-columns: minmax(0, 1fr) 72px;

            width: 100%;

            align-items: start;

            gap: 15px;
          }

          .hop-heading {
            width: 100%;

            max-width: 100%;

            margin: 0;

            font-size: 34px;
            line-height: 1.2;

            overflow-wrap: break-word;
          }

          .hop-heading em {
            font-style: italic;
          }

          /* Badge */

          .hop-badge {
            width: 72px;
            height: 72px;

            margin: 0;

            flex-shrink: 0;
          }

          .hop-badge-image {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: contain;
          }

          /* Description */

          .hop-desc {
            width: 100%;

            max-width: 100%;

            margin: 22px 0 26px;

            font-size: 13px;
            line-height: 1.65;

            color: #6b6b6b;
          }

          /* Buttons */

          .hop-btn-row {
            width: 100%;

            display: flex;

            align-items: center;

            gap: 16px;

            flex-wrap: wrap;
          }

          .hop-btn-primary {
            padding: 12px 18px;

            font-size: 12px;

            white-space: nowrap;
          }

          .hop-btn-text {
            font-size: 12px;

            white-space: nowrap;
          }

          /* ================= ARROWS ================= */

          .hop-arrow {
            width: 34px;
            height: 34px;

            font-size: 19px;
          }

          .hop-arrow-left {
            left: 14px;
          }

          .hop-arrow-right {
            right: 14px;
          }

          /* ================= BOTTOM ================= */

          .hop-hero-bottom {
            display: flex;

            flex-direction: column;

            width: 100%;

            margin: 0;
            padding: 0;

            gap: 0;

            box-sizing: border-box;
          }

          .hop-bottom-left {
            width: 100%;

            margin: 0;

            padding: 0 22px 35px;

            position: relative;

            box-sizing: border-box;
          }

          /* ================= SECOND IMAGE ================= */

          .hop-leather-row {
            display: flex;

            flex-direction: column;

            width: 100%;

            gap: 25px;

            align-items: stretch;
          }

          .hop-leather-carousel {
            order: 1;

            position: relative;

            width: 100%;
            height: 290px;

            margin: 0;

            flex-shrink: 0;

            overflow: hidden;

            border-radius: 16px;
          }

          .hop-leather-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;
            object-position: center;
          }

          /* ================= STATS ================= */

          .hop-stats {
            order: 2;

            width: 100%;

            list-style: none;

            margin: 0;
            padding: 0;

            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 12px 18px;
          }

          .hop-stats li {
            font-size: 13px;
            line-height: 1.4;

            white-space: normal;
          }

          .hop-stat-num {
            font-weight: 700;

            color: #004342;
          }

          .hop-stat-label {
            color: #222;
          }

          .hop-stats li:last-child {
            grid-column: 1 / -1;
          }

          /* ================= HANDMADE ================= */

          .hop-handmade-text {
            width: 100%;

            margin: 27px 0 0;

            padding: 0;

            font-size: 36px;
            line-height: 1.1;

            text-align: left;

            color: rgba(1, 117, 116, 0.12);

            white-space: normal;
          }

          /* ================= CATEGORIES ================= */

          .hop-bottom-right {
            width: 100%;

            margin: 0;

            padding: 5px 22px 42px;

            box-sizing: border-box;
          }

          .hop-categories {
            display: grid;

            grid-template-columns: 1fr 1fr;

            width: 100%;

            column-gap: 25px;
            row-gap: 0;
          }

          .hop-cat-col {
            width: 100%;

            margin: 0;
            padding: 0;

            gap: 16px;
          }

          .hop-cat-col li {
            font-size: 10px;
            line-height: 1.4;

            white-space: normal;

            overflow-wrap: break-word;
          }

          /* ================= QUOTE ================= */

          .hop-quote {
            width: 100%;

            padding: 55px 22px;

            box-sizing: border-box;
          }

          .hop-quote-inner {
            width: 100%;

            max-width: 100%;

            margin: 0 auto;
          }

          .hop-quote-text {
            font-size: 23px;
            line-height: 1.45;

            margin-bottom: 20px;
          }

          .hop-quote-author {
            font-size: 15px;
          }
        }

        /* =========================================================
   SMALL MOBILE
   0px - 480px

   SAME ORDER:
   IMAGE
   TEXT
   IMAGE
   TEXT/STATS
========================================================= */

        @media (max-width: 480px) {
          /* ================= GENERAL ================= */

          .hop-hero {
            width: 100%;

            margin: 0;
            padding: 0;

            position: relative;

            overflow: hidden;
          }

          .hop-hero-inner {
            width: 100%;

            max-width: 100%;

            margin: 0;
            padding: 0;
          }

          /* ================= TOP ================= */

          .hop-hero-top {
            display: flex;

            flex-direction: column;

            width: 100%;

            min-height: auto;

            margin: 0;
            padding: 0;

            position: relative;
          }

          /* =====================================================
     1. MAIN IMAGE
  ===================================================== */

          .hop-hero-right {
            order: 1;

            position: relative;

            top: auto;
            right: auto;

            width: 100%;

            height: auto;

            margin: 0;
            padding: 0;

            z-index: 1;
          }

          .hop-carousel {
            position: relative;

            width: 100%;

            height: 310px;

            margin: 0;
            padding: 0;

            overflow: hidden;

            border-radius: 0 0 16px 16px;
          }

          .hop-carousel-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;

            object-position: center;

            border-radius: 0 0 16px 16px;
          }

          /* =====================================================
     2. HERO TEXT
  ===================================================== */

          .hop-hero-left {
            order: 2;

            width: 100%;

            margin: 0;

            padding: 28px 16px 34px;

            box-sizing: border-box;
          }

          /* Heading + Badge */

          .hop-heading-row {
            width: 100%;

            display: grid;

            grid-template-columns: minmax(0, 1fr) 60px;

            align-items: start;

            gap: 10px;
          }

          .hop-heading {
            width: 100%;

            max-width: 100%;

            margin: 0;

            font-size: 28px;
            line-height: 1.2;

            overflow-wrap: break-word;
          }

          .hop-heading em {
            font-style: italic;
          }

          /* Badge */

          .hop-badge {
            width: 60px;
            height: 60px;

            margin: 0;

            flex-shrink: 0;
          }

          .hop-badge-image {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: contain;
          }

          /* Description */

          .hop-desc {
            width: 100%;

            max-width: 100%;

            margin: 20px 0 24px;

            font-size: 12px;
            line-height: 1.6;

            color: #6b6b6b;
          }

          /* Buttons */

          .hop-btn-row {
            width: 100%;

            display: flex;

            align-items: center;

            gap: 12px;

            flex-wrap: wrap;
          }

          .hop-btn-primary {
            padding: 11px 15px;

            font-size: 11px;

            white-space: nowrap;
          }

          .hop-btn-text {
            font-size: 11px;

            white-space: nowrap;
          }

          /* ================= MAIN ARROWS ================= */

          .hop-arrow {
            width: 31px;
            height: 31px;

            font-size: 18px;
          }

          .hop-arrow-left {
            left: 11px;
          }

          .hop-arrow-right {
            right: 11px;
          }

          /* =====================================================
     BOTTOM RESET
  ===================================================== */

          .hop-hero-bottom {
            display: flex;

            flex-direction: column;

            width: 100%;

            margin: 0;
            padding: 0;

            gap: 0;

            box-sizing: border-box;
          }

          .hop-bottom-left {
            width: 100%;

            margin: 0;

            padding: 0 16px 30px;

            position: relative;

            box-sizing: border-box;
          }

          /* =====================================================
     3. SECOND IMAGE
  ===================================================== */

          .hop-leather-row {
            display: flex;

            flex-direction: column;

            width: 100%;

            gap: 22px;

            align-items: stretch;
          }

          .hop-leather-carousel {
            order: 1;

            position: relative;

            width: 100%;
            height: 225px;

            margin: 0;

            flex-shrink: 0;

            overflow: hidden;

            border-radius: 14px;
          }

          .hop-leather-img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;

            object-position: center;
          }

          /* Second image arrows */

          .hop-leather-carousel .hop-arrow {
            width: 29px;
            height: 29px;

            font-size: 16px;

            background: rgba(255, 255, 255, 0.92);
          }

          .hop-leather-carousel .hop-arrow-left {
            left: 9px;
          }

          .hop-leather-carousel .hop-arrow-right {
            right: 9px;
          }

          /* =====================================================
     4. STATS / TEXT
  ===================================================== */

          .hop-stats {
            order: 2;

            width: 100%;

            list-style: none;

            margin: 0;
            padding: 0;

            display: grid;

            grid-template-columns: 1fr;

            gap: 9px;
          }

          .hop-stats li {
            width: 100%;

            font-size: 12px;
            line-height: 1.4;

            white-space: normal;
          }

          .hop-stat-num {
            font-weight: 700;

            color: #004342;
          }

          .hop-stat-label {
            font-weight: 400;

            color: #222;
          }

          .hop-stats li:last-child {
            grid-column: auto;
          }

          /* =====================================================
     HANDMADE PAPER
  ===================================================== */

          .hop-handmade-text {
            width: 100%;

            margin: 24px 0 0;

            padding: 0;

            font-size: 30px;
            line-height: 1.1;

            text-align: left;

            color: rgba(1, 117, 116, 0.12);

            white-space: normal;
          }

          /* =====================================================
     CATEGORIES
  ===================================================== */

          .hop-bottom-right {
            width: 100%;

            margin: 0;

            padding: 4px 16px 36px;

            box-sizing: border-box;
          }

          .hop-categories {
            display: grid;

            grid-template-columns: 1fr 1fr;

            width: 100%;

            column-gap: 14px;
            row-gap: 0;
          }

          .hop-cat-col {
            width: 100%;

            list-style: none;

            margin: 0;
            padding: 0;

            display: flex;

            flex-direction: column;

            gap: 14px;
          }

          .hop-cat-col li {
            width: 100%;

            font-size: 9px;
            line-height: 1.4;

            white-space: normal;

            overflow-wrap: break-word;

            word-break: normal;
          }

          .hop-cat-col li.hop-cat-active {
            width: fit-content;

            padding-bottom: 5px;

            border-bottom: 2px solid #017574;
          }

          .hop-cat-col li.hop-cat-link {
            color: #017574;

            font-weight: 700;
          }

          /* =====================================================
     QUOTE
  ===================================================== */

          .hop-quote {
            width: 100%;

            padding: 46px 16px;

            box-sizing: border-box;
          }

          .hop-quote-inner {
            width: 100%;

            max-width: 100%;

            margin: 0 auto;

            text-align: center;
          }

          .hop-quote-text {
            font-size: 20px;
            line-height: 1.45;

            margin: 0 0 18px;
          }

          .hop-quote-author {
            font-size: 14px;
          }
        }

        /* =========================================================
   VERY SMALL MOBILE
   0px - 360px
========================================================= */

        @media (max-width: 360px) {
          /* Main image */

          .hop-carousel {
            height: 275px;
          }

          /* Content */

          .hop-hero-left {
            padding: 24px 14px 30px;
          }

          /* Heading */

          .hop-heading-row {
            grid-template-columns: minmax(0, 1fr) 52px;

            gap: 8px;
          }

          .hop-heading {
            font-size: 25px;
            line-height: 1.18;
          }

          /* Badge */

          .hop-badge {
            width: 52px;
            height: 52px;
          }

          /* Description */

          .hop-desc {
            font-size: 11px;

            margin: 18px 0 22px;
          }

          /* Buttons */

          .hop-btn-row {
            gap: 10px;
          }

          .hop-btn-primary {
            padding: 10px 13px;

            font-size: 10px;
          }

          .hop-btn-text {
            font-size: 10px;
          }

          /* Second section */

          .hop-bottom-left {
            padding: 0 14px 28px;
          }

          /* Second image */

          .hop-leather-carousel {
            height: 200px;
          }

          /* Stats */

          .hop-stats li {
            font-size: 11px;
          }

          /* Handmade */

          .hop-handmade-text {
            font-size: 27px;

            margin-top: 21px;
          }

          /* Categories */

          .hop-bottom-right {
            padding: 4px 14px 32px;
          }

          .hop-categories {
            column-gap: 10px;
          }

          .hop-cat-col {
            gap: 12px;
          }

          .hop-cat-col li {
            font-size: 8px;
          }

          /* Quote */

          .hop-quote {
            padding: 40px 14px;
          }

          .hop-quote-text {
            font-size: 18px;
          }

          .hop-quote-author {
            font-size: 13px;
          }
        }
        @media (max-width: 768px) {
          /* Header ki mobile height kam */
          header > div {
            height: 58px !important;
          }

          /* Hero image ko header ke paas/upar lao */
          .hop-hero-right {
            position: relative !important;
            top: -25px !important;
            margin-bottom: -25px !important;
          }

          .hop-carousel {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
