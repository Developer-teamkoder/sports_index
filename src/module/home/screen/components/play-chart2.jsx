import React, { useState, useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
import { IoTrophy } from "react-icons/io5";
import ReactApexChart from "react-apexcharts";

const PlayChart2 = ({ graphData, graphPoints }) => {
  console.log("graphData2", graphData)
  const [labels] = useState([
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
  ]);

  const [state] = useState({
    series: [
      {
        name: "Rebound",
        type: "column",
        data: graphData.trb,
      },
      {
        name: "Assist",
        type: "column",
        data: graphData.ast,
      },
      {
        name: "Steal",
        type: "column",
        data: graphData.stl,
      },
      {
        name: "Block",
        type: "column",
        data: graphData.blk,
      }
    ],
    options: {
      colors: [
        "rgb(62, 138, 228)",
        "rgb(237, 125, 49)",
        "rgb(165, 165, 165)",
        "rgb(255, 192, 0)",
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: "8px",
            fontFamily: "Lato",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: [
        {
          labels: {
            show: false,
          },
        },
      ],
      tooltip: {
        fixed: {
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
        show: false,
      },
    },
  });

  useEffect(() => {
    // setRebound(
    //   graphData.map((item) => {
    //     return item.trb;
    //   })
    // );
    // setAssist(
    //   graphData.map((item) => {
    //     return item.ast;
    //   })
    // );
    // setSteal(
    //   graphData.map((item) => {
    //     return item.stl;
    //   })
    // );
    // setBlock(
    //   graphData.map((item) => {
    //     return item.blk;
    //   })
    // );
  }, []);

  const totalRewards = () => {
    let rows = [];
    for (let i = 0; i < 18; i++) {
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
      {/* <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Rebound",
              data: rebound,
              backgroundColor: "rgb(62, 138, 228)",
            },
            {
              label: "Assist",
              data: assist,
              backgroundColor: "rgb(237, 125, 49)",
            },
            {
              label: "Steal",
              data: steal,
              backgroundColor: "rgb(165, 165, 165)",
            },
            {
              showLine: false,
              label: "Block",
              data: block,
              backgroundColor: "rgb(255, 192, 0)",
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                display: false,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                scaleFontSize: 40,
                ticks: {
                  fontSize: "1px",
                },
              },
            ],
          },
          plugins: {
            datalabels: {
              display: false,
            },
            decimation: {
              enabled: true,
            },
            legend: {
              display: false,
              labels: {
                fontSize: "1px",
              },
            },
          },
          // plugins: {
          //   datalabels: {
          //     display: false,
          //     color: "red",
          //   },
          //   legend: {
          //     display: false,
          //     labels: {
          //       fontSize: 1,
          //     },
          //   },
          //   decimation: {
          //     enabled: true,
          //   },
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //     yAxes: [
          //       {
          //         ticks: {
          //           fontSize: 10,
          //         },
          //       },
          //     ],
          //   },
          // },
        }}
        height={100}
      /> */}
      <div className="home-graph-rewards mx-2 w-100">
        <div className="mx-3 d-flex">{totalRewards()}</div>
      </div>
      <div className="home-graph-title mx-2 w-100">
        <div className="mx-3 d-flex mt-4">
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
        <div className="column-name-2 d-flex">
          <div className="d-flex align-items-center">
            <div></div>
            <div>Rebound</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>Assist</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>Steal</div>
          </div>
          <div className="d-flex align-items-center">
            <div></div>
            <div>Block</div>
          </div>
        </div>
        <div className="compare-player">
          <span>Block</span>
        </div>
      </div>
    </div>
  );
};

export default PlayChart2;
