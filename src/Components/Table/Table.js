import React, { Fragment, useEffect, useState } from "react";
import "./Table.css";
import * as ReactBootStrap from "react-bootstrap";
import { collection, doc, onSnapshot, getDoc, getDocs, setDoc, query, where } from "@firebase/firestore";
import { db } from "../../firebase";

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
  const [admin, setAdmin] = useState(true);
  const [editor, setEditor] = useState(true);
  const [edit, setEdit]= useState(false)

  const updateComment = async (e) => {
    const commentsRef = doc(collection(db, "animalsPost", id, "comments"));
     
      const newValue = e.target.value;
      //coll doc coll doc
      await setDoc(commentsRef, { comment: newComment });


    // if (e.target.name == "commentDate") {
    //   setNewComment({ ...newComment, date: e.target.value });
    //   const newValue = e.target.value;
    //   //coll doc coll doc
    //   await setDoc(commentsRef, { comment: { ...newComment, date: newValue } });
    // }

    // if (e.target.name == "commentExamDetails") {
    //   setNewComment({ ...newComment, examDetails: e.target.value });
    //   const newValue = e.target.value;
    //   //coll doc coll doc
    //   await setDoc(commentsRef, {
    //     comment: { ...newComment, examDetails: newValue },
    //   });
    // }

    // if (e.target.name == "commentNextSteps") {
    //   setNewComment({ ...newComment, nextSteps: e.target.value });
    //   const newValue = e.target.value;
    //   //coll doc coll doc
    //   await setDoc(commentsRef, {
    //     comment: { ...newComment, nextSteps: newValue },
    //   });
    // }
  };

  useEffect( async()=>{
  //   const querySnapshot = await getDocs(collection(db, "animalsPost", id, "comments"));
     
  //    var tempComments=[]

  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, doc.data());

  //   tempComments.push({
  //   id: doc.id,
  //   data: doc.data()
  // })
  // })

  const q = query(collection(db, "animalsPost", id, "comments"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const tempComments = [];
  querySnapshot.forEach((doc) => {
    tempComments.push({
      id: doc.id,
      data: doc.data()
    });
  });
  // console.log("Current cities in CA: ", tempComments);
  setComments(tempComments)
  console.log(tempComments[0].data)
});

  // setComments(tempComments)
  },[])

  const editComment=async (comment, e)=>{
    setEdit(true)
    // const q = query(doc(db, "animalsPost", id, "comments", comment.id));
 
    // await setDoc(doc(db, "animalsPost", id, "comments", comment.id), {
    //    date: date,
    //    examDetails: examDetails,
    //    nextSteps: nextSteps,
    // });


  }

  const submitEditedComment= async(comment, e)=>{
    setEdit(false)

    const q = query(doc(db, "animalsPost", id, "comments", comment.id));
 
    await setDoc(doc(db, "animalsPost", id, "comments", comment.id), {
       date: date,
       examDetails: examDetails,
       nextSteps: nextSteps,
    });
  }

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
          {comments.map((comment) => {
            return (
              <tr className="center">
                <td>
                  {admin || editor ? (
                    edit?<input
                    type="text"
                    value={ comment.data?.comment.date}
                    
                    onChange={(e) => setDate(e.target.value)}
                  />:
                  <h5>{ comment.data?.comment.date}</h5>
                  ) : (
                    comment.data?.comment.date
                  )}
                 
                </td>
                <td>
                  {admin || editor ? (
                    <input
                      type="text"

                      value={ comment.data?.comment.examDetails}
                      onChange={(e) => setExamDetails(e.target.value)}
                    />
                  ) : (
                    comment.data.comment.examDetails
                  )}
                  
                </td>
                <td>
                  {admin || editor ? (
                    <input
                      type="text"
                      value={ comment.data?.comment.nextSteps}
                      onChange={(e) => {
                        setNextSteps(e.target.value);
                      }}
                    />
                  ) : (
                    comment.data?.comment.nextSteps
                  )}
                </td>
                 {
                    admin || editor ?
                    
                    edit? <button onClick={(e)=> submitEditedComment(comment,e)} >Submit</button>:
                    <button onClick={(e)=> {
                   
                      editComment(comment,e)}} >edit</button>
                    
                      :''
                  }
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
                <ReactBootStrap.Button onClick={(e)=>{
                  updateComment(e)
                }} >
                  Add Comment
                </ReactBootStrap.Button>
                  </Fragment>
                
              ) : (
                newComment.examDetails
              )
              }
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
