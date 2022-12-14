import React from "react";
import { IResponseData } from "../interface";
import styles from "./component.styles";
import Skeleton from 'react-loading-skeleton'

type Props = {
  news: IResponseData;
};

export const Card: React.FC<Props> = ({ news }) => {
  const { uuid, image_url, source, title, description, published_at, url, language } =
    news;
  return (
    <div className={styles.cardWrapper} key={uuid}>
      <a href="#_" className="block">
        <img className={styles.cardImage} src={image_url || (<Skeleton /> as any)} />
      </a>
      <div className={styles.cardSource}>
        <span>{source || <Skeleton />}</span>
      </div>
      <h2 className={styles.cardTitle}>
        <a href="#_">{title || <Skeleton />}</a>
      </h2>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardSmallText}>
        <a href="" className={styles.cardAnchor}>
          {language || <Skeleton />}
        </a>
        · <span className="mx-1">{published_at.slice(0, 10) || <Skeleton />}</span> ·{" "}
        <a href={url} target="_blank" className={styles.cardReadNow}>
          Read Now
        </a>
      </p>
    </div>
  );
};
