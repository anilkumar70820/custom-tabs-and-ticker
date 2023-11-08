import React, { useState } from "react";
import ImageOne from "../assets/images/png/Rectangle 3463863.png";
import ImageTwo from "../assets/images/png/Rectangle 3463864.png";
import ImageThree from "../assets/images/png/Rectangle 3463865.png";
import bigimg_1 from "../assets/images/png/b1.png";
import bigimg_2 from "../assets/images/png/b2.png";
import bigimg_3 from "../assets/images/png/b3.png";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to hold the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab when a tab is clicked
  };

  return (
    <div className="container">
      <div className="tab-content d-flex flex-column align-items-center">
        {activeTab === "tab1" && <img className="img w-100 rounded-2" src={bigimg_3} alt="ImageOne" />}
        {activeTab === "tab2" && <img className="img w-100 rounded-2" src={bigimg_1} alt="ImageOne" />}
        {activeTab === "tab3" && <img className="img w-100 rounded-2" src={bigimg_2} alt="ImageOne" />}
      </div>
      <div className="tab-buttons d-flex justify-content-center my-5 gap-sm-4 gap-2">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`border-0 bg-transparent p-0 ${activeTab === "tab1" ? "active img_shadow rounded-2 bg-transparent" : ""}`}
        >
          <img className="btns" src={ImageOne} alt="ImageOne" />
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`border-0 bg-transparent p-0 ${activeTab === "tab2" ? "active img_shadow rounded-2 bg-transparent" : ""}`}
        >
          <img className="btns" src={ImageTwo} alt="ImageOne" />
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={`border-0 bg-transparent p-0 ${activeTab === "tab3" ? "active img_shadow rounded-2 bg-transparent" : ""}`}
        >
          <img className="btns" src={ImageThree} alt="ImageOne" />
        </button>
      </div>
    </div>
  );
};

export default CustomTab;
