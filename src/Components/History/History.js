import React, { useState } from "react";
import "./History.css";
import Table from "../Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function History() {
  const [admin, setAdmin] = useState(true);
  const [editor, setEditor] = useState(true);
  const [personality, setPesonality] = useState("");
  const [bonded, setBonded] = useState("Delores");
  const [pasture, setPasture] = useState("Back Pasture");
  return (
    <div className="History borderAround">
      <div className="historyHeader greyBG pl5 whiteText">
        Oscar's Place History
      </div>

      {/* personality */}
      <div className="personalityWrapper flex">
        <div className="personality flex jc mg20 plr10 wFit bgGrey">
          Personality:
        </div>

        <div className="personalityText greyText">
          {admin || editor ? (
            <input
              style={{ border: "none" }}
              type="text"
              placeholder=" Click or tap here to enter text."
              value={personality}
              onChange={(e) => setPesonality(e.target.value)}
            />
          ) : (
            personality
          )}
        </div>
      </div>

      {/* Bonded Companion */}

      <div className="Bonded borderAround flex">
        <div className="BondedC borderAround wFit plr10  ">
          Bonded Companion:
        </div>
        <div className="bondedText mr40P pl5">
          {admin || editor ? (
            <input
              style={{ border: "none" }}
              type="text"
              value={bonded}
              onChange={(e) => setBonded(e.target.value)}
            />
          ) : (
            bonded
          )}
        </div>

        <div className="Pasture borderAround wFit plr10  ">Pasture:</div>
        <div className="pastureText pl5">
          {admin || editor ? (
            <input
              style={{ border: "none" }}
              type="text"
              value={pasture}
              onChange={(e) => setPasture(e.target.value)}
            />
          ) : (
            pasture
          )}
        </div>
      </div>

      <Table />
      {/* History end */}
    </div>
  );
}

export default History;
