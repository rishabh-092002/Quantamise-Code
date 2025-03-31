import React from "react";
import iot from "../assets/iot.png"

const InfoSection = () => {
  return (
    <div className="w-1/2 p-10 flex flex-col justify-center items-center">
      <img src={iot} alt="IoT Illustration" className="w-3/4" />
      <h2 className="text-2xl font-bold text-center mt-5">
        Recommendation engine, helps decipher your IOT problem
      </h2>
      <div className="flex mt-6 space-x-2">
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-orange-300 rounded-full"></span>
        <span className="w-3 h-3 bg-orange-200 rounded-full"></span>
      </div>
      <p className="mt-7 text-sm text-gray-500">
        Having Trouble?{" "}
        <a href="/help" className="underline">
          Get Help
        </a>
      </p>
    </div>
  );
};

export default InfoSection;
