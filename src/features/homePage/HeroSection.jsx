function HeroSection() {
  return (
    <div className="bg-purpleGradient py-9 flex flex-col items-center rounded-[0px_0px_50px_50px]">
      <h4 className="text-base leading-6 font-medium text-[#EEE4E4] mb-[2px]">
        Hello User 2,
      </h4>
      <h2 className="text-2xl leading-9 font-semibold mb-[22px]">
        Track your shipment
      </h2>
      <h6 className="text-sm leading-[21px] mb-[11px]">
        Please enter your tracking number
      </h6>
      <input
        type="text"
        className="w-[768px] py-[14px] bg-white  rounded-[6px] text-[#948F8F] text-center mb-[22px] text-sm leading-[18px]"
        placeholder="Enter track number"
      />
      <button className="font-medium text-lg leading-7 py-[10px] bg-[#071333] rounded-[5px] px-[140px]">
        Track
      </button>
    </div>
  );
}

export default HeroSection;
