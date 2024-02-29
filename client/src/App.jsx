import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/views/Home";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import CreateForm from "./components/Form/Form";
import About from "./components/About/About";

function App() {
  const { pathname } = useLocation();

  //? COMPONENT MOUNTING
  useEffect(() => {
    // CSS Body Dinamico:
    if (pathname === "/" || pathname === "/about") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backdropFilter = "blur(8px)";
    } else {
      document.body.style.backdropFilter = "blur(0px)";
    }
  }, [pathname]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav pathname={pathname} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
