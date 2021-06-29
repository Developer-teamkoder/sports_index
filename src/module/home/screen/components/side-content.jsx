import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsHeart, BsFillInfoCircleFill } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import sidePic from "../../../../assets/img/side_pic.jpg";
import side_newspaper from "../../../../assets/img/side_newspaper.png";

const SideContent = () => {
  return (
    <div className="home-side-content">
      <div className="pt-3 pb-2">
        <span>
          <AiOutlineTwitter size="1.8em" color="#3E8AE4" />
        </span>
        &nbsp; &nbsp;
        <span className="name">James LeBorn</span>
      </div>
      <div className="border rounded px-3 py-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <span className="home-side-pic">
              <img src={sidePic} alt="" />
            </span>
            <div className="d-flex flex-column home-side-name px-2">
              <span>Martin Hawksey</span>
              <span>@mhawksey</span>
            </div>
          </div>
          <div>
            <AiOutlineTwitter size="1.2em" color="#3E8AE4" />
          </div>
        </div>
        <div className="d-flex flex-column mt-2">
          <span className="home-side-tag-1">
            Replying to @OnlineCrsLady and 4 others
          </span>
          <span className="home-side-tag-2">
            extact problem I was facing @A_L_T ...this seemed the easiest
            solution :{")"}
          </span>
          <span className="home-side-tag-1">4:06 PM - Aug 28, 2018</span>
          <div className="d-flex justify-content-between py-2">
            <div className="home-side-tag-1">
              <span>
                <span className="align-items-center">
                  <BsHeart size="1.3em" />
                </span>
                <span> 2</span>
              </span>
              &nbsp; &nbsp;
              <span className="mr-2">
                <RiUserLine size="1.4em" />
                <span>See Martin Hawksey's other Tweets</span>
              </span>
            </div>
            <span className="home-side-tag-1">
              <BsFillInfoCircleFill size="1.2em" />
            </span>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-2">
        <span>
          <HiOutlineNewspaper size="1.8em" color="#3E8AE4" />
        </span>
        &nbsp; &nbsp;
        <span className="name">In News:</span>
      </div>
      <div className="d-flex home-side-news border rounded p-3">
        <div className="home-side-news-pic">
          <img src={side_newspaper} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-between news-title">
          <span>Top Draft pick 2021</span>
          <span>6,340 viewers</span>
        </div>
      </div>
      <div className="home-side-add-block mt-4">Ad block</div>
    </div>
  );
};

export default SideContent;
