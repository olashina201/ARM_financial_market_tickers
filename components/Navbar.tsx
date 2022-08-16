import React from "react";
import { styles } from "../styles/cards.style";

const Navbar = () => {
  return (
    <section className={styles.navSection}>
      <div className={styles.navWrapper}>
        <a href="#" className={styles.navAnchor}>
          <span>Marketaux.</span>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
