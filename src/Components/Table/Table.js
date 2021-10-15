import React, { useEffect, useState } from "react";
import "./Table.css";
import * as ReactBootStrap from "react-bootstrap";

function Table() {
  const [comments, setComments] = useState(["one", "two", "three", ]);
  const [date, setDate] = useState("12/1/2020");
  const [examDetails, setExamDetails] = useState("rhino/flu");
  const [nextSteps, setNextSteps] = useState("Cattrina Lucas");
  const [admin, setAdmin] = useState(true);
  const [editor, setEditor] = useState(true);

  return (
    <div className="Table">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th className="center">Date</th>
            <th className="center">Vaccination/Exam Details</th>
            <th className="center">Notes/Next Steps</th>
          </tr>
        </thead>
         <tbody>
          <tr className="center">
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              ) : (
                date
              )}
            </td>
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={examDetails}
                  onChange={(e) => setExamDetails(e.target.value)}
                />
              ) : (
                examDetails
              )}
            </td>
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={nextSteps}
                  onChange={(e) => setNextSteps(e.target.value)}
                />
              ) : (
                nextSteps
              )}
            </td>
          </tr>
           
            <tr className="center">
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              ) : (
                date
              )}
            </td>
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={examDetails}
                  onChange={(e) => setExamDetails(e.target.value)}
                />
              ) : (
                examDetails
              )}
            </td>
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  value={nextSteps}
                  onChange={(e) => setNextSteps(e.target.value)}
                />
              ) : (
                nextSteps
              )}
            </td>
          </tr>
        </tbody>
        
      </ReactBootStrap.Table>
    </div>
  );
}

export default Table;
