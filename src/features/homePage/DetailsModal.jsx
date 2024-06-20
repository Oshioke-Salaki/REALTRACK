import rightArrRed from "../../assets/arrow-right-green.svg";
import TimeLineItem from "../../components/TimeLineItem";
import truckIcon from "../../assets/truck-fast.svg";
import routeIcon from "../../assets/route-icon.svg";
import boxIcon from "../../assets/box.svg";
import map from "../../assets/map.png";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import humidityIcon from "../../assets/humidityIcon.svg";
import tempIcon from "../../assets/tempIcon.svg";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Tooltip } from "flowbite-react";
import closeIcon from "../../assets/closeIcon.svg";

function DetailsModal({
  setIsRecommendationOpen,
  setIsDetailsOpen,
  setData,
  setLoadingAiData,
}) {
  const [sensorData, setSensorData] = useState([]);
  const queryUrl =
    "https://api.studio.thegraph.com/query/57950/iotbase/version/latest";

  const client = new ApolloClient({
    uri: queryUrl,
    cache: new InMemoryCache(),
  });

  const getSensorData = gql`
    query {
      updates {
        id
        sensor
        temperature
        humidity
      }
    }
  `;

  const handleAiPrompt = async (e) => {
    e.preventDefault();

    setLoadingAiData(true);
    const prompt = `with humidity of ${
      sensorData[sensorData.length - 1]?.humidity / 1000
    } and temperature of ${
      sensorData[sensorData.length - 1]?.temperature / 1000
    } what can be the condition of beans planted in western Africa, provide bullet points for a novice farmer to take note.`;

    const response = await fetch("https://privy-proof-api.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      setLoadingAiData(false);
      alert(json);
    }

    if (response.ok) {
      setLoadingAiData(false);
      setData(json.data.content);
    }
  };

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const { data } = await client.query({ query: getSensorData });

        console.log(data);

        setSensorData(
          data.updates
            .map((update, i) => {
              return {
                ...update,
                time: i * 12,
              };
            })
            .sort((a, b) => a.time - b.time)
        );
        console.log(
          data.updates.map((update, i) => {
            return {
              ...update,
              time: i * 12,
            };
          })
        );
      } catch (error) {
        console.log("unable to fetch data", error);
      }
    };

    fetchSensorData();

    return () => {};
  }, [client, getSensorData]);

  return (
    <div className="absolute inset-0 flex justify-center text-white  pt-[120px] bg-white bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white shadow-md flex flex-col items-center rounded-[5px] p-10 w-[856px] h-fit relative">
        <button
          className="absolute top-[9px] right-4"
          onClick={() => {
            setIsDetailsOpen(false);
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
        <div className="bg-[#4BAF47] w-full rounded-[6px] py-[27px] px-[35px]">
          <h5 className="font-semibold text-xs leading-[18px] mb-2">
            Current Location
          </h5>
          <h5 className="font-semibold text-xs leading-[18px] mb-3">
            Jos Nigeria,
          </h5>
          <div className="bg-white text-[#121212] mb-3 w-full py-[8.5px] font-bold text-base leading-[21px] flex justify-center gap-x-[18px]">
            <div className="flex items-center gap-x-[18px]">
              <img src={humidityIcon} alt="" />
              <div>
                <h3 className="font font-extrabold text-base leading-6 text-[#121212]">
                  Humidity -
                  <span className="text-[#4BAF47]">
                    {sensorData &&
                      sensorData.length > 0 &&
                      sensorData[sensorData.length - 1]?.humidity / 1000}
                    `
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-[18px]">
              <img src={tempIcon} alt="" />
              <h2 className="font font-extrabold text-base leading-6 text-[#121212]">
                Temperature -{" "}
                <span className="text-[#4BAF47]">
                  {sensorData &&
                    sensorData.length > 0 &&
                    sensorData[sensorData.length - 1]?.temperature / 1000}
                  &deg;
                </span>
              </h2>
            </div>
          </div>
          <h3 className="font-bold text-base leading-[24px] mb-[6px]">
            B5799585GDKE8
          </h3>
          <h6 className="text-[10px] leading-[15px]">Truck 206, 89 crates</h6>
        </div>
        <div className="flex items-center justify-between w-full mt-[25px]">
          <h2 className="font-semibold text-xl leading-[30px] text-[#121212]">
            Analytics
          </h2>
          <button
            className="flex items-center gap-x-[9px] font-semibold text-sm leading-[21px] text-[#559C2A]"
            onClick={(e) => {
              setIsDetailsOpen(false);
              setIsRecommendationOpen(true);
              handleAiPrompt(e);
            }}
          >
            Get Recommendation <img src={rightArrRed} alt="" />
          </button>
        </div>
        <div className="'w-full px-[75px]">
          <div className="w-[614px] mx-auto mt-3 mb-5 h-[217px] bg-[#f5f5f5]">
            <AreaChart
              width={614}
              height={217}
              data={sensorData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="humidity"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
          <ul className="flex flex-col gap-y-3 text-xl leading-6 text-black list-disc pl-6 mb-[33px]">
            <li>
              Growing degree days GDD :{" "}
              <span className="font-bold text-[#4BAF47]">
                {sensorData.length === 0
                  ? "0"
                  : (
                      ((sensorData?.sort(
                        (a, b) => b.temperature - a.temperature
                      )[0].temperature +
                        sensorData?.sort(
                          (a, b) => a.temperature - b.temperature
                        )[0].temperature) /
                        2 -
                        10000) /
                      1000
                    ).toLocaleString()}
              </span>
            </li>
            <li>
              30 days Humidity risk:{" "}
              <span className="font-bold text-[#4BAF47]">Moderate</span>
            </li>
          </ul>
        </div>
        <button
          className="py-[14px] w-[397px] bg-[#F5F5F5] font-bold text-sm leading-[30px] text-[#4BAF47] rounded-[10px] mx-auto"
          onClick={(e) => {
            setIsDetailsOpen(false);
            setIsRecommendationOpen(true);
            handleAiPrompt(e);
          }}
        >
          Get free Ai recommendation
        </button>
      </div>
    </div>
  );
}

export default DetailsModal;
