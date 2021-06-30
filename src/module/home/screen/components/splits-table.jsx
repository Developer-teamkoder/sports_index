import React, { useState } from "react";
import { useEffect } from "react";

const Splits = ({ tableSplits }) => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [four, setFour] = useState([]);

  useEffect(() => {
    const a = tableSplits.filter((i) => {
      if (i.dayOrTeam === "Home" || i.dayOrTeam === "Away") {
        return i;
      } else {
        return false;
      }
    });
    const b = tableSplits.filter((i) => {
      if (i.dayOrTeam === "Div" || i.dayOrTeam === "Conf") {
        return i;
      } else {
        return false;
      }
    });
    const c = tableSplits.filter((i) => {
      if (
        i.dayOrTeam === "Home" ||
        i.dayOrTeam === "Away" ||
        i.dayOrTeam === "Div" ||
        i.dayOrTeam === "Conf" ||
        i.dayOrTeam.includes("day")
      ) {
        return false;
      } else {
        return i;
      }
    });

    const d = tableSplits.filter((i) => {
      if (i.dayOrTeam.includes("day")) {
        return i;
      } else {
        return false;
      }
    });
    setFirst(a);
    setSecond(b);
    setThird(c);
    setFour(d);
  }, [tableSplits]);

  return (
    <>
      <table className="splits-table mb-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">G</th>
            <th scope="col">Min</th>
            <th scope="col">FGM</th>
            <th scope="col">FGA</th>
            <th scope="col">FG%</th>
            <th scope="col">3PM</th>
            <th scope="col">3PA</th>
            <th scope="col">3P%</th>
            <th scope="col">FTM</th>
            <th scope="col">FTA</th>
            <th scope="col">FT%</th>
            <th scope="col">OR</th>
            <th scope="col">DR</th>
            <th scope="col">Reb</th>
            <th scope="col">Ast</th>
            <th scope="col">TO</th>
            <th scope="col">Stl</th>
            <th scope="col">Blk</th>
            <th scope="col">PF</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {first.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{ background: "#ececec" }}>{item.dayOrTeam}</td>
                <td>{item.g}</td>
                <td>{item.min}</td>
                <td>{item.fgm}</td>
                <td>{item.fga}</td>
                <td>{item.fgPer}</td>
                <td>{item.threePm}</td>
                <td>{item.threePa}</td>
                <td>{item.threePPer}</td>
                <td>{item.ftm}</td>
                <td>{item.fta}</td>
                <td>{item.ftPer}</td>
                <td>{item.or}</td>
                <td>{item.dr}</td>
                <td>{item.reb}</td>
                <td>{item.ast}</td>
                <td>{item.to}</td>
                <td>{item.stl}</td>
                <td>{item.blk}</td>
                <td>{item.pf}</td>
                <td>{item.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="splits-table mb-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">G</th>
            <th scope="col">Min</th>
            <th scope="col">FGM</th>
            <th scope="col">FGA</th>
            <th scope="col">FG%</th>
            <th scope="col">3PM</th>
            <th scope="col">3PA</th>
            <th scope="col">3P%</th>
            <th scope="col">FTM</th>
            <th scope="col">FTA</th>
            <th scope="col">FT%</th>
            <th scope="col">OR</th>
            <th scope="col">DR</th>
            <th scope="col">Reb</th>
            <th scope="col">Ast</th>
            <th scope="col">TO</th>
            <th scope="col">Stl</th>
            <th scope="col">Blk</th>
            <th scope="col">PF</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {four.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{ background: "#ececec" }}>{item.dayOrTeam}</td>
                <td>{item.g}</td>
                <td>{item.min}</td>
                <td>{item.fgm}</td>
                <td>{item.fga}</td>
                <td>{item.fgPer}</td>
                <td>{item.threePm}</td>
                <td>{item.threePa}</td>
                <td>{item.threePPer}</td>
                <td>{item.ftm}</td>
                <td>{item.fta}</td>
                <td>{item.ftPer}</td>
                <td>{item.or}</td>
                <td>{item.dr}</td>
                <td>{item.reb}</td>
                <td>{item.ast}</td>
                <td>{item.to}</td>
                <td>{item.stl}</td>
                <td>{item.blk}</td>
                <td>{item.pf}</td>
                <td>{item.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="splits-table mb-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">G</th>
            <th scope="col">Min</th>
            <th scope="col">FGM</th>
            <th scope="col">FGA</th>
            <th scope="col">FG%</th>
            <th scope="col">3PM</th>
            <th scope="col">3PA</th>
            <th scope="col">3P%</th>
            <th scope="col">FTM</th>
            <th scope="col">FTA</th>
            <th scope="col">FT%</th>
            <th scope="col">OR</th>
            <th scope="col">DR</th>
            <th scope="col">Reb</th>
            <th scope="col">Ast</th>
            <th scope="col">TO</th>
            <th scope="col">Stl</th>
            <th scope="col">Blk</th>
            <th scope="col">PF</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {second.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{ background: "#ececec" }}>{item.dayOrTeam}</td>
                <td>{item.g}</td>
                <td>{item.min}</td>
                <td>{item.fgm}</td>
                <td>{item.fga}</td>
                <td>{item.fgPer}</td>
                <td>{item.threePm}</td>
                <td>{item.threePa}</td>
                <td>{item.threePPer}</td>
                <td>{item.ftm}</td>
                <td>{item.fta}</td>
                <td>{item.ftPer}</td>
                <td>{item.or}</td>
                <td>{item.dr}</td>
                <td>{item.reb}</td>
                <td>{item.ast}</td>
                <td>{item.to}</td>
                <td>{item.stl}</td>
                <td>{item.blk}</td>
                <td>{item.pf}</td>
                <td>{item.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="splits-table mb-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">G</th>
            <th scope="col">Min</th>
            <th scope="col">FGM</th>
            <th scope="col">FGA</th>
            <th scope="col">FG%</th>
            <th scope="col">3PM</th>
            <th scope="col">3PA</th>
            <th scope="col">3P%</th>
            <th scope="col">FTM</th>
            <th scope="col">FTA</th>
            <th scope="col">FT%</th>
            <th scope="col">OR</th>
            <th scope="col">DR</th>
            <th scope="col">Reb</th>
            <th scope="col">Ast</th>
            <th scope="col">TO</th>
            <th scope="col">Stl</th>
            <th scope="col">Blk</th>
            <th scope="col">PF</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {third.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{ background: "#ececec" }}>{item.dayOrTeam}</td>
                <td>{item.g}</td>
                <td>{item.min}</td>
                <td>{item.fgm}</td>
                <td>{item.fga}</td>
                <td>{item.fgPer}</td>
                <td>{item.threePm}</td>
                <td>{item.threePa}</td>
                <td>{item.threePPer}</td>
                <td>{item.ftm}</td>
                <td>{item.fta}</td>
                <td>{item.ftPer}</td>
                <td>{item.or}</td>
                <td>{item.dr}</td>
                <td>{item.reb}</td>
                <td>{item.ast}</td>
                <td>{item.to}</td>
                <td>{item.stl}</td>
                <td>{item.blk}</td>
                <td>{item.pf}</td>
                <td>{item.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Splits;
