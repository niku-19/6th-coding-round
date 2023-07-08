/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./DishCard.module.css";

const DishCard = ({ resturantData }) => {
  return (
    <>
      <div className={styles.grid__container}>
        {resturantData?.menu?.map((eachDish) => {
          return (
            <NavLink to={`/details/${resturantData.id}`} key={eachDish?.name}>
              <div className={styles.card}>
                <div className={styles.card__image}>
                  <img src={eachDish?.imgSrc} alt="" />
                </div>
                <div className={styles.card__details}>
                  <p className={styles.dish__name}>{eachDish?.name}</p>
                  <p className={styles.dish__price}>
                    Rs. {eachDish?.price} for {eachDish?.qty}
                  </p>
                  <p className={styles.resturnat__name}>
                    {resturantData?.name}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default DishCard;
