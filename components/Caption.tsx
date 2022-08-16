import React from "react";
import { styles } from "../styles/cards.style";

const Caption = () => {
  return (
    <div className={styles.captionWrapper}>
      <div className={styles.captionImgWrapper}>
        <a href="#_" className="block">
          <img
            className={styles.captionImage}
            src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg"
          />
        </a>
      </div>
      <div className={styles.captionContentWrapper}>
        <div className={styles.captionContentContainer}>
          <div className={styles.captionFeature}>
            <svg
              className="w-3.5 h-3.5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>Featured</span>
          </div>
          <h1 className={styles.captionImgWrapper}>
            <a href="#_">Savory Templates. Sweet Designs.</a>
          </h1>
          <p className={styles.captionSmallText}>
            by{" "}
            <a href="#_" className={styles.captionAnchor}>
              John Doe
            </a>{" "}
            · <span className="mx-1">April 23rd, 2021</span> ·{" "}
            <span className={styles.captionReadNow}>Read Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Caption;
