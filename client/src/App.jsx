import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Cards from "./components/Cards/Cards";
import Home from "./components/views/Home";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import CreateForm from "./components/Form/Form";

function logout() {
  setUserData({
    email: "",
    password: "",
  });
  setAccess(false);
}

function App() {
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const [page, setPage] = useState({ page: "" });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // CSS Body Dinamico:
  useEffect(() => {
    // Verifica la ruta actual y aplica estilos al cuerpo en consecuencia
    if (pathname === "/" || pathname === "/about") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backdropFilter = "blur(8px)"; // Estilo para la ruta '/'
    } else {
      document.body.style.backdropFilter = "blur(0px)"; // Estilo para la ruta '/home'
    }
  }, [pathname]);

  
  return (
    <div className="App">
      {pathname !== "/" && <Nav logout={logout} pathname={pathname} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/home" element={<Cards />} /> */}
        <Route path="/home/*" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<CreateForm />} />
        </Routes>
    </div>
  );
}

export default App;
