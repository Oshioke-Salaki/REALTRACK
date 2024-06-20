import React from "react";
import { createPortal } from "react-dom";
import Navbar from "../features/homePage/Navbar";
import HeroSection from "../features/homePage/HeroSection";
import History from "../features/homePage/History";
import DetailsModal from "../features/homePage/DetailsModal";

function AppHome() {
  return (
    <div className="bg-[#071333] min-h-[100vh] text-white px-[100px]">
      {createPortal(<DetailsModal />, document.body)}
      <Navbar />
      <HeroSection />
      <History />
    </div>
  );
}

export default AppHome;
