import { deleteDoc, doc } from "@firebase/firestore";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import DonkeyCard from "../DonkeyCard/DonkeyCard";
import History from "../History/History";
import "./DonkeyDetailed.css";
import TinderCard from "react-tinder-card";

function DonkeyDetailed({
  name,
  breed,
  specie,
  type,
  description,
  month,
  year,
  color,
  age,
  notes,
  status,
  before,
  image,
  id,
  datex,
  monthx,
  yearx,
}) {
  const admin = useSelector((state) => state.user.admin);

  const deletePost = async () => {
    await deleteDoc(doc(db, "animalsPost", id));
  };

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="DonkeyDetailed">
      <TinderCard
        className="swipe"
        key={id}
        preventSwipe={["up", "down"]}
        onSwipe={(dir) => swiped(dir, name)}
        onCardLeftScreen={() => outOfFrame(name)}
      >
        {admin && (
          <Button
            className="delete"
            onClick={deletePost}
            style={{ backgroundColor: "red" }}
          >
            Delete
          </Button>
        )}

        <DonkeyCard
          name={name}
          specie={specie}
          breed={breed}
          type={type}
          description={description}
          month={month}
          year={year}
          color={color}
          age={age}
          notes={notes}
          status={status}
          before={before}
          image={image}
          id={id}
          datex={datex}
          monthx={monthx}
          yearx={yearx}
        />
      </TinderCard>
      <History id={id} />
    </div>
  );
}

export default DonkeyDetailed;
