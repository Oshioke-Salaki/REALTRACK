import { createPortal } from "react-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./features/homePage/HeroSection";
import History from "./features/homePage/History";
import DetailsModal from "./components/DetailsModal";

function App() {
  return (
    <div className="bg-[#071333] min-h-[100vh] text-white px-[100px]">
      {/* {createPortal(<DetailsModal />, document.body)} */}
      <Navbar />
      <HeroSection />
      <History />
    </div>
  );
}

export default App;
