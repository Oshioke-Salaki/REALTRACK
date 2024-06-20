import rightArrRed from "../../assets/arrow-right-red.svg";
import { Button, Timeline } from "flowbite-react";
import truckIcon from "../../assets/truck-fast.svg";
import routeIcon from "../../assets/route-icon.svg";
import boxIcon from "../../assets/box.svg";
import TimeLineItem from "../../components/TimeLineItem";

function History({ setIsDetailsOpen, setIsRecommendationOpen }) {
  return (
    <div className="py-[36px]">
      <div className="flex items-center justify-between w-full mb-[30px]">
        <h2 className="font-semibold text-xl leading-[30px]">History</h2>
        <button
          className="flex items-center gap-x-[9px] font-semibold text-sm leading-[21px] text-[#121212]"
          onClick={() => setIsDetailsOpen(true)}
        >
          Details <img src={rightArrRed} alt="" />
        </button>
      </div>
      <ul className="pl-[30px]">
        <TimeLineItem
          title="In process-recipient city"
          subTitle="Berlin,germany"
          time="11:45 PM"
          icon={truckIcon}
        />
        <TimeLineItem
          title="Humidity 60'  - Temperature 48'"
          subTitle="Jakarta,indonesia"
          time="11:45 PM"
          icon={routeIcon}
        />
        <TimeLineItem
          title="Sent from majalengka"
          subTitle="Majalengka,indonesia"
          time="11:45 PM"
          icon={boxIcon}
          lastItem={true}
        />
      </ul>
    </div>
  );
}

export default History;
