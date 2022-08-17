import React from "react";
import { NavList } from "../data/navList";
import styles from "./component.styles";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <a href="#_" className={styles.footerLogoText}>
            <span className="ml-1">Marketaux.</span>
          </a>
        </div>
        <div className={styles.footerNavWrapper}>
          <ul className={styles.footerLists}>
            {NavList.map((list: string, index: number) => (
              <li key={index}>
                <a href="#_" className={styles.footerList}>
                  {list}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.footerCopyright}>© Copyright 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
