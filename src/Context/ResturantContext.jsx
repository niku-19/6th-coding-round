/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, resturantReducer } from "../Reducer/ResturantReducer";

const ResturantContext = createContext();

const ResturantContextProvider = (props) => {
  const [resturants, dispatch] = useReducer(resturantReducer, INITIAL_STATE);

  return (
    <ResturantContext.Provider value={{ resturants, dispatch }}>
      {props.children}
    </ResturantContext.Provider>
  );
};

export const useResturantContext = () => useContext(ResturantContext);

export default ResturantContextProvider;
