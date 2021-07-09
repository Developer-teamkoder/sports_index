import React, { useState } from "react";
import { useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
import { IoTrophy } from "react-icons/io5";
import { Bar } from "react-chartjs-2";

const PlayChart = ({ graphData, graphPoints }) => {
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
  const [rebound, setRebound] = useState([]);
  const [assist, setAssist] = useState([]);
  const [steal, setSteal] = useState([]);
  const [block, setBlock] = useState([]);

  useEffect(() => {
    setRebound(
      graphData.map((item) => {
        return item.trb;
      })
    );
    setAssist(
      graphData.map((item) => {
        return item.ast;
      })
    );
    setSteal(
      graphData.map((item) => {
        return item.stl;
      })
    );
    setBlock(
      graphData.map((item) => {
        return item.blk;
      })
    );
  }, [graphData]);

  const totalRewards = () => {
    let rows = [];
    for (let i = 0; i < 3; i++) {
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
      <Bar
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
          plugins: {
            datalabels: {
              display: true,
              color: "red",
            },
            legend: {
              display: false,
            },
            decimation: {
              enabled: true,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        height={100}
      />
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

export default PlayChart;
