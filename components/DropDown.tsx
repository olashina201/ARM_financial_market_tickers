import React from "react";
import { FilterList } from "../data/filterList";
import { styles } from "../styles/cards.style";

const DropDown = () => {
  return (
    <div
      className={styles.dropdownWrapper}
      style={{
        position: "absolute",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: "translate(5px, 72px)",
      }}
    >
      <ul className={styles.dropdownLists}>
        {FilterList.map((data) => (
          <li>
            <button type="button" className={styles.dropdownBtn}>
              {data.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
