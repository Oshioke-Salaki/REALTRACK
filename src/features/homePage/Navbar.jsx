import { useDisconnect } from "@starknet-react/core";
import Connector from "../../components/Connector";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import analytics from "../../assets/chart.svg";
import tracking from "../../assets/tracking.svg";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CustomConnectButton } from "./ConnectButton";

function Navbar() {
  return (
    <nav className="py-[35px] flex justify-between items-center text-black">
      <Logo />
      <div className="flex items-center gap-x-[90px]">
        <NavLink className="flex items-center gap-x-[10px]">
          <img src={tracking} alt="" />
          Tracking
        </NavLink>
        <NavLink className="flex items-center gap-x-[10px]">
          <img src={analytics} alt="" />
          Analytics
        </NavLink>
      </div>
      <CustomConnectButton />
    </nav>
  );
}

export default Navbar;
