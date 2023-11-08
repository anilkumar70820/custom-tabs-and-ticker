import React, { useState } from "react";

export const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (Index) => {
    setActiveTab(Index);
  };

  const tabData = [
    {
      label: "Tab 1",
      content:
        "Content for Tab 1 Lorem ipsum, dolor sit amet consectetur adipisicing borum expedita architecto, quidem voluptatibus odio quas nemo, voluptas doloribus quaerat aperiam dignissimos elit. Consequatur laborum expedita architecto, quidem voluptatibus odio quas nemo, voluptas doloribus quaerat aperiam dignissimos sunt placeat, repellendus reprehenderit ex facilis maiores minus et ullam sapiente nisi. Illo nesciunt asperiores, excepturi assumenda corrupti ducimus repellendus suscipit repudiandae ea aliquid harum minima aspernatur eligendi!",
    },
    {
      label: "Tab 2",
      content: "Content for Tab 2 Lorem ipsum, dolor sit amet c!",
    },
    {
      label: "Tab 3",
      content:
        "isicing elit. Consequatur laonsectetur adipisicing elit. Consequatur laborum expedita architecto, quidem voluptatibus odio quas nemo, voluptas doloribus quaerat aperiam dignissimos sunt placeat, repellendus reprehenderit ex facilis maiores minus et ullam sapiente nisi. Illo nesciunt asperiores, excepturi assumenda corrupti ducimus repellendus suscipit repudiandae ea aliquid harum minima aspernatur eligendi  sunt placeat, repellendus reprehenderit ex facilis maiores minus et ullam sapiente nisi. Illo nesciunt asperiores, excepturi assumenda corrupti ducimus repellendus suscipit repudiandae ea aliquid harum minima aspernatur eligendi!",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="p-4 text-center content_height overflow-scroll">
          {tabData[activeTab].content}
        </div>
        <div className="d-flex justify-content-center my-5">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`p-2 mx-1 border-warning ${
                activeTab === index
                  ? "bg-warning p-3 rounded-4 text-black fw-bold"
                  : "bg-white rounded-4 p-3 fw-bold"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
