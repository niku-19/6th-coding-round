/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

import styles from "./CommentCard.module.css";

const CommnetCard = ({ data }) => {
  return (
    <div className={styles.commnet__container}>
      <div className={styles.user__details}>
        <div className={styles.avatar}>
          <img src={data?.pp} alt="" />
          <p>{data?.revName}</p>
        </div>
        <p>{data?.comment}</p>
      </div>
      <div className={styles.rating__button}>
        <button>
          {data?.rating} <AiFillStar className={styles.rating__star} />
        </button>
      </div>
    </div>
  );
};

export default CommnetCard;
