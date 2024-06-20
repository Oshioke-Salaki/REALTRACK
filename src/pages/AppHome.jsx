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
  const [loadingAiData, setLoadingAiData] = useState(false);
  const [data, setData] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  return (
    <div className="bg-white min-h-[100vh] text-white px-[100px]">
      {isDetailsOpen &&
        createPortal(
          <DetailsModal
            setIsRecommendationOpen={setIsRecommendationOpen}
            setIsDetailsOpen={setIsDetailsOpen}
            setData={setData}
            setLoadingAiData={setLoadingAiData}
          />,
          document.body
        )}
      {isRecommendationOpen &&
        createPortal(
          <RecomendationModal
            setIsRecommendationOpen={setIsRecommendationOpen}
            setIsDetailsOpen={setIsDetailsOpen}
            data={data}
            loadingAiData={loadingAiData}
          />,
          document.body
        )}
      <Navbar />
      <HeroSection setIsDetailsOpen={setIsDetailsOpen} />
      {/* {isTracking && <History setIsDetailsOpen={setIsDetailsOpen} />} */}
    </div>
  );
}

export default AppHome;
