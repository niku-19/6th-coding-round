import { useResturantContext } from "../../Context/ResturantContext";
import DishCard from "../Dish Card/DishCard";

const ResturantList = () => {
  const { resturants } = useResturantContext();
  return (
    <section>
      <div className="container">
        <div className="resturant__list__container">
          {resturants?.resturantData?.map((eachResturant) => {
            return (
              <div key={eachResturant.id}>
                <h1 className="resturant__name">{eachResturant?.name}</h1>
                <DishCard resturantData={eachResturant} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResturantList;
