import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ResturantContextProvider from "./Context/ResturantContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ResturantContextProvider>
        <App />
      </ResturantContextProvider>
    </BrowserRouter>
  </>
);
