import { HeroData } from "../data/textData";
import { styles } from "../styles/cards.style";
import { Filter } from "./Filter";

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
          <p className={styles.heroTitle}>{HeroData.title}</p>
          <h1 className={styles.heroCaption}>
            Powerful
            <span className={styles.heroSpan}>and Easy to use</span>
          </h1>
          <p className={styles.heroText}>{HeroData.text}</p>
          <Filter />
        </div>
      </div>
    </section>
  );
};
