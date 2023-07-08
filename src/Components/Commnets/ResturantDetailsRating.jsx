/* eslint-disable react/prop-types */
import CommnetCard from "../CommentCard/CommnetCard";

const ResturantDetailsRating = ({ resturantData }) => {
  return (
    <div className="container">
      <h1>Review</h1>
      {resturantData?.ratings.map((eachRating) => (
        <CommnetCard key={eachRating.comment} data={eachRating} />
      ))}
    </div>
  );
};

export default ResturantDetailsRating;
