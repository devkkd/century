import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section">
      {/* ================= TOP LABEL ================= */}
      <div className="contact-top">
        <p className="contact-label">Get in Touch</p>
        <div className="contact-divider" />
      </div>

      {/* ================= HEADING ================= */}
      <h2 className="contact-heading">
        Start a Conversation, Not a{" "}
        <span className="contact-heading-italic">Catalogue</span> Browse
      </h2>

      {/* ================= CONTENT ================= */}
      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div className="contact-details">
          {/* Workshop */}
          <div className="contact-row">
            <div className="contact-row-title">Workshop</div>

            <div className="contact-row-content">
              <p>316 Jain Hostel Road, Sanganer</p>
              <p>Jaipur - 302029, Rajasthan, India</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-row">
            <div className="contact-row-title">Email</div>

            <div className="contact-row-content">
              <p>
                <a href="mailto:aqib@centurypapers.com">
                  aqib@centurypapers.com
                </a>
              </p>

              <p>
                <a href="mailto:sales@centurypapers.com">
                  sales@centurypapers.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-row">
            <div className="contact-row-title">Phone</div>

            <div className="contact-row-content">
              <p>
                <a href="tel:+919660505555">+91 96605 05555</a>
              </p>
            </div>
          </div>

          {/* Samples */}
          <div className="contact-row">
            <div className="contact-row-title">Samples</div>

            <div className="contact-row-content">
              <p>
                Sample sets available on request. Most orders dispatched within
                5-7 working days.
              </p>
            </div>
          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=316%20Jain%20Hostel%20Road%2C%20Sanganer%2C%20Jaipur%20302029%2C%20Rajasthan%2C%20India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Century Papers Workshop Location"
          />
        </div>
      </div>

      <style>{`
        /* =========================================================
           SECTION
        ========================================================= */

        .contact-section {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 48px 80px;
          box-sizing: border-box;
        }


        /* =========================================================
           TOP LABEL
        ========================================================= */

        .contact-top {
          width: 100%;
          margin-bottom: 46px;
        }

        .contact-label {
          margin: 0 0 16px;
          font-family: "Mona Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #303737;
        }

        .contact-divider {
          width: 100%;
          height: 1px;
          background: #d6dddd;
        }


        /* =========================================================
           MAIN HEADING
        ========================================================= */

        .contact-heading {
          margin: 0 0 60px;

          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
          font-style: normal;

          letter-spacing: -0.035em;

          color: #004342;
        }

        /*
          Only "Catalogue"
          Thin + Italic
        */

        .contact-heading-italic {
          font-family: "Playfair Display", Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
        }


        /* =========================================================
           CONTENT GRID
        ========================================================= */

        .contact-grid {
          width: 100%;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

          gap: 80px;

          align-items: stretch;
        }


        /* =========================================================
           LEFT DETAILS
        ========================================================= */

        .contact-details {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .contact-row {
          width: 100%;

          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);

          gap: 20px;

          padding: 23px 0;

          border-bottom: 1px solid #d6dddd;

          box-sizing: border-box;
        }

        .contact-row:first-child {
          padding-top: 0;
        }

        .contact-row-title {
          font-family: "Mona Sans", Arial, sans-serif;

          font-size: 14px;
          line-height: 1.6;

          font-weight: 700;

          color: #111919;
        }

        .contact-row-content {
          min-width: 0;

          font-family: "Mona Sans", Arial, sans-serif;

          font-size: 14px;
          line-height: 1.65;

          font-weight: 400;

          color: #3f4949;
        }

        .contact-row-content p {
          margin: 0;
        }

        .contact-row-content a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-row-content a:hover {
          color: #017574;
        }


        /* =========================================================
           MAP
        ========================================================= */

        .contact-map {
          width: 100%;
          height: 320px;

          overflow: hidden;

          border-radius: 24px;

          border: 1px solid #dde3e3;

          background: #f2f5f5;
        }

        .contact-map iframe {
          display: block;
          width: 100%;
          height: 100%;
        }


        /* =========================================================
           TABLET
           769px - 1024px
        ========================================================= */

        @media (max-width: 1024px) {

          .contact-section {
            padding: 50px 32px 65px;
          }

          .contact-top {
            margin-bottom: 38px;
          }

          .contact-heading {
            font-size: 34px;
            margin-bottom: 48px;
          }

          .contact-grid {
            gap: 40px;
          }

          .contact-row {
            grid-template-columns: 120px minmax(0, 1fr);
            gap: 15px;
          }

          .contact-map {
            height: 340px;
          }
        }


        /* =========================================================
           MOBILE
           <= 768px
        ========================================================= */

        @media (max-width: 768px) {

          .contact-section {
            padding: 35px 20px 45px;
          }


          /* ---------- top ---------- */

          .contact-top {
            margin-bottom: 28px;
          }

          .contact-label {
            font-size: 11px;
            margin-bottom: 13px;
            letter-spacing: 0.09em;
          }


          /* ---------- heading ---------- */

          .contact-heading {
            font-size: 27px;
            line-height: 1.22;

            letter-spacing: -0.03em;

            margin-bottom: 34px;
          }

          .contact-heading-italic {
            font-weight: 400 !important;
          }


          /* ---------- layout ---------- */

          .contact-grid {
            grid-template-columns: 1fr;

            gap: 32px;
          }


          /* ---------- contact rows ---------- */

          .contact-row {
            grid-template-columns: 100px minmax(0, 1fr);

            gap: 14px;

            padding: 17px 0;
          }

          .contact-row:first-child {
            padding-top: 0;
          }

          .contact-row-title {
            font-size: 12px;
            line-height: 1.55;
          }

          .contact-row-content {
            font-size: 12px;
            line-height: 1.6;
          }


          /* ---------- map ---------- */

          .contact-map {
            height: 280px;
            border-radius: 18px;
          }
        }


        /* =========================================================
           SMALL MOBILE
           <= 480px
        ========================================================= */

        @media (max-width: 480px) {

          .contact-section {
            padding: 30px 18px 38px;
          }

          .contact-top {
            margin-bottom: 24px;
          }

          .contact-heading {
            font-size: 25px;
            line-height: 1.22;
            margin-bottom: 30px;
          }

          .contact-row {
            grid-template-columns: 82px minmax(0, 1fr);
            gap: 12px;
            padding: 15px 0;
          }

          .contact-row-title {
            font-size: 11.5px;
          }

          .contact-row-content {
            font-size: 11.5px;
          }

          .contact-grid {
            gap: 28px;
          }

          .contact-map {
            height: 250px;
            border-radius: 16px;
          }
        }


        /* =========================================================
           VERY SMALL MOBILE
        ========================================================= */

        @media (max-width: 360px) {

          .contact-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .contact-heading {
            font-size: 23px;
          }

          .contact-row {
            grid-template-columns: 72px minmax(0, 1fr);
            gap: 10px;
          }

          .contact-row-title,
          .contact-row-content {
            font-size: 11px;
          }

          .contact-map {
            height: 230px;
          }
        }
      `}</style>
    </section>
  );
}