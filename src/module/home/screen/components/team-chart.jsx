import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IoTrophy } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const TeamChart = ({ graphVsTeams }) => {
  const [state] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: graphVsTeams.threePData,
      },
      {
        name: "PRODUCT B",
        data: graphVsTeams.fgData,
      },
      {
        name: "PRODUCT C",
        data: graphVsTeams.ftData,
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
    <div id="chart" className="mb-3 team-chart">
      <div className="mx-3 w-100">
        <div className="home-season-select">
          <div className="arrow-down-icon d-flex align-items-center h-100">
            <BiChevronDown />
          </div>
          <select className="border">
            <option value="allseasons">All Seasons</option>
            {graphVsTeams.season.map((item, i) => {
              return <option value={item.toLowerCase().trim()}>{item}</option>
            })}
            {/* <option value="season1">Season 1</option>
            <option value="season2">Season 2</option> */}
          </select>
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
            <div>FG</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>3P</div>
          </div>
        </div>
        <div className="compare-player">
          <span>Compare players</span>
        </div>
      </div>
    </div>
  );
};

export default TeamChart;
