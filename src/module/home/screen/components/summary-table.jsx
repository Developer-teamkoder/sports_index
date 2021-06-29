import React from "react";
import { seasonData } from "../../../../localdata/localData";

const SummaryTable = ({ tableSummary, show }) => {
  return (
    <table className="summary-table">
      <thead>
        <tr>
          <th scopp="col"></th>
          <th scopp="col" colSpan={show ? 6 : 3}>
            GAMES
          </th>
          <th scopp="col" colSpan={3}>
            FIELD GOALS
          </th>
          <th scopp="col" colSpan={3}>
            3 POINTS
          </th>
          <th scopp="col"></th>
          <th scopp="col" colSpan={3}>
            FREE THROWS
          </th>
          <th scopp="col" colSpan={show ? 8 : 6}>
            OTHERS
          </th>
          <th scopp="col"></th>
        </tr>
        <tr>
          <th scope="col">Seasons</th>

          {show ? <th scope="col">Age</th> : ""}

          <th scope="col">Tm</th>

          {show ? <th scope="col">Pos</th> : ""}

          <th scope="col">G</th>

          {show ? <th scope="col">Gs</th> : ""}

          <th scope="col">MP</th>

          <th scope="col">FG</th>
          <th scope="col">FGA</th>
          <th scope="col">FG%</th>

          <th scope="col">3P</th>
          <th scope="col">3PA</th>
          <th scope="col">3P%</th>

          <th scope="col">EFG%</th>

          <th scope="col">FT</th>
          <th scope="col">FTA</th>
          <th scope="col">FT%</th>

          {show ? <th scope="col">ORB</th> : ""}

          {show ? <th scope="col">DRB</th> : ""}

          <th scope="col">TRB</th>
          <th scope="col">AST</th>
          <th scope="col">STL</th>
          <th scope="col">BLK</th>
          <th scope="col">TOV</th>
          <th scope="col">PF</th>
          <th scope="col">PTS</th>
        </tr>
      </thead>
      <tbody>
        {tableSummary.map((item, i) => {
          return (
            <tr key={i}>
              <td style={{ background: "#ececec" }}>{item.season}</td>

              {show ? <td>{item.age}</td> : ""}

              <td>{item.tm}</td>

              {show ? <td>{item.pos}</td> : ""}

              <td>{item.g}</td>

              {show ? <td>{item.gs}</td> : ""}

              <td>{item.mp}</td>
              <td>{item.fg}</td>
              <td>{item.fga}</td>
              <td>{item.fgPer}</td>
              <td>{item.threeP}</td>
              <td>{item.threePa}</td>
              <td>{item.threePPer}</td>
              <td>{item.efgPer}</td>
              <td>{item.ft}</td>
              <td>{item.fta}</td>
              <td>{item.ftPer}</td>
              {show ? <td>{item.orb}</td> : ""}
              {show ? <td>{item.drb}</td> : ""}
              <td>{item.trb}</td>
              <td>{item.ast}</td>
              <td>{item.stl}</td>
              <td>{item.blk}</td>
              <td>{item.tov}</td>
              <td>{item.pf}</td>
              <td>{item.pts}</td>
            </tr>
          );
        })}

        <tr>
          <td style={{ background: "#ececec" }}>Career</td>
          {show ? <td></td> : ""}
          <td></td>
          {show ? <td></td> : ""} 
          <td>1306</td>
          {show ? <td>1305</td> : ""} 
          <td>38.2</td>
          <td>8.3</td>
          <td>15.2</td>
          <td>55.00% </td>
          <td>1.5</td>
          <td>4.4</td>
          <td>34.50% </td>
          <td>54.30% </td>
          <td>5.8</td>
          <td>7.9</td>
          <td>73.40%</td>
          {show ? <td>1.2</td> : ""} 
          {show ? <td>6.3</td> : ""} 
          <td>7.4</td>
          <td>7.4</td>
          <td>1.6</td>
          <td>0.8</td>
          <td>3.5</td>
          <td>1.8</td>
          <td>27</td>
        </tr>
        <tr>
          <td colSpan={26} className="py-3"></td>
        </tr>
        {seasonData.map((item, i) => {
          return (
            <tr key={i}>
              <td style={{ background: "#ececec" }}>{item.season}</td>
             
              {show ? <td>{item.age}</td> : ""}
              <td>{item.tm}</td>
              {show ? <td>{item.pos}</td> : ""}
              <td>{item.g}</td>
              {show ? <td>{item.gs}</td> : ""}
              <td>{item.mp}</td>
              <td>{item.fg}</td>
              <td>{item.fga}</td>
              <td>{item.fgPer}</td>
              <td>{item.thrP}</td>
              <td>{item.thrPa}</td>
              <td>{item.thrPPer}</td>
              <td>{item.efgPer}</td>
              <td>{item.ft}</td>
              <td>{item.fta}</td>
              <td>{item.ftPer}</td>
              {show ? <td>{item.orb}</td> : ""}
              {show ? <td>{item.drb}</td> : ""}
              <td>{item.trb}</td>
              <td>{item.ast}</td>
              <td>{item.stl}</td>
              <td>{item.blk}</td>
              <td>{item.tov}</td>
              <td>{item.pf}</td>
              <td>{item.pts}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SummaryTable;
