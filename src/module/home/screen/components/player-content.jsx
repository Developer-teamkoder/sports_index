import React, { useEffect, useState } from "react";
import { HiTrendingUp, HiPlay, HiChartBar } from "react-icons/hi";
import { IoTrophy } from "react-icons/io5";
import { FaEquals } from "react-icons/fa";
import player_img from "../../../../assets/img/player_img.png";
import player_brand from "../../../../assets/img/player_brand.png";
import player_country from "../../../../assets/img/player_country.png";
// import football from "../../../../assets/img/football.jpg";
import PointsChart from "./points-chart";
import AccuracyChart from "./accuracy-chart";
import TeamChart from "./team-chart";
import HomeAwayChart from "./homeAway-chart";
import TableContent from "./table-content";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Accordion } from "react-bootstrap";
import PlayChart from "./play-chart ";
import Points100Chart from "./points-100-chart";
import Points36Chart from "./points-36-chart";
import Accuracy100Chart from "./accuracy-100-chart";
import Accuracy36Chart from "./accuracy-36-chart";
import DivConfChart from "./divConf-chart";
import DaysChart from "./days-chart";

// import $ from "jquery";

const ReadMore = ({ children }) => {
  const text = children[0];
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <span>
      {isReadMore ? `${text.slice(0, 300)}... ` : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? " See full Bio" : " Skip"}
      </span>
    </span>
  );
};

// const addCommas = (digit) => {
//   let nStr = digit.toLocaleString()
//   nStr += '';
//   let x = nStr.split('.');
//   let x1 = x[0];
//   let x2 = x.length > 1 ? '.' + x[1] : '';
//   let rgx = /(\d+)(\d{3})/;
//   while (rgx.test(x1)) {
//       x1 = x1.replace(rgx, '$1' + ',' + '$2');
//   }
//   return x1 + x2;
// }

