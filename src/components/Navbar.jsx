import { useDisconnect } from "@starknet-react/core";
import Connector from "./Connector";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="py-[35px] flex justify-between items-center">
      <Logo />
      <Connector />
    </nav>
  );
}

export default Navbar;
