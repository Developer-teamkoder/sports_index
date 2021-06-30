import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BiChevronDown } from "react-icons/bi";
import player_img from "../../../../assets/img/player_img.png";
import player_brand from "../../../../assets/img/player_brand.png";
import player_country from "../../../../assets/img/player_country.png";

const DivConfChart = ({ graphHomeAway }) => {
  const [state] = useState({
    series: [
      {
        name: "PTS",
        data: graphHomeAway.pts,
      },
      {
        name: "3PM",
        data: graphHomeAway.threePm,
      },
      {
        name: "FGM",
        data: graphHomeAway.fgm,
      },
    ],
    options: {
      colors: ["#3E8AE4", "#EF950D", "#FFC90C"],
      legend: {
        show: false,
      },
      width: "50%",
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
        categories: ["Div", "Conf"],
        labels: {
          style: {
            fontSize: "12px",
            fontFamily: "Lato",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        type: "category",
        categories: ["Div", "Conf"],
        labels: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
    },
  });

  const [state2] = useState({
    series: [
      {
        name: "FGM",
        data: graphHomeAway.fgm,
      },
      {
        name: "3PM",
        data: graphHomeAway.threePm,
      },
      {
        name: "PTS",
        data: graphHomeAway.pts,
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
      xaxis: {
        type: "category",
        categories: ["Div", "Conf"],
        labels: {
          style: {
            fontSize: "12px",
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
        width: 1,
      },
    },
  });

  return (
    <div className="home-away-chart">
      <div className="mx-3 w-100">
        <div className="home-season-select">
          <div className="arrow-down-icon">
            <BiChevronDown />
          </div>
          <select className="border">
            <option value="allseasons">All Seasons</option>
            {["Season 1", "Season 2"].map((item, i) => {
              return (
                <option key={i} value={item.toLowerCase().trim()}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <div id="chart" className="mb-3 w-50">
          <div className="mx-3 w-100 mt-4">
            <span>Average points per game</span>
          </div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
          <div className="home-player-graph-col-name d-flex justify-content-between mt-4 mx-3">
            <div className="column-name d-flex">
              <div className="d-flex align-items-center">
                <div></div>
                <div>FGM</div>
              </div>
              <div className="d-flex align-items-center">
                <div></div>
                <div>3PM</div>
              </div>
              <div className="d-flex align-items-center">
                <div></div>
                <div>PTS</div>
              </div>
            </div>
          </div>
        </div>
        <div id="chart" className="mb-3 w-50">
          <div className="mx-3 w-100 mt-4">
            <span>Accuracy</span>
          </div>
          <ReactApexChart
            options={state2.options}
            series={state2.series}
            type="line"
            height={350}
          />
          <div className="home-player-graph-col-name d-flex justify-content-between mt-4 mx-3">
            <div className="column-name d-flex">
              <div className="d-flex align-items-center">
                <div></div>
                <div>FGM</div>
              </div>
              <div className="d-flex align-items-center">
                <div></div>
                <div>3PM</div>
              </div>
              <div className="d-flex align-items-center">
                <div></div>
                <div>PTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 my-5">
        <div>People also looked for: </div>
        <div className="home-away-player-img mt-3">
          <div>
            <img src={player_img} className="img-fluid" alt="" />
          </div>
          <div className="text-center">Anthony Davis</div>

          <div className="home-away-player-logo mt-4">
            <img src={player_brand} className="img-fluid" alt="" />
            <img src={player_country} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivConfChart;
