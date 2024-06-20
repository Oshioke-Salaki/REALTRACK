import closeIcon from "../../assets/closeIcon.svg";

function RecomendationModal({ setIsRecommendationOpen, setIsDetailsOpen }) {
  return (
    <div className="absolute inset-0 flex justify-center text-black  pt-[120px] bg-white bg-opacity-65 backdrop-blur-sm">
      <div className="w-[858px] px-[45px] relative py-10 bg-white font-manrope shadow-md h-fit rounded-[5px]">
        <button
          className="absolute top-[9px] right-4"
          onClick={() => {
            setIsDetailsOpen(true);
            setIsRecommendationOpen(false);
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
        <div className="py-[7px] px-10 bg-[#4BAF47] rounded-[6px] font-semibold text-lg leading-[27px] mb-3 text-white">
          Recomendation
        </div>
        <div className="py-5 pl-[27px] pr-[79px] bg-[#F5F5F5]">
          <h1 className="font-bold text-sm leading-[30px]">
            Current Conditions:
          </h1>
          <ul className="font-medium text-sm leading-[30px] mb-3">
            <li>Temperature: 40°C</li>
            <li>Humidity: 42%</li>
          </ul>
          <h1 className="font-bold text-sm leading-[30px]">Advice:</h1>
          <ul className="font-medium text-sm leading-[30px] mb-3">
            <li>
              Cooling Measures: High temperatures can stress rice plants.
              Consider using irrigation systems to cool the soil and reduce
              temperature around the plants.
            </li>
            <li>
              Humidity Adjustment: The humidity level is slightly on the lower
              side for optimal rice growth. Increase soil moisture to maintain a
              humidity level closer to 70-80% to ensure healthy plant
              development.
            </li>
            <li>
              Monitoring: Regularly check the soil moisture and temperature. Use
              shade nets or sprinkle water during peak sunlight hours to prevent
              heat stress on the crops.
            </li>
          </ul>
          <h1 className="font-bold text-sm leading-[30px]">Additional Tips:</h1>
          <ul className="font-medium text-sm leading-[30px]">
            <li>
              Ensure good water management to maintain consistent moisture
              levels.
            </li>
            <li>
              Monitor weather forecasts to anticipate any sudden changes in
              temperature or humidity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecomendationModal;
