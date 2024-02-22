import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";
import CardsByParams from "../Cards/CardsByParams";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/:id" element={<CardsByParams />} />
      </Routes>
    </>
  );
};

export default Home;
