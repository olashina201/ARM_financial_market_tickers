import { useState, FC } from "react";
import styles from "./component.styles";
import { Button } from "./Button";

export const Filter: FC<any> = ({ handleSearchSubmit }) => {
  const [searcValue, setSearchValue] = useState<string>("");

  return (
    <form
      className={styles.filterWrapper}
      onSubmit={() => handleSearchSubmit(searcValue)}
    >
      <div className={styles.inputWrapper}>
        <input
          type="search"
          value={searcValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.inputComponent}
          placeholder="exchange, countries etc.."
        />
        <Button />
      </div>
    </form>
  );
};
