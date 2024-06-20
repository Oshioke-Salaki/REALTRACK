import React, { useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "../features/homePage/Navbar";
import HeroSection from "../features/homePage/HeroSection";
import History from "../features/homePage/History";
import DetailsModal from "../features/homePage/DetailsModal";
import RecomendationModal from "../features/homePage/RecomendationModal";

function AppHome() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  return (
    <div className="bg-white min-h-[100vh] text-white px-[100px]">
      {isDetailsOpen &&
        createPortal(
          <DetailsModal
            setIsRecommendationOpen={setIsRecommendationOpen}
            setIsDetailsOpen={setIsDetailsOpen}
          />,
          document.body
        )}
      {isRecommendationOpen &&
        createPortal(
          <RecomendationModal
            setIsRecommendationOpen={setIsRecommendationOpen}
            setIsDetailsOpen={setIsDetailsOpen}
          />,
          document.body
        )}
      <Navbar />
      <HeroSection />
      <History setIsDetailsOpen={setIsDetailsOpen} />
    </div>
  );
}

export default AppHome;
