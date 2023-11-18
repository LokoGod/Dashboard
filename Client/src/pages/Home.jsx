import React from "react";

// Import State
import { useState } from "react";

// Import Data
import { UserData } from "../Data/data";

// Import UI
import Linechart from "../components/other_ui/Linechart";
import Stat from "../components/other_ui/Stat";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="w-full md:w-2/3 lg:w-3/4 px-4">
              {/* Your main content goes here */}
              <div className="mx-auto text-center mb-10">
                <Stat />
              </div>
              <div className="card max-w-screen-md mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <div className="w-full">
                    <Linechart chartData={userData} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
