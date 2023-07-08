import { restaurantsData } from "../Data/ResturantData";

const INITIAL_STATE = {
  pureData: restaurantsData,
  Italian: restaurantsData.filter((item) => item.cusineType === "Italian"),
  Mexican: restaurantsData.filter((item) => item.cusineType === "Maxican"),
  Chinese: restaurantsData.filter((item) => item.cusineType === "Chinese"),
  Indian: restaurantsData.filter((item) => item.cusineType === "Indian"),
  resturantData: restaurantsData.filter(
    (item) => item.cusineType === "Italian"
  ),
  selectedCategory: "Italian",
};

const resturantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_SELECTED_CATEGORY": {
      const resturantData = [...state.pureData].filter(
        (item) => item.cusineType === payload
      );

      return {
        ...state,
        selectedCategory: payload,
        resturantData: resturantData,
      };
    }

    case "ADD_REVIEW": {
      const { rating, id, comment } = payload;

      const resturantData = [...state.pureData].map((item) =>
        item.id === id
          ? {
              ...item,
              ratings: [
                ...item.ratings,
                {
                  rating: parseInt(rating),
                  comment: comment,
                  pp: "https://picsum.photos/200/300",
                  revName: "User" + 1,
                },
              ],
            }
          : item
      );
      return {
        ...state,
        pureData: resturantData,
      };
    }

    default:
      return state;
  }
};

export { INITIAL_STATE, resturantReducer };
