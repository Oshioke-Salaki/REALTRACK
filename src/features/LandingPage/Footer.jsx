import logo from "../../assets/logo.svg";
import Logo from "./Logo";

function Footer() {
  return (
    <div>
      <div className="py-[120px] bg-[#24231D] flex justify-center">
        <div>
          {/* <div className="flex items-center gap-x-2 font-semibold text-2xl leading-4 text-white">
            <img src={logo} alt="" />
            <h3>Real Track</h3>
          </div> */}
          <Logo />
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
        </div>
      </div>
      <div className="py-5 bg-[#1F1E17] text-[#A5A49A] px-[360px] flex items-center justify-between font-semibold">
        <h5 className="text-sm leading-[30px]">
          © All Copyright 2024 by{" "}
          <span className="text-[15px]">shawonetc Themes</span>
        </h5>
        <h6 className="text-sm leading-[14px]">
          Terms of Use <span className="mx-2">|</span> Privacy Policy
        </h6>
      </div>
    </div>
  );
}

export default Footer;
