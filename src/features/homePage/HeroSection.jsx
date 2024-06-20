import { useState } from "react";

function HeroSection({ setIsTracking, setIsDetailsOpen }) {
  const [id, setId] = useState("KG-13GH");
  return (
    <div className="bg-[#4BAF47] py-9 flex flex-col items-center rounded-[0px_0px_50px_50px]">
      <h4 className="text-base leading-6 font-medium text-[#EEE4E4] mb-[2px]">
        Hello muAccra,
      </h4>
      <h2 className="text-2xl leading-9 font-semibold mb-[22px]">
        Your Farm Review,
      </h2>
      <h6 className="text-sm leading-[21px] mb-[11px]">
        Please enter your device ID
      </h6>
      <input
        type="text"
        className="w-[768px] py-[14px] bg-white text-[#121212] outline-none border-none  rounded-[6px] placeholder:text-[#948F8F] text-center mb-[22px] text-sm leading-[18px]"
        placeholder="Enter track number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        className="font-medium text-lg leading-7 py-[10px] bg-white rounded-[5px] px-[140px] text-[#121212]"
        onClick={() => {
          setId("");
          setIsDetailsOpen(true);
        }}
      >
        Track
      </button>
    </div>
  );
}

export default HeroSection;
