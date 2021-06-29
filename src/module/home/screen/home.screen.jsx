import React, { useEffect, useState } from "react";
import { MdHome, MdNavigateNext } from "react-icons/md";
import NavContent from "./components/nav-content";
import SideContent from "./components/side-content";
import PuffLoader from "react-spinners/PuffLoader";
import "../../../assets/scss/nav.scss";
import HeaderContent from "./components/header-content";
import PlayerContent from "./components/player-content";
import globalConfig from "../../../config/config";

const HomeScreen = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${globalConfig.baseURL}/api/users`)
      .then((res) => res.json())
      .then((result) => {
        console.log("object", result.data[0]);
        setData(result.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavContent />
      <HeaderContent />
      <div className="container">
        <div className="row">
          <div className="col-9 home-route">
            <div className="py-2 d-flex align-items-center">
              <span>
                <MdHome size="1.5em" />
              </span>
              <span>
                <MdNavigateNext size="1.5em" />
              </span>
              <span>Players</span>
              <span>
                <MdNavigateNext size="1.5em" />
              </span>
              <span>Lakers</span>
              <span>
                <MdNavigateNext size="1.5em" />
              </span>
              <span>LeBorn James</span>
            </div>
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <PuffLoader color="#0b2245" loading={loading} size={120} />
              </div>
            ) : (
              ""
            )}
            {Object.keys(data).length > 0 ? <PlayerContent data={data} /> : ""}
          </div>
          <div className="col-3 sidebar-main">
            <SideContent />
          </div>
        </div>
      </div>
    </>
  );
};

export const Home = HomeScreen;
