import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Pokedex";
import Details from "../pages/Details/PokedexDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
