import React, { useEffect, useState } from "react";
import "./History.css";
import Table from "../Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, doc, getDoc, getDocs, setDoc } from "@firebase/firestore";
import { db } from "../../firebase";

function History({ id }) {
  const [admin, setAdmin] = useState(true);
  const [editor, setEditor] = useState(true);
  const [personality, setPesonality] = useState("");
  const [bonded, setBonded] = useState("");
  const [pasture, setPasture] = useState("");
  const [comments, setComments] = useState("");
  useEffect(async () => {
    console.log(id);
    setPasture("whatever in firebase");
  }, []);

  const changePersonality = async (e) => {
    setPesonality(e.target.value);
    const commentRef = doc(db, "animalsPost", id, "personality", id);
    //coll doc coll doc
    await setDoc(commentRef, { comment: e.target.value });
  };

  const changePasture= async(e)=>{
    setPasture(e.target.value)
    const pastureRef = doc(db, "animalsPost", id, "pasture", id);
    //coll doc coll doc
    await setDoc(pastureRef, { pasture: e.target.value });
  }

  const changeBonded= async(e)=>{
    setBonded(e.target.value)
    const bondedRef = doc(db, "animalsPost", id, "bonded", id);
    //coll doc coll doc
    await setDoc(bondedRef, { bonded: e.target.value });
  }
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
              onChange={(e) => changePersonality(e)}
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
              onChange={(e) => changeBonded(e)}
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
              onChange={(e) => changePasture(e)}
            />
          ) : (
            pasture
          )}
        </div>
      </div>

      <Table id={id} />
      {/* History end */}
    </div>
  );
}

export default History;
