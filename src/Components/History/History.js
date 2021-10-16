import React, { Fragment, useEffect, useState } from "react";
import "./History.css";
import Table from "../Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import {onSnapshot,query,  collection, doc, getDoc, getDocs, setDoc } from "@firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

function History({ id }) {
  // const [admin, setAdmin] = useState(true);
  const admin = useSelector(state=> state.user.admin)
  const editor = useSelector(state=> state.user.editor)
  // const [editor, setEditor] = useState(true);
  const [personality, setPesonality] = useState("");
  const [bonded, setBonded] = useState("");
  const [pasture, setPasture] = useState("");
  const [comments, setComments] = useState("");
  useEffect(async () => {
    // setPasture("whatever in firebase");
    const q = query(collection(db, "animalsPost", id, "pasture"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const tempPasture = [];
  querySnapshot.forEach((doc) => {
    tempPasture.push({
      id: doc.id,
      data: doc.data()
    });
  });
  
  setPasture(tempPasture[0]?.data.pasture)
});

const q1 = query(collection(db, "animalsPost", id, "bonded"));
const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
  const tempBonded = [];
  querySnapshot.forEach((doc) => {
    tempBonded.push({
      id: doc.id,
      data: doc.data()
    });
  });
  
  setBonded(tempBonded[0]?.data.bonded)
});

  const q2 = query(collection(db, "animalsPost", id, "personality"));
const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
  const tempPersonality = [];
  querySnapshot.forEach((doc) => {
    tempPersonality.push({
      id: doc.id,
      data: doc.data()
    });
  });
  
  setPesonality(tempPersonality[0]?.data.comment)
});

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

  useEffect(()=>{
    console.log(`admin: ${admin} editor: ${editor}}`)
  },[])
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
       <div style={{display: 'flex'}}>
       <div className="BondedC borderAround wFit plr10  ">
          Bonded Companion:
        </div>
        <div className="bondedText mr40P pl5">
          {admin || editor ? (
            <input
            placeholder="bonded companion.."
              style={{ border: "none" }}
              type="text"
              value={bonded}
              onChange={(e) => changeBonded(e)}
            />
          ) : (
            bonded
          )}
        </div>
         </div>

        <div style={{display: 'flex'}} >
        <div className="Pasture borderAround wFit plr10  ">Pasture:</div>
        <div className="pastureText pl5">
          {admin || editor ? (
            <input
              style={{ border: "none" }}
              placeholder="Pasture.."
              type="text"
              value={pasture}
              onChange={(e) => changePasture(e)}
            />
          ) : (
            pasture
          )}
        </div>
        </div>
      </div>

      <Table id={id} />
      {/* History end */}
    </div>
  );
}

export default History;
