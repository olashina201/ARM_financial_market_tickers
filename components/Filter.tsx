import { styles } from "../styles/cards.style";
import { Button } from "./Button";
import DropDown from "./DropDown";

export const Filter = () => {
  return (
    <form>
      <div className={styles.filterWrapper}>
        <button
          id="dropdown-button"
          className={styles.filterButton}
          type="button"
        >
          Filter
          <svg
            aria-hidden="true"
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <DropDown />
        <div className={styles.inputWrapper}>
          <input
            type="search"
            className={styles.inputComponent}
            placeholder="exchange, countries etc.."
          />
          <Button />
        </div>
      </div>
    </form>
  );
};
