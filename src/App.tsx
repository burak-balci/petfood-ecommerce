import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CatFood from "./pages/CatFood";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kedi-mamasi" element={<CatFood />} />
      </Routes>
    </div>
  );
}

export default App;