const PlayerContent = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState("points");
  const [selectMenu, setSelectMenu] = useState("graph");
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [haData, setHaData] = useState({});
  const [dcData, setDcData] = useState({});
  const [daysData, setDaysData] = useState({});
  const [vsTeamData, setVsTeamData] = useState({});
  const [summary, setSummary] = useState({});
  const [pos1, setPos1] = useState({});
  const [pos2, setPos2] = useState({});

  useEffect(() => {
    const handleGetSplits = () => {
      let b = [];
      let c = [];
      let d = [];
      for (let a of data.tableSplits) {
        if (a.dayOrTeam === "Home" || a.dayOrTeam === "Away") {
          b.push(a.fgm);
          c.push(a.threePm);
          d.push(a.pts);
        }
      }
      setHaData({
        fgm: b,
        threePm: c,
        pts: d,
      });
    };

    const handleGetDivConfSplits = () => {
      let b = [];
      let c = [];
      let d = [];
      for (let a of data.tableSplits) {
        if (a.dayOrTeam === "Div" || a.dayOrTeam === "Conf") {
          b.push(a.fgm);
          c.push(a.threePm);
          d.push(a.pts);
        }
      }
      setDcData({
        fgm: b,
        threePm: c,
        pts: d,
      });
    };

    const handleGetDaysSplits = () => {
      let b = [];
      let c = [];
      let d = [];
      let title = [];
      for (let a of data.tableSplits) {
        if (a.dayOrTeam.includes("day")) {
          b.push(a.fgm);
          c.push(a.threePm);
          d.push(a.pts);
          title.push(a.dayOrTeam);
        }
      }
      setDaysData({
        fgm: b,
        threePm: c,
        pts: d,
        title: title,
      });
    };

    const getSplitsData = () => {
      let b = [];
      let c = [];
      let d = [];
      let title = [];
      for (let a of data.tableSplits) {
        if (a.dayOrTeam.includes("vs.")) {
          b.push(a.threePm);
          c.push(a.pts);
          d.push(a.twoPts);
          title.push(a.dayOrTeam);
        }
      }
      setVsTeamData({
        threePm: b,
        pts: c,
        twoPts: d,
        title: title,
      });
    };

    const getSummaryData = () => {
      let b = [];
      let c = [];
      let d = [];
      let season = [];
      for (let a of data.tableSummary) {
        b.push(Math.round(a.fgPer));
        c.push(Math.round(a.threePPer));
        d.push(Math.round(a.efgPer));
        season.push(a.season);
      }
      setSummary({
        fgPer: b,
        threePPer: c,
        efgPer: d,
        season: season,
      });
    };

    const get100posData = () => {
      let b = [];
      let c = [];
      let d = [];
      let season = [];
      for (let a of data.tablePer100pos) {
        b.push(a.twoPPer);
        c.push(a.threePPer);
        d.push(a.ftPer);
        season.push(a.season);
      }
      setPos1({
        twoPPer: b,
        threePPer: c,
        ftPer: d,
        season: season,
      });
    };

    const get36posData = () => {
      let b = [];
      let c = [];
      let d = [];
      let season = [];
      for (let a of data.tablePer36pos) {
        b.push(a.twoPPer);
        c.push(a.threePPer);
        d.push(a.ftPer);
        season.push(a.season);
      }
      setPos2({
        twoPPer: b,
        threePPer: c,
        ftPer: d,
        season: season,
      });
    };

    get100posData();
    get36posData();
    handleGetDaysSplits();
    handleGetDivConfSplits();
    handleGetSplits();
    getSplitsData();
    getSummaryData();
  }, [
    data.tableSplits,
    data.tableSummary,
    data.tablePer100pos,
    data.tablePer36pos,
  ]);

  const openModal = (url) => {
    setVideoId(url);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="mt-3">
        <div className="d-flex px-2">
          <div>
            <div className="home-player-img">
              <img
                src={data.image || player_img}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="home-player-logo mt-3">
              <img src={player_brand} className="img-fluid" alt="" />
              <img src={player_country} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="w-100 px-3 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
              <div className="home-players-name">
                <span>{data.name}</span>
                <span>#{data.playerNo}</span>
              </div>
              <div className="home-players-tag">
                <span>
                  Small Forward, <span>LA Lakers / NBA,</span>Shoots Right
                </span>
              </div>
            </div>
            <div className="d-flex">
              <div className="home-player-info-title">
                <span>Bio:</span>
                <span></span>
              </div>
              <div className="mx-2">
                <div className="d-flex">
                  <div className="px-4 home-player-info-title">
                    <span>Height:</span>
                    <span> {data.height}</span>
                  </div>
                  <div className="home-player-info-title">
                    <span>Wt.:</span>
                    <span> {data.weight}</span>
                  </div>
                </div>
                <div className="px-4 home-player-info-title">
                  <span>Age:</span>
                  <span>
                    {" "}
                    {data.age} yrs ({data.dob}), {data.city}, {data.state}
                  </span>
                </div>
              </div>
            </div>
            <div className="home-player-info-draft mt-">
              <span>Draft:</span>
              <span>
                {" "}
                {data.startCarrerYear} - Cleveland Cavaliers (
                {new Date().getFullYear() - data.startCarrerYear} yrs
                experience)
              </span>
              <div className="home-player-info-salary mt-">
                Salary {new Date().getFullYear() - 1}-{new Date().getFullYear()}{" "}
                :&nbsp;
                <span>
                  $ {Number(data.salary).toLocaleString("en")} &nbsp;
                  <HiTrendingUp size="1em" />
                </span>
              </div>
            </div>
            <div className="home-player-info-about mt- d-flex flex-column">
              <span>About:</span>
              <ReadMore>
                {data.about} <span>Skip</span>
                <span>See full Bio</span>
              </ReadMore>
            </div>
          </div>
        </div>

        <div className="border-top mt-3">
          <div className="home-player-info-overall my-2">
            Overall
            <span>
              {" "}
              {data.startCarrerYear} - {new Date().getFullYear()} Career
            </span>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="d-flex">
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>Games</div>
                  <div>{data.totalgames}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>PTS</div>
                  <div>{data.pts}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>REB</div>
                  <div>{data.reb}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>ASST</div>
                  <div>{data.asst}</div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex w-100">
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>2P%</div>
                  <div>{data.twoPper}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>3P%</div>
                  <div>{data.threePper}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>FT%</div>
                  <div>{data.ftPer}</div>
                </div>
                <div className="col-3 border px-3 d-flex flex-column justify-content-center home-player-info-ratings">
                  <div>EFF%</div>
                  <div>{data.effPer}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-2 w-100 py-2">
          <div className="home-player-info-gameyr d-flex flex-column">
            <span>Games:&nbsp;{data.games}</span>
            <span>
              {new Date().getFullYear() - 1}&nbsp;-&nbsp;
              {new Date().getFullYear()}
            </span>
          </div>
          <div className="w-100 px-3">
            <div className="home-player-info-chart">
              <span className="border-bottom w-100"></span>
              <span className="border-bottom w-100"></span>
              <span className="border-bottom w-100"></span>
              <span className="border-bottom w-100"></span>
              <span className="border-bottom w-100"></span>
              <div className="d-flex h-100">
                <div className="w-100 h-100 d-flex align-items-end justify-content-center home-player-info-chart-column">
                  <div
                    style={{ height: `${(data.chartpoints[0] * 100) / 50}%` }}
                  >
                    <span>{data.chartpoints[0]}</span>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    style={{ height: `${(data.chartpoints[1] * 100) / 50}%` }}
                  >
                    <span>{data.chartpoints[1]}</span>
                  </div>
                </div>
                &nbsp;
                <div className="w-100 h-100 d-flex align-items-end justify-content-center home-player-info-chart-column">
                  <div
                    style={{ height: `${(data.chartrebound[0] * 100) / 10}%` }}
                  >
                    <span>{data.chartrebound[0]}</span>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    style={{ height: `${(data.chartrebound[1] * 100) / 10}%` }}
                  >
                    <span>{data.chartrebound[1]}</span>
                  </div>
                </div>
                &nbsp;
                <div className="w-100 h-100 d-flex align-items-end justify-content-center home-player-info-chart-column">
                  <div
                    style={{ height: `${(data.chartassist[0] * 100) / 10}%` }}
                  >
                    <span>{data.chartassist[0]}</span>
                  </div>
                  &nbsp; &nbsp;
                  <div
                    style={{ height: `${(data.chartassist[1] * 100) / 10}%` }}
                  >
                    <span>{data.chartassist[1]}</span>
                  </div>
                </div>
                &nbsp;
                <div className="w-100 h-100 d-flex align-items-end justify-content-center home-player-info-chart-column">
                  <div style={{ height: `${data.chartftPer[0]}%` }}>
                    <span>{data.chartftPer[0]}%</span>
                  </div>
                  &nbsp; &nbsp;
                  <div style={{ height: `${data.chartftPer[1]}%` }}>
                    <span>{data.chartftPer[1]}%</span>
                  </div>
                </div>
                &nbsp;
                <div className="w-100 h-100 d-flex align-items-end justify-content-center home-player-info-chart-column">
                  <div style={{ height: `${data.chartthreePPer[0]}%` }}>
                    <span>{data.chartthreePPer[0]}%</span>
                  </div>
                  &nbsp; &nbsp;
                  <div style={{ height: `${data.chartthreePPer[1]}%` }}>
                    <span>{data.chartthreePPer[1]}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-player-info-chart-title d-flex mt-2">
              <div className="text-center py-3">Points</div>&nbsp;&nbsp;&nbsp;
              <div className="text-center py-3">Rebound</div>&nbsp;&nbsp;&nbsp;
              <div className="text-center py-3">Assist</div>&nbsp;&nbsp;&nbsp;
              <div className="text-center py-3">FT%</div>&nbsp;&nbsp;&nbsp;
              <div className="text-center py-3">3P%</div>
            </div>
            <div className="home-player-chart-col-name d-flex justify-content-between mt-4">
              <div className="column-name d-flex">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div>Player</div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div>League Avg.</div>
                </div>
              </div>
              <div className="compare-player">
                <span>Compare players</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-player-rewards mx-3 px-4 text-white py-1 mt-4">
          <div className="py-1">
            <span className="d-flex align-items-center mx-4">
              <IoTrophy size="1em" />
            </span>
            <span>
              {data.rewards.map((item, i) => {
                return <span key={i}>{item}, </span>;
              })}
            </span>
          </div>
          <div className="home-player-rewards-btn">
            <button className="h-100 px-4">See all rewards</button>
          </div>
        </div>

        <div className="home-player-memorable  d-flex justify-content-between mt-5 mb-3 px-3">
          <span>Memorable Videos</span>
          <span>Show more</span>
        </div>

        <div className="mx-3 my-3">
          <div className="row home-player-memorable-video">
            {data.videos.map((item, i) => {
              return (
                <div className="col-3 px-1" key={i}>
                  <div>
                    <div onClick={() => openModal(item.url)}>
                      <HiPlay color="#fff" size="3.5em" />
                    </div>
                    <img className="img-fluid h-100" src={item.poster} alt="" />
                  </div>
                  <div className="mt-2">{item.title}</div>
                </div>
              );
            })}

            {/* <div className="col-3 px-1">
              <div>
                <div>
                  <HiPlay color="#fff" size="3.5em" />
                </div>
                <img className="img-fluid h-100" src={football} alt="" />
              </div>
              <div className="mt-2">Lebrons highlights </div>
            </div>
            <div className="col-3 px-1">
              <div>
                <div>
                  <HiPlay color="#fff" size="3.5em" />
                </div>
                <img className="img-fluid h-100" src={football} alt="" />
              </div>
              <div className="mt-2">Lebrons highlights</div>
            </div>
            <div className="col-3 px-1">
              <div>
                <div>
                  <HiPlay color="#fff" size="3.5em" />
                </div>
                <img className="img-fluid h-100" src={football} alt="" />
              </div>
              <div className="mt-2">Lebrons highlights</div>
            </div>
          */}
          </div>
        </div>

        <div className="mx-3 my-3">
          <div className="row home-player-info-menu mt-5 ">
            <div className="col-4 py-2 active">NBA Career</div>
            <div className="col-4 py-2">Play Offs</div>
            <div className="col-4 py-2">Income</div>
          </div>
        </div>

        <div className="mx-3 mt-3 mb-5">
          <div className="row justify-content-center home-player-info-submenu">
            <div
              className={
                selectMenu === "graph"
                  ? "col-2 active py-2 text-center d-flex align-items-center justify-content-center"
                  : "col-2 py-2 text-center d-flex align-items-center justify-content-center"
              }
              onClick={() => setSelectMenu("graph")}
            >
              <span>
                <HiChartBar size="1.2em" />
              </span>
              <span>Graph</span>
            </div>
            <div
              className={
                selectMenu === "table"
                  ? "col-2 active py-2 text-center d-flex align-items-center justify-content-center"
                  : "col-2 py-2 text-center d-flex align-items-center justify-content-center"
              }
              onClick={() => setSelectMenu("table")}
            >
              {" "}
              <span>
                <FaEquals size="1.2em" />
              </span>
              <span>TABLE</span>
            </div>
          </div>
        </div>
        {selectMenu === "graph" ? (
          <div className="mt-3 mb-5 home-player-graph-main">
            <div className="d-flex">
              <div className="home-player-graph-sidebar">
                <Accordion defaultActiveKey="0">
                  <Accordion.Toggle
                    variant="link"
                    eventKey="0"
                    style={{
                      textAlign: "left",
                      border: "1px solid #dddcdc",
                      background: "#ebebeb",
                      color: "#838383",
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontSize: "13px",
                      padding: "6px 8px",
                      width: "100%",
                    }}
                  >
                    Summary
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div className="d-flex flex-column side-menus">
                      <span
                        className={activeMenu === "points" ? "active" : ""}
                        onClick={() => setActiveMenu("points")}
                      >
                        Points
                      </span>
                      <span
                        className={activeMenu === "accuracy" ? "active" : ""}
                        onClick={() => setActiveMenu("accuracy")}
                      >
                        Accuracy
                      </span>
                      <span
                        className={activeMenu === "play" ? "active" : ""}
                        onClick={() => setActiveMenu("play")}
                      >
                        Play
                      </span>
                    </div>
                  </Accordion.Collapse>

                  <Accordion.Toggle
                    variant="link"
                    eventKey="1"
                    style={{
                      textAlign: "left",
                      border: "1px solid #dddcdc",
                      background: "#ebebeb",
                      color: "#838383",
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontSize: "13px",
                      padding: "6px 8px",
                      width: "100%",
                    }}
                  >
                    Per&nbsp;100&nbsp;Possessions
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <div className="d-flex flex-column side-menus">
                      <span
                        className={activeMenu === "points1" ? "active" : ""}
                        onClick={() => setActiveMenu("points1")}
                      >
                        Points
                      </span>
                      <span
                        className={activeMenu === "accuracy1" ? "active" : ""}
                        onClick={() => setActiveMenu("accuracy1")}
                      >
                        Accuracy
                      </span>
                      <span
                        className={activeMenu === "play1" ? "active" : ""}
                        onClick={() => setActiveMenu("play1")}
                      >
                        Play
                      </span>
                    </div>
                  </Accordion.Collapse>

                  <Accordion.Toggle
                    variant="link"
                    eventKey="2"
                    style={{
                      textAlign: "left",
                      border: "1px solid #dddcdc",
                      background: "#ebebeb",
                      color: "#838383",
                      fontFamily: "Lato",
                      fontWeight: "bold",
                      fontSize: "13px",
                      padding: "6px 8px",
                      width: "100%",
                    }}
                  >
                    Per&nbsp;36&nbsp;Possessions
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <div className="d-flex flex-column side-menus">
                      <span
                        className={activeMenu === "points2" ? "active" : ""}
                        onClick={() => setActiveMenu("points2")}
                      >
                        Points
                      </span>
                      <span
                        className={activeMenu === "accuracy2" ? "active" : ""}
                        onClick={() => setActiveMenu("accuracy2")}
                      >
                        Accuracy
                      </span>
                      <span
                        className={activeMenu === "play2" ? "active" : ""}
                        onClick={() => setActiveMenu("play2")}
                      >
                        Play
                      </span>
                    </div>
                  </Accordion.Collapse>
                </Accordion>

                {/* <span className="title">SUMMARY</span>

                <span
                  className={activeMenu === "points" ? "active" : ""}
                  onClick={() => setActiveMenu("points")}
                >
                  Points
                </span>
                <span
                  className={activeMenu === "accuracy" ? "active" : ""}
                  onClick={() => setActiveMenu("accuracy")}
                >
                  Accuracy
                </span>
                <span>Play</span>
                <span>Per&nbsp;100&nbsp;Possessions</span>
                <span>Per&nbsp;36&nbsp;minutes&nbsp;played</span>
*/}

                <div className="d-flex flex-column">
                  <span className="title">Splits</span>
                  <span
                    className={activeMenu === "teams" ? "active" : ""}
                    onClick={() => setActiveMenu("teams")}
                  >
                    V/S teams
                  </span>
                  <span
                    className={activeMenu === "home-away" ? "active" : ""}
                    onClick={() => setActiveMenu("home-away")}
                  >
                    Home vs away
                  </span>
                  <span
                    className={activeMenu === "div-conf" ? "active" : ""}
                    onClick={() => setActiveMenu("div-conf")}
                  >
                    Div vs Conf
                  </span>

                  <span
                    className={activeMenu === "days" ? "active" : ""}
                    onClick={() => setActiveMenu("days")}
                  >
                    Days rest
                  </span>
                </div>
              </div>
              <div className="w-100 px-1">
                {activeMenu === "points" ? (
                  <PointsChart graphPoints={data.graphPoints} />
                ) : activeMenu === "points1" ? (
                  <Points100Chart graphPoints={data.graph100Points} />
                ) : activeMenu === "points2" ? (
                  <Points36Chart graphPoints={data.graph36Points} />
                ) : activeMenu === "accuracy" ? (
                  <AccuracyChart
                    graphAccuracy={summary}
                    data={data.graphAccuracy}
                  />
                ) : activeMenu === "accuracy1" ? (
                  <Accuracy100Chart
                    graphAccuracy={pos1}
                    data={data.graph100Accuracy}
                  />
                ) : activeMenu === "accuracy2" ? (
                  <Accuracy36Chart
                    graphAccuracy={pos2}
                    data={data.graph36Accuracy}
                  />
                ) : activeMenu === "teams" ? (
                  <TeamChart graphVsTeams={vsTeamData} />
                ) : activeMenu === "home-away" ? (
                  <HomeAwayChart graphHomeAway={haData} />
                ) : activeMenu === "div-conf" ? (
                  <DivConfChart graphHomeAway={dcData} />
                ) : activeMenu === "days" ? (
                  <DaysChart graphHomeAway={daysData} />
                ) : (
                  <PlayChart
                    graphPoints={data.graphPoints}
                    graphData={
                      activeMenu === "play"
                        ? data.tableSummary
                        : activeMenu === "play1"
                        ? data.tablePer100pos
                        : data.tablePer36pos
                    }
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <TableContent tableData={data} />
        )}
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={closeModal}
      />
    </>
  );
};

export default PlayerContent;
