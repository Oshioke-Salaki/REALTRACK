import logo from "../../assets/logo.svg";
function Logo() {
  return (
    <div className="flex items-center gap-x-2 font-semibold text-2xl leading-4 text-white">
      <img src={logo} alt="" />
      <h3>Real Track</h3>
    </div>
  );
}

export default Logo;
