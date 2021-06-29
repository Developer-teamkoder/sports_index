import React from "react";
import per100posSeason from "../../../../localdata/per100posSeason.json";

const Per100Pos = ({ tablePer100pos, show }) => {
  return (
    <table className="per100-table">
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
        </tr>
        <tr>
          <th scope="col">Season</th>
         

          {show ? <th scope="col">Age</th> : ""}

          <th scope="col">Tm</th>

          {show ? <th scope="col">Pos</th> : ""}

          <th scope="col">G</th>

          {show ? <th scope="col">Gs</th> : ""}
          <th scope="col">MP</th>
          <th scope="col">3P</th>
          <th scope="col">3PA</th>
          <th scope="col">3P%</th>
          <th scope="col">2P</th>
          <th scope="col">2PA</th>
          <th scope="col">2P%</th>
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
        {tablePer100pos.map((item, i) => {
          return (
            <tr key={i}>
             <td style={{ background: "#ececec" }}>{item.season}</td>
               
              {show ? <td>{item.age}</td> : ""}

<td>{item.tm}</td>

{show ? <td>{item.pos}</td> : ""}

<td>{item.g}</td>

{show ? <td>{item.gs}</td> : ""}
              <td>{item.mp}</td>
              <td>{item.threeP}</td>
              <td>{item.threePa}</td>
              <td>{item.threePPer}</td>
              <td>{item.twoP}</td>
              <td>{item.twoPa}</td>
              <td>{item.twoPPer}</td>
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
          <td>Career</td>
          {show ? <td></td> : ""}
          <td></td>
          {show ? <td></td> : ""} 
          <td>1310</td>
          {show ? <td>1309</td> : ""} 
          <td>38.2</td>
          <td>2</td>
          <td>5.9</td>
          <td>0.345</td>
          <td>11.3</td>
          <td>20.6</td>
          <td>0.55 </td>
          <td>7.8</td>
          <td>10.7</td>
          <td>0.733</td>
          <td>1.6</td>
          {show ? <td>8.5</td> : ""} 
          {show ? <td>10.1</td> : ""} 
          <td>10</td>
          <td>2.1</td>
          <td>1</td>
          <td>4.8</td>
          <td>2.5</td>
          <td>36.6</td>
        </tr>
        <tr>
          <td colSpan={26} className="py-3"></td>
        </tr>
        {per100posSeason.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.season}</td>
              
              {show ? <td>{item.age}</td> : ""}
              <td>{item.tm}</td>
              {show ? <td>{item.pos}</td> : ""}
              <td>{item.g}</td>
              {show ? <td>{item.gs}</td> : ""}
              <td>{item.mp}</td>
              <td>{item.thrP}</td>
              <td>{item.thrPa}</td>
              <td>{item.thr3per}</td>
              <td>{item.twoP}</td>
              <td>{item.twoPa}</td>
              <td>{item.twoPper}</td>
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

export default Per100Pos;
