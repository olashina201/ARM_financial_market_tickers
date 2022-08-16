import React from "react";
import { Card } from "../components/Card";
import { IResponseData } from "../interface";
import styles from "./component.styles";

type Props = {
  news: IResponseData;
};

export const Cards: React.FC<any> = ({ news }) => {
  return (
    <section className={styles.cardsSection}>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardsContainer}>
          {news.map((data: IResponseData) => (
            <Card news={data} />
          ))}
        </div>
      </div>
    </section>
  );
};
