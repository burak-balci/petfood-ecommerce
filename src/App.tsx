import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CatFood from "./pages/CatFood";
import Header from "./components/Header";
import DogFood from "./pages/DogFood";
import OtherProducts from "./pages/OtherProducts";
import OtherBone from "./pages/OtherBone";
import OtherSand from "./pages/OtherSand";
import OtherHome from "./pages/OtherHome";
import OtherCanned from "./pages/OtherCanned";
import OtherReward from "./pages/OtherReward";
import OtherBiscuit from "./pages/OtherBiscuit";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/giris" element={<Login />} />
        <Route path="/kedi-mamasi" element={<CatFood />} />
        <Route path="/kopek-mamasi" element={<DogFood />} />
        <Route path="/diger-urunler" element={<OtherProducts />}>
          <Route index element={<OtherHome />} />
          <Route path="yas-mamasi" element={<OtherCanned />} />
          <Route path="odul-mamasi" element={<OtherReward />} />
          <Route path="kemik" element={<OtherBone />} />
          <Route path="kum" element={<OtherSand />} />
          <Route path="biskuvi" element={<OtherBiscuit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
