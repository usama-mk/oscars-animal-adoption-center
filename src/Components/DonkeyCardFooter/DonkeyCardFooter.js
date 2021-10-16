import React from "react";
import "./DonkeyCardFooter.css";

function DonkeyCardFooter({ status, before }) {
  return (
    <div className="DonkeyCardFooter">
      <div className="footerDetails">
        <div className="BeforeOscarPlace">Before Oscar's Place</div>
        <div className="bop overflowY">{before}</div>
      </div>
      <div className="footerStatus">Status:</div>

      <div className="footerStatusText overflowY">{status}</div>
    </div>
  );
}

export default DonkeyCardFooter;
