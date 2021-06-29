import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IoTrophy } from "react-icons/io5";

const PointsChart = ({ graphPoints }) => {
  const [state] = useState({
    series: [
      {
        name: "3 PTS",
        data: graphPoints.threePtsData,
      },
      {
        name: "2 PTS",
        data: graphPoints.twoPtsData,
      },
      {
        name: "FT",
        data: graphPoints.ftData,
      },
    ],
    options: {
      colors: ["#3E8AE4", "#EF950D", "#FFC90C"],
      legend: {
        show: false,
      },
      width: "100%",
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
      },
      chart: {
        animations: {
          enabled: false,
        },
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            labels: {
              show: false,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "2002-03",
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
        },
      },
      fill: {
        opacity: 1,
      },
    },
  });

  const totalRewards = () => {
    let rows = [];
    for (let i = 0; i < state.series[0].data.length; i++) {
      rows.push(
        <div key={i}>
          {[9, 10, 12, 16].includes(i) ? (
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
    <div id="chart" className="mb-3 point-chart">
      <div className="home-player-graph-header d-flex">
        <div className="col-2">
          <span>Games</span>
          <span>{graphPoints.games}</span>
        </div>
        <div className="col-2">
          <span>PTS</span>
          <span>{graphPoints.pts}</span>
        </div>
        <div className="col-3">
          <span>2pts</span>
          <span>
            {graphPoints.twoPts} * 2 = {(graphPoints.twoPts * 2).toFixed(1)}
          </span>
        </div>
        <div className="col-3">
          <span>3pts</span>
          <span>
            {graphPoints.twoPts} * 3 = {(graphPoints.twoPts * 3).toFixed(1)}
          </span>
        </div>
        <div className="col-2">
          <span>Ft</span>
          <span>
            {graphPoints.ft} * 1 = {(graphPoints.ft * 1).toFixed(1)}{" "}
          </span>
        </div>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
      <div className="home-graph-rewards mx-2 w-100">
        <div className="mx-3 d-flex">{totalRewards()}</div>
      </div>
      <div className="home-graph-title mx-2 w-100">
        <div className="mx-3 d-flex mt-4">
          <div style={{ width: "50%" }}>
            <div>CLE</div>
          </div>
          <div style={{ width: "25%" }}>
            <div>MIA</div>
          </div>
          <div style={{ width: "12%" }}>
            <div>CLE</div>
          </div>
          <div style={{ width: "13%" }}>
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
            <div>2 PTS</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>3 PTS</div>
          </div>
        </div>
        <div className="compare-player">
          <span>Compare players</span>
        </div>
      </div>
    </div>
  );
};

export default PointsChart;
