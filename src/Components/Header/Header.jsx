import { useResturantContext } from "../../Context/ResturantContext";
import styles from "./Header.module.css";

const Header = () => {
  const { dispatch } = useResturantContext();

  const handleSelectCategory = (e) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: e.target.value });
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.brand__name}>Food Ordering App</h1>
        <h2 className={styles.category__heading}>Select Your Cuisine:</h2>
        <div className={styles.flex__container}>
          <button
            className={styles.category__btn}
            value={"Italian"}
            onClick={(e) => handleSelectCategory(e)}
          >
            Italian
          </button>
          <button
            className={styles.category__btn}
            value={"Maxican"}
            onClick={(e) => handleSelectCategory(e)}
          >
            Maxican
          </button>
          <button
            className={styles.category__btn}
            value={"Chinese"}
            onClick={(e) => handleSelectCategory(e)}
          >
            Chinese
          </button>
          <button
            className={styles.category__btn}
            value={"Indian"}
            onClick={(e) => handleSelectCategory(e)}
          >
            Indian
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
