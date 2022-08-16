import React from "react";
import { CAPTION_IMAGE_URL } from "../constant";
import { HeroData } from "../data/textData";
import styles from "./component.styles";
import { Filter } from "./Filter";

const HeroSection = ({ handleSearchSubmit }: any) => {
  return (
    <section
      className={styles.headerSection}
      style={{
        backgroundImage: `url(${CAPTION_IMAGE_URL})`,
      }}
    >
      <div className={styles.headerSectionDiv}></div>

      <div className={styles.headerNavWrapper}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerLists}>
            <li className={styles.headerList}>
              <a href="#_" className={styles.headerLink}>
                <span className={styles.headerTitle}>
                  Marketaux<span className={styles.headerDot}>.</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* <nav className={styles.headerNavMobile}>
          <div className={styles.headerMobileWrapper}>
            <a href="#_" className="">
              <span className={styles.headerMobileLink}>
                Marketaux<span className={styles.headerDot}>.</span>
              </span>
            </a>
            <div className={styles.hamburgerWrapper}>
              <button className={styles.hamburgerBtn}>
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav> */}
      </div>

      <div className={styles.headerContentContainer}>
        <div className={styles.headerContentWrapper}>
          <h1 className={styles.headerContentTitle}>{HeroData.title}</h1>
          <p className={styles.headerContentText}>{HeroData.text}</p>
          <div className={styles.headerSearchWrapper}>
            <Filter handleSearchSubmit={handleSearchSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
