import React, { useEffect, useState } from "react";
import "./Table.css";
import * as ReactBootStrap from "react-bootstrap";

function Table() {
  const [posts, setPosts] = useState(["one", "two", "three"]);

  return (
    <div className="Table">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th className="center">Date</th>
            <th className="center" >Vaccination/Exam Details</th>
            <th className="center">Notes/Next Steps</th>
          </tr>
        </thead>
        <tbody>
          <tr className="center">
            <td>12/1/2020</td>
            <td>rhino/flu</td>
            <td>Cattrina Lucas</td>
          </tr>
          <tr className="center">
          <td>12/1/2020</td>
            <td>rhino/flu</td>
            <td>Cattrina Lucas</td>
          </tr>
          <tr className="center">
          <td>12/1/2020</td>
            <td>rhino/flu</td>
            <td>Cattrina Lucas</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Table;
