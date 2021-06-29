import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const NavContent = () => {
  return (
    <div className="nav nav-main py-2">
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <span>
              <HiTrendingUp size="1em" color="#E08B0A" />
            </span>
            &nbsp;
            <span>SPORTS INDEX</span>
          </div>
          <div className="col-6">
            <div className="input-group nav-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search players or Teams"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text px-4" id="basic-addon2">
                <FiSearch size="1.2em" color="#FFFFFF" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
