"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const FOOTER_COLUMNS = [
  {
    title: "Collections",
    links: [
      { label: "Handmade Paper", href: "#" },
      { label: "Antique & Vintage Paper", href: "#" },
      { label: "Plantable Seed Paper", href: "#" },
      { label: "Paper Honeycomb Décor", href: "#" },
      { label: "Lampshades", href: "#" },
      { label: "Gifting & Packaging", href: "#" },
      { label: "Christmas & Seasonal", href: "#" },
      { label: "Leather Journals", href: "#" },
      { label: "Leather Bags", href: "#" },
    ],
  },

  {
    title: "About Us",
    links: [
      { label: "What We Make", href: "#" },
      { label: "Company", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Our Promise", href: "#" },
      { label: "Worldwide", href: "#" },
    ],
  },

  {
    title: "Our History",
    links: [
      { label: "The Ancient Story Of Paper", href: "#" },
      { label: "The Kagzi Community", href: "#" },
      { label: "The Century Papers Story", href: "#" },
      { label: "Timeline", href: "#" },
      { label: "Traditional Knowledge", href: "#" },
    ],
  },

  {
    title: "Our Craft",
    links: [
      { label: "Fibre Sourcing & Selection", href: "#" },
      { label: "Pulping & Colour", href: "#" },
      { label: "Mould & Deckle Forming", href: "#" },
      { label: "Sun Drying & Pressing", href: "#" },
      { label: "Finishing & Quality Check", href: "#" },
    ],
  },

  {
    title: "Responsibilities",
    links: [
      { label: "Environmental", href: "#" },
      { label: "Social", href: "#" },
      { label: "Commercial", href: "#" },
    ],
  },

  {
    title: "Links & Support",
    links: [
      { label: "Compliance", href: "/compliance" },
      { label: "Contact us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleColumn = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="ftr-root">
      <div className="ftr-top">
        <div className="ftr-container">
          <div className="ftr-grid">
            {/* Brand block */}
            <div className="ftr-brand">
              <div className="ftr-logo-wrap">
                <Image
                  src="/images/logo/logo2.png"
                  alt="Century Overseas Papers"
                  width={160}
                  height={160}
                  className="ftr-logo-img"
                />
              </div>
              <div className="ftr-brand-text">
                <p className="ftr-brand-title">Century Papers,</p>
                <p>Sanganer, Jaipur</p>
                <p>Since 1990</p>
                <p>Manufacturer &amp; Exporter of Handmade Paper and Leather Goods.</p>
              </div>
            </div>

            {/* Accordion / link columns */}
            {FOOTER_COLUMNS.map((col, index) => (
              <div
                key={col.title}
                className={`ftr-col ${openIndex === index ? "ftr-col-open" : ""}`}
              >
                <button
                  type="button"
                  className="ftr-col-head"
                  onClick={() => toggleColumn(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{col.title}</span>
                  <span className="ftr-col-icon" aria-hidden="true">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <ul className="ftr-col-list">
                 {col.links.map((link) => (
  <li key={link.label}>
    <Link href={link.href}>
      {link.label}
    </Link>
  </li>
))}
                </ul>
              </div>
            ))}

            {/* Follow us */}
         {/* Follow us */}
<div className="ftr-col ftr-follow">
  <p className="ftr-col-head ftr-follow-head">
    <span>Follow Us</span>
  </p>

  <ul className="ftr-social-list">
    <li>
      <FaInstagram size={16} />
      <span>Instagram</span>
    </li>

    <li>
      <FaFacebookF size={16} />
      <span>Facebook</span>
    </li>

    <li>
      <FaYoutube size={16} />
      <span>Youtube</span>
    </li>
  </ul>
</div>
          </div>

          {/* Certifications */}
          <div className="ftr-certs">
            <Image
              src="/images/logo/logo3.png"
              alt="Sedex SMETA 4-Pillar Certified Factory"
              width={220}
              height={70}
              className="ftr-cert-img ftr-cert-sedex"
            />
            <Image
              src="/images/logo/logo4.png"
              alt="C-TPAT Certified"
              width={180}
              height={70}
              className="ftr-cert-img"
            />
            <Image
              src="/images/logo/logo5.png"
              alt="FSC Recycled Certified"
              width={110}
              height={110}
              className="ftr-cert-img"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ftr-bottom">
        <div className="ftr-container ftr-bottom-inner">
          <a
            href="https://www.kontentkraftdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ftr-credit"
          >
            Crafted by : Kontent Kraft Digital
          </a>
          <p className="ftr-copyright">
            © {new Date().getFullYear()} Century Overseas Papers. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Full width city banner */}
      <div className="ftr-banner">
        <h2 className="ftr-banner-heading">
          Century Overseas Papers · Sanganer, Jaipur · Since 1990
        </h2>
        <Image
          src="/images/logo/Vector.png"
          alt="Sanganer, Jaipur skyline"
          width={2400}
          height={500}
          className="ftr-banner-img"
          priority={false}
        />
      </div>

     <style>{`

/* =========================================================
   FOOTER BASE / DESKTOP
   ========================================================= */

.ftr-root {
  width: 100%;
  color: #001212;
  font-family: 'Mona Sans', sans-serif;
  box-sizing: border-box;
}

.ftr-root * {
  box-sizing: border-box;
}


/* =========================================================
   CONTAINER
   ========================================================= */

.ftr-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}


/* =========================================================
   FOOTER TOP
   ========================================================= */

.ftr-top {
  width: 100%;
  border-top: 1px solid #e4e4e4;
  padding: 56px 0 32px;
}


/* =========================================================
   DESKTOP GRID
   ========================================================= */

.ftr-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1.6fr repeat(6, 1fr) 1fr;
  gap: 24px;
  align-items: start;
}


/* =========================================================
   BRAND
   ========================================================= */

.ftr-brand {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ftr-logo-wrap {
  width: 100%;
}

.ftr-logo-img {
  display: block;
  width: 130px;
  height: auto;
}


/* Brand text */

.ftr-brand-text {
  color: #001212;
  line-height: 1.6;
}

.ftr-brand-text p {
  margin: 0;

  /* DESKTOP BRAND TEXT SIZE */
  font-size: 12px;

  font-weight: 400;
  line-height: 1.6;
}


/* Century Papers heading */

.ftr-brand-text .ftr-brand-title {
  margin: 0 0 2px;

  /* DESKTOP BRAND HEADING SIZE */
  font-size: 14px;

  font-weight: 600;
  line-height: 1.4;
}


/* =========================================================
   FOOTER COLUMNS
   ========================================================= */

.ftr-col {
  min-width: 0;
}


/* Column headings */

.ftr-col-head {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  margin: 0;
  padding: 0 0 16px;

  background: none;
  border: none;

  font-family: inherit;

  /* DESKTOP COLUMN HEADING SIZE */
  font-size: 14px;

  font-weight: 600;
  line-height: 1.4;

  color: #001212;
  text-align: left;

  cursor: default;
}


/* Plus / Minus hidden on desktop */

.ftr-col-icon {
  display: none;

  font-size: 20px;
  font-weight: 400;
  line-height: 1;

  color: #017574;
}


/* =========================================================
   FOOTER LINKS
   ========================================================= */

.ftr-col-list {
  width: 100%;

  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  gap: 0;
}

.ftr-col-list li {
  margin: 0;
  padding: 0;
}

.ftr-col-list a {
  /* DESKTOP LINK SIZE */
  font-size: 12px;

  font-weight: 400;
  line-height: 1.6;

  color: #001212;
  text-decoration: none;

  opacity: 0.85;

  transition:
    opacity 0.15s ease,
    color 0.15s ease;
}

.ftr-col-list a:hover {
  opacity: 1;
  color: #017574;
}


/* =========================================================
   FOLLOW US
   ========================================================= */

.ftr-follow-head {
  cursor: default;
}

.ftr-social-list {
  width: 100%;

  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  gap: 14px;
}

.ftr-social-list li {
  display: flex;
  align-items: center;

  gap: 8px;

  /* DESKTOP SOCIAL TEXT SIZE */
  font-size: 12px;

  font-weight: 400;
  line-height: 1.4;

  letter-spacing: 0.02em;

  color: #001212;
}

.ftr-social-list svg {
  flex-shrink: 0;
  color: #001212;
}


/* =========================================================
   CERTIFICATION LOGOS
   ========================================================= */

.ftr-certs {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  flex-wrap: wrap;

  gap: 40px;

  margin-top: 48px;
}

.ftr-cert-img {
  display: block;

  width: auto;
  height: 56px;

  object-fit: contain;
}

.ftr-cert-sedex {
  width: auto;
  height: 44px;
}


/* =========================================================
   BOTTOM BAR
   ========================================================= */

.ftr-bottom {
  width: 100%;
  border-top: 1px solid #e4e4e4;
}

.ftr-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row-reverse;

  gap: 16px;

  padding: 20px 32px;
}


/* Copyright */

.ftr-copyright {
  margin: 0;

  /* DESKTOP COPYRIGHT SIZE */
  font-size: 12px;

  font-weight: 400;
  line-height: 1.5;

  color: #001212;

  opacity: 0.75;
}


/* Crafted by */

.ftr-credit {
  /* DESKTOP CREDIT SIZE */
  font-size: 12px;

  font-weight: 600;
  line-height: 1.5;

  letter-spacing: 0.04em;

  color: #017574;

  text-decoration: none;
  text-transform: uppercase;
}

.ftr-credit:hover {
  text-decoration: underline;
}


/* =========================================================
   CITY BANNER
   ========================================================= */

.ftr-banner {
  position: relative;

  width: 100%;

  overflow: hidden;
}

.ftr-banner-heading {
  position: relative;
  z-index: 2;

  margin: 48px auto 24px;
  padding: 0 20px;

  text-align: center;

  font-family: 'Playfair Display', serif;

  /* DESKTOP BANNER HEADING SIZE */
  font-size: 36px;

  font-weight: 500;
  line-height: 1.2;

  color: #017574;
}

.ftr-banner-img {
  display: block;

  width: 100%;
  height: 250px;

  object-fit: fill;
}


/* =========================================================
   TABLET
   901px - 1100px
   ========================================================= */

@media (max-width: 1100px) and (min-width: 901px) {

  .ftr-container {
    padding-left: 24px;
    padding-right: 24px;
  }

  .ftr-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px 20px;
  }

  .ftr-brand {
    grid-column: span 2;
  }

  /* TABLET BRAND TEXT */
  .ftr-brand-text p {
    font-size: 12px;
  }

  /* TABLET BRAND HEADING */
  .ftr-brand-text .ftr-brand-title {
    font-size: 14px;
  }

  /* TABLET COLUMN HEADING */
  .ftr-col-head {
    font-size: 13px;
  }

  /* TABLET LINKS */
  .ftr-col-list a {
    font-size: 12px;
  }

  /* TABLET SOCIAL */
  .ftr-social-list li {
    font-size: 12px;
  }

  /* TABLET BANNER HEADING */
  .ftr-banner-heading {
    font-size: 28px;
  }

}


/* =========================================================
   MOBILE
   0px - 900px
   ========================================================= */

@media (max-width: 900px) {

  /* =========================
     FOOTER TOP
     ========================= */

  .ftr-top {
    width: 100%;
    padding: 32px 0 24px;
  }


  /* =========================
     MOBILE CONTAINER

     Change 20px if you want
     more/less side space
     ========================= */

  .ftr-container {
    width: 100%;
    max-width: 100%;

    margin: 0 auto;

    padding-left: 20px;
    padding-right: 20px;
  }


  /* =========================
     MOBILE LAYOUT
     ========================= */

  .ftr-grid {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 0;
  }


  /* =========================
     MOBILE BRAND
     ========================= */

  .ftr-brand {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 18px;

    margin-bottom: 32px;
  }


  /* Mobile logo */

  .ftr-logo-img {
    /* MOBILE LOGO WIDTH */
    width: 120px;

    height: auto;
  }


  /* Mobile brand normal text */

  .ftr-brand-text p {
    /* MOBILE BRAND TEXT SIZE */
    font-size: 12px;

    font-weight: 400;
    line-height: 1.55;
  }


  /* Mobile Century Papers heading */

  .ftr-brand-text .ftr-brand-title {
    /* MOBILE BRAND HEADING SIZE */
    font-size: 14px;

    font-weight: 600;
    line-height: 1.4;

    margin-bottom: 3px;
  }


  /* =========================
     MOBILE ACCORDION
     ========================= */

  .ftr-col {
    width: 100%;
    max-width: 100%;

    border-bottom: 1px solid #e4e4e4;
  }


  /* Accordion heading */

  .ftr-col-head {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin: 0;

    padding: 17px 0;

    /* MOBILE ACCORDION HEADING SIZE */
    font-size: 14px;

    font-weight: 600;
    line-height: 1.4;

    cursor: pointer;
  }


  /* Plus / Minus */

  .ftr-col-icon {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    /* MOBILE PLUS MINUS SIZE */
    font-size: 22px;

    font-weight: 400;
    line-height: 1;

    color: #017574;
  }


  /* =========================
     ACCORDION CONTENT
     ========================= */

  .ftr-col-list {
    width: 100%;

    display: block;

    max-height: 0;

    overflow: hidden;

    margin: 0;
    padding: 0;

    transition:
      max-height 0.3s ease,
      padding-bottom 0.3s ease;
  }


  /* Open accordion */

  .ftr-col-open .ftr-col-list {
    max-height: 600px;
    padding-bottom: 18px;
  }


  /* Mobile link rows */

  .ftr-col-list li {
    margin: 0;
    padding: 0;
  }

  .ftr-col-list li + li {
    margin-top: 10px;
  }


  /* Mobile link text */

  .ftr-col-list a {
    /* MOBILE LINK SIZE */
    font-size: 12px;

    font-weight: 400;
    line-height: 1.5;
  }


  /* =========================
     FOLLOW US MOBILE
     ========================= */

  .ftr-follow {
    width: 100%;

    border-bottom: none;

    padding-top: 8px;
  }

  .ftr-follow-head {
    padding-top: 17px;
    padding-bottom: 14px;

    /* MOBILE FOLLOW US HEADING */
    font-size: 14px;

    font-weight: 600;

    cursor: default;
  }

  .ftr-social-list {
    gap: 12px;
  }

  .ftr-social-list li {
    /* MOBILE SOCIAL TEXT */
    font-size: 12px;

    font-weight: 400;
    line-height: 1.4;
  }


  /* =========================
     CERTIFICATION LOGOS

     All 3 stay in ONE LINE
     ========================= */

  .ftr-certs {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: nowrap;

    gap: 12px;

    margin-top: 30px;
  }


  /* C-TPAT + FSC */

  .ftr-certs .ftr-cert-img {
    display: block;

    width: auto;
    height: auto;

    max-width: 28%;
    max-height: 52px;

    object-fit: contain;

    flex-shrink: 1;
  }


  /* Sedex is wider */

  .ftr-certs .ftr-cert-sedex {
    width: auto;
    height: auto;

    max-width: 40%;
    max-height: 52px;
  }


  /* =========================
     BOTTOM BAR
     ========================= */

  .ftr-bottom-inner {
    width: 100%;

    display: flex;
    flex-direction: column-reverse;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 8px;

    padding: 18px 20px;
  }


  /* Copyright */

  .ftr-copyright {
    /* MOBILE COPYRIGHT SIZE */
    font-size: 11px;

    font-weight: 400;
    line-height: 1.5;
  }


  /* Crafted by */

  .ftr-credit {
    /* MOBILE CREDIT SIZE */
    font-size: 11px;

    font-weight: 600;
    line-height: 1.5;

    letter-spacing: 0.03em;
  }


  /* =========================
     MOBILE CITY BANNER
     ========================= */

  .ftr-banner {
    width: 100%;
  }

  .ftr-banner-heading {
    margin: 18px auto 16px;

    padding-left: 20px;
    padding-right: 20px;

    /* MOBILE BANNER HEADING */
    font-size: 20px;

    font-weight: 500;
    line-height: 1.25;
  }

  .ftr-banner-img {
    display: block;

    width: 100%;

    /* MOBILE BANNER HEIGHT */
    height: 100px;

    object-fit: fill;
  }

}


/* =========================================================
   SMALL MOBILE
   0px - 480px
   ========================================================= */

@media (max-width: 480px) {

  /* Keep everything inside same mobile padding */

  .ftr-container {
    padding-left: 16px;
    padding-right: 16px;
  }


  /* =========================
     BRAND
     ========================= */

  .ftr-logo-img {
    /* SMALL MOBILE LOGO */
    width: 110px;
  }

  .ftr-brand {
    gap: 16px;
    margin-bottom: 28px;
  }

  .ftr-brand-text p {
    /* SMALL MOBILE BRAND TEXT */
    font-size: 12px;
  }

  .ftr-brand-text .ftr-brand-title {
    /* SMALL MOBILE BRAND HEADING */
    font-size: 14px;
  }


  /* =========================
     ACCORDION
     ========================= */

  .ftr-col-head {
    /* SMALL MOBILE HEADING */
    font-size: 14px;

    padding: 16px 0;
  }

  .ftr-col-icon {
    /* SMALL MOBILE PLUS */
    font-size: 21px;
  }

  .ftr-col-list a {
    /* SMALL MOBILE LINK */
    font-size: 12px;
  }


  /* =========================
     FOLLOW US
     ========================= */

  .ftr-follow-head {
    font-size: 14px;
  }

  .ftr-social-list li {
    /* SMALL MOBILE SOCIAL */
    font-size: 12px;
  }


  /* =========================
     CERTIFICATIONS
     ========================= */

  .ftr-certs {
    gap: 8px;
    margin-top: 26px;
  }

  .ftr-certs .ftr-cert-img {
    max-width: 27%;
    max-height: 45px;
  }

  .ftr-certs .ftr-cert-sedex {
    max-width: 42%;
    max-height: 45px;
  }


  /* =========================
     BOTTOM
     ========================= */

  .ftr-bottom-inner {
    padding-left: 16px;
    padding-right: 16px;
  }

  .ftr-copyright {
    /* SMALL MOBILE COPYRIGHT */
    font-size: 10px;
  }

  .ftr-credit {
    /* SMALL MOBILE CREDIT */
    font-size: 10px;
  }


  /* =========================
     BANNER
     ========================= */

  .ftr-banner-heading {
    /* SMALL MOBILE BANNER HEADING */
    font-size: 18px;

    padding-left: 16px;
    padding-right: 16px;
  }

  .ftr-banner-img {
    height: 90px;
  }

}
`}</style>
    </footer>
  );
}
