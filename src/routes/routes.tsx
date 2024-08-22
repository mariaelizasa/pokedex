import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Pokedex";
import Details from "../pages/Details/PokedexDetails";
import NotFound from "../components/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
