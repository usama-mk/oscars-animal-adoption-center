import React, { Fragment, useEffect, useState } from "react";
import "./Table.css";
import * as ReactBootStrap from "react-bootstrap";
import {
  collection,
  doc,
  onSnapshot,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

function Table({ id }) {
  const [comments, setComments] = useState(["one", "two", "three"]);
  const [newComment, setNewComment] = useState({
    date: "",
    examDetails: "",
    nextSteps: "",
  });
  const [date, setDate] = useState("12/1/2020");
  const [examDetails, setExamDetails] = useState("rhino/flu");
  const [nextSteps, setNextSteps] = useState("Cattrina Lucas");
  const admin = useSelector((state) => state.user.admin);
  const editor = useSelector((state) => state.user.editor);
  const [edit, setEdit] = useState(false);

  const updateComment = async (e) => {
    const commentsRef = doc(collection(db, "animalsPost", id, "comments"));

    const newValue = e.target.value;
    //coll doc coll doc
    await setDoc(commentsRef, { comment: newComment });

    setNewComment({
      date: "",
      examDetails: "",
      nextSteps: "",
    });
  };

  useEffect(async () => {
    const q = query(collection(db, "animalsPost", id, "comments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempComments = [];
      querySnapshot.forEach((doc) => {
        tempComments.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      // console.log("Current cities in CA: ", tempComments);
      setComments(tempComments);
    });

    // setComments(tempComments)
  }, []);

  const editComment = async (comment, e) => {
    setEdit(true);
  };

  const deleteComment = async (comment, e) => {
    await deleteDoc(doc(db, "animalsPost", id, "comments", comment.id));
  };

  return (
    <div className="Table">
      <ReactBootStrap.Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className="center">Date</th>
            <th className="center">Vaccination/Exam Details</th>
            <th className="center">Notes/Next Steps</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr className="center">
                <td>
                  {admin || editor ? (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.date}
                    </div>
                  ) : (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.date}
                    </div>
                  )}
                </td>
                <td>
                  {admin || editor ? (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.examDetails}
                    </div>
                  ) : (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.examDetails}
                    </div>
                  )}
                </td>
                <td>
                  {admin || editor ? (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.nextSteps}
                    </div>
                  ) : (
                    <div classname="overflowY">
                      {" "}
                      {comment.data?.comment.nextSteps}
                    </div>
                  )}
                </td>
                {admin || editor ? (
                  <button onClick={(e) => deleteComment(comment, e)}>
                    DELETE
                  </button>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
          {/* NEW Comment */}
          <tr className="center">
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  name="commentDate"
                  value={newComment.date}
                  onChange={(e) => {
                    e.stopPropagation();
                    setNewComment({
                      ...newComment,
                      date: e.target.value,
                    });
                  }}
                />
              ) : (
                newComment.date
              )}
            </td>
            <td>
              {admin || editor ? (
                <Fragment>
                  <input
                    type="text"
                    name="commentExamDetails"
                    value={newComment.examDetails}
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        examDetails: e.target.value,
                      });
                    }}
                  />
                  <br />
                  <ReactBootStrap.Button
                    onClick={(e) => {
                      updateComment(e);
                    }}
                  >
                    Add Comment
                  </ReactBootStrap.Button>
                </Fragment>
              ) : (
                newComment.examDetails
              )}
            </td>
            <td>
              {admin || editor ? (
                <input
                  type="text"
                  name="commentNextSteps"
                  value={newComment.nextSteps}
                  onChange={(e) => {
                    setNewComment({ ...newComment, nextSteps: e.target.value });
                  }}
                />
              ) : (
                newComment.nextSteps
              )}
            </td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Table;
