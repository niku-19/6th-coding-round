/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoArrowBackOutline } from "react-icons/io5";

import styles from "./DetailsHeader.module.css";
import { NavLink } from "react-router-dom";

const DetailsHeader = ({ resturantData, handleOpenAddReview }) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <NavLink to="/">
          <IoArrowBackOutline className={styles.back__icon} />
        </NavLink>
      </header>
      <div className={styles.resturant__details__container}>
        <div className={styles.resturant__details}>
          <p className={styles.resturant__name}>{resturantData?.name}</p>
          <div className={styles.dish__name__container}>
            {resturantData?.menu?.map((eachDish) => (
              <p key={eachDish.name} className={styles.dish__name}>
                {eachDish?.name}
              </p>
            ))}
          </div>
          <p className={styles.address}>{resturantData?.address}</p>
          <p className={styles.rating}>
            Average Rating: {resturantData?.averageRating}
          </p>
        </div>
        <button
          className={styles.addReview__btn}
          onClick={() => handleOpenAddReview()}
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default DetailsHeader;
