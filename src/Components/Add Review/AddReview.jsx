/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./AddReview.module.css";
import { useResturantContext } from "../../Context/ResturantContext";
import { useParams } from "react-router-dom";

const AddReview = ({ closeAddReview }) => {
  const { id } = useParams();
  console.log("🚀 ~ file: AddReview.jsx:9 ~ AddReview ~ id:", id);
  const { dispatch } = useResturantContext();
  const [rating, setRating] = useState({
    rating: 1,
    comment: "",
  });
  console.log("🚀 ~ file: AddReview.jsx:10 ~ AddReview ~ rating:", rating);

  const handleAddReviews = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        id: parseInt(id),
        rating: rating.rating,
        comment: rating.comment,
      },
    });
    closeAddReview();
  };

  return (
    <>
      <div
        className={styles.model__overlay}
        onClick={() => closeAddReview()}
      ></div>
      <div className={styles.model__container}>
        <h1>Add Review</h1>
        <form
          className={styles.form__container}
          onSubmit={handleAddReviews}
          action=""
        >
          <div className={styles.form__group}>
            <label htmlFor="">Rating</label>
            <select
              name="rating"
              id="rating"
              value={rating.rating}
              onChange={(e) =>
                setRating({
                  ...rating,
                  rating: e.target.value,
                })
              }
            >
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>
          </div>
          <div className={styles.form__group}>
            <label htmlFor="">Comment</label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Comment"
              onChange={(e) =>
                setRating({
                  ...rating,
                  comment: e.target.value,
                })
              }
            ></textarea>
          </div>
          <button className={styles.submit__btn}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
