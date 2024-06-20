import { createPortal } from "react-dom";
import Navbar from "./features/homePage/Navbar";
import HeroSection from "./features/homePage/HeroSection";
import History from "./features/homePage/History";
import DetailsModal from "./features/homePage/DetailsModal";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHome from "./pages/AppHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<AppHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
