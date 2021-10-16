import React from "react";
import { useSelector } from "react-redux";
import DonkeyCardFooter from "../DonkeyCardFooter/DonkeyCardFooter";
import DonkeyHeader from "../DonkeyHeader/DonkeyHeader";
import DonkeyPostInfo from "../DonkeyPostInfo/DonkeyPostInfo";
import "./DonkeyCard.css";

function DonkeyCard({
  name,
  breed,
  specie,
  type,
  description,
  month,
  color,
  age,
  notes,
  status,
  before,
  image,
  year,
  datex,
  monthx,
  yearx,
}) {
  return (
    <div className="DonkeyCard">
      <DonkeyHeader datex={datex} monthx={monthx} yearx={yearx} />
      <DonkeyPostInfo
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
        image={image}
      />
      <DonkeyCardFooter status={status} before={before} />
    </div>
  );
}

export default DonkeyCard;
