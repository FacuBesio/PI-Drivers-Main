import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
