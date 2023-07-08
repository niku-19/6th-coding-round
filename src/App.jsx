import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ResturantDetails from "./Pages/ResturantDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<ResturantDetails />} />
      </Routes>
    </>
  );
}

export default App;
