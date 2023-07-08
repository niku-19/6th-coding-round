import { useParams } from "react-router-dom";
import DetailsHeader from "../Components/DetailsHeader/DetailsHeader";
import { useResturantContext } from "../Context/ResturantContext";
import ResturantDetailsRating from "../Components/Commnets/ResturantDetailsRating";
import { useState } from "react";
import AddReview from "../Components/Add Review/AddReview";

const ResturantDetails = () => {
  const [openAddReview, setOpenAddReview] = useState(false);
  const { resturants } = useResturantContext();
  const { id } = useParams();

  const resturantData = resturants.pureData.find(
    (eachResturant) => eachResturant.id === parseInt(id)
  );

  const handleOpenAddReview = () => {
    setOpenAddReview(true);
  };

  const handleCloseAddReview = () => {
    setOpenAddReview(false);
  };

  return (
    <>
      <DetailsHeader
        resturantData={resturantData}
        handleOpenAddReview={handleOpenAddReview}
      />
      <ResturantDetailsRating resturantData={resturantData} />
      {openAddReview && <AddReview closeAddReview={handleCloseAddReview} />}
    </>
  );
};

export default ResturantDetails;
