import React from "react";
import { FilterList } from "../data/filterList";
import styles from "./component.styles";

type ToggleProps = {
  toggleFilter: boolean;
  setToggleFilter: boolean;
};

const DropDown: React.FC<ToggleProps> = ({ toggleFilter, setToggleFilter }) => {
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
