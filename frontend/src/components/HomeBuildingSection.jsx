"use client";

import Image from "next/image";

export default function HomeBuildingSection() {
  return (
    <section className="hbs-section">
      <div className="hbs-image-wrap">
        <Image
          src="/images/home/4.png"
          alt="Century Overseas Papers"
          fill
          priority={false}
          sizes="100vw"
          className="hbs-image"
        />
      </div>

      <style jsx>{`
        /* =========================================
           DESKTOP
        ========================================= */

        .hbs-section {
          width: 100%;
          margin-top: 10px;
          padding: 0;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hbs-image-wrap {
          position: relative;
          width: 100%;
          height: 540px;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        .hbs-image {
          object-fit: cover;
          object-position: center;
        }


        /* =========================================
           SMALL LAPTOP
           1025px - 1279px
        ========================================= */

        @media (min-width: 1025px) and (max-width: 1279px) {
          .hbs-image-wrap {
            height: 470px;
          }
        }


        /* =========================================
           TABLET
           769px - 1024px
        ========================================= */

        @media (min-width: 769px) and (max-width: 1024px) {
          .hbs-image-wrap {
            height: 400px;
          }

          .hbs-image {
            object-position: center center;
          }
        }


        /* =========================================
           MOBILE
           481px - 768px
        ========================================= */

        @media (min-width: 481px) and (max-width: 768px) {
          .hbs-image-wrap {
            height: 330px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }


        /* =========================================
           SMALL MOBILE
           361px - 480px
        ========================================= */

        @media (min-width: 361px) and (max-width: 480px) {
          .hbs-image-wrap {
            height: 270px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }


        /* =========================================
           VERY SMALL MOBILE
           <= 360px
        ========================================= */

        @media (max-width: 360px) {
          .hbs-image-wrap {
            height: 235px;
          }

          .hbs-image {
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>
    </section>
  );
}