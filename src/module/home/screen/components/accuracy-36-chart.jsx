import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IoTrophy } from "react-icons/io5";

const Accuracy36Chart = ({ graphAccuracy, data }) => {
  const [state] = useState({
    series: [
      {
        name: "FT%",
        data: graphAccuracy.ftPer,
      },
      {
        name: "2P%",
        data: graphAccuracy.twoPPer,
      },
      {
        name: "3P%",
        data: graphAccuracy.threePPer,
      },
    ],
    options: {
      colors: ["#FFCA10", "#EF950D", "#3E8AE4"],
      legend: {
        show: false,
      },
      chart: {
        animations: {
          enabled: false,
        },
        id: "tw",
        group: "social",
        type: "line",
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: (val) => {
            return `${val}%`;
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "2003-04",
          "2004-05",
          "2005-06",
          "2006-07",
          "2007-08",
          "2008-09",
          "2009-10",
          "2010-11",
          "2011-12",
          "2012-13",
          "2013-14",
          "2014-15",
          "2015-16",
          "2016-17",
          "2017-18",
          "2018-19",
          "2019-20",
          "2020-21",
        ],
        labels: {
          style: {
            fontSize: "8px",
            fontFamily: "Lato",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          minWidth: 10,
        },
      },
      markers: {
        size: 6,
      },

      stroke: {
        width: 3,
      },
    },
  });

  const totalRewards = () => {
    let rows = [];
    for (let i = 0; i < graphAccuracy.season.length; i++) {
      rows.push(
        <div key={i}>
          {[8, 9, 12, 16].includes(i) ? (
            <div>
              <IoTrophy />
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
    return rows;
  };

  return (
    <div id="chart-line" className="mb-3 accuracy-chart">
      <div className="home-player-graph-header d-flex">
        <div className="col-3">
          <span>Games</span>
          <span>{data.games}</span>
        </div>
        <div className="col-3">
          <span>2pts</span>
          <span>{data.twoPts}%</span>
        </div>
        <div className="col-3">
          <span>3PTS</span>
          <span>{data.threePts}%</span>
        </div>
        <div className="col-3">
          <span>Ft</span>
          <span>{data.ft}%</span>
        </div>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
      <div className="home-graph-rewards w-100">
        <div className="px-1 d-flex">{totalRewards()}</div>
      </div>
      <div className="home-graph-title w-100">
        <div className=" d-flex mt-4">
          <div style={{ width: "39%" }}>
            <div>CLE</div>
          </div>
          <div style={{ width: "22%" }}>
            <div>MIA</div>
          </div>
          <div style={{ width: "22%" }}>
            <div>CLE</div>
          </div>
          <div style={{ width: "17%" }}>
            <div>LAL</div>
          </div>
        </div>
      </div>
      <div className="home-player-graph-col-name d-flex justify-content-between mt-4 mx-3">
        <div className="column-name d-flex">
          <div className="d-flex align-items-center">
            <div></div>
            <div>FT</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>2P%</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>3P%</div>
          </div>
        </div>
        <div className="compare-player">
          <span>Compare players</span>
        </div>
      </div>
    </div>
  );
};

export default Accuracy36Chart;
