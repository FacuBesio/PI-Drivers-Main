import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Cards from "./components/Cards/Cards";
import Home from "./components/views/Home";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";

function logout() {
  setUserData({
    email: "",
    password: "",
  });
  setAccess(false);
}

function App() {
  const [access, setAccess] = useState(false);
  const [page, setPage] = useState({ page: "" });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { pathname } = useLocation();
  return (
    <div className="App">
      <Nav logout={logout} pathname={pathname} />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/home" element={<Cards />} /> */}
        <Route path="/home/*" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
