import React from "react";
import styles from "./component.styles";

const Title = () => {
  return (
    <section className={styles.titleSection}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleContent}>
          <h1 className={styles.titleHead}>
            <span className={styles.titleSpan}>Finance and Market</span>
            <br className={styles.titleBreak} /> Latest News
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Title;
