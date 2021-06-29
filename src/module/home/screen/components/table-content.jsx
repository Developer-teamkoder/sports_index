import React from "react";
import { useState } from "react";
import Per100Pos from "./per100pos-table";
import Per36Pos from "./per36pos-table";
import Splits from "./splits-table";
import SummaryTable from "./summary-table";

const TableContent = ({ tableData }) => {
  const [active, setActive] = useState("summary");
  const [show, setShow] = useState(false)


  const handleShow = () => setShow(!show)

  return (
    <div className="mb-5 summary-table">
      <div className="table-menu mb-4">
        <div className="show-more-btn">
          <button onClick={handleShow}>{show ? "Show Less" : "Show More"}</button>
        </div>
        <span
          className={active === "summary" ? "active" : ""}
          onClick={() => setActive("summary")}
        >
          Summary
        </span>

        <span
          className={active === "per100" ? "active" : ""}
          onClick={() => setActive("per100")}
        >
          Per 100 pos
        </span>

        <span
          className={active === "per36" ? "active" : ""}
          onClick={() => setActive("per36")}
        >
          Per 36 mins
        </span>

        <span
          className={active === "splits" ? "active" : ""}
          onClick={() => setActive("splits")}
        >
          Splits
        </span>
      </div>
      {active === "summary" ? (
        <SummaryTable show={show} tableSummary={tableData.tableSummary} />
      ) : active === "per100" ? (
        <Per100Pos show={show} tablePer100pos={tableData.tablePer100pos} />
      ) : active === "per36" ? (
        <Per36Pos show={show} tablePer36pos={tableData.tablePer36pos} />
      ) : (
        <Splits tableSplits={tableData.tableSplits} />
      )}
      <div className="compare-player mt-4">Compare players</div>
    </div>
  );
};

export default TableContent;
