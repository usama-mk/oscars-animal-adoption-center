import React, { useState } from "react";
import "./CreateCard.css";
import { MDBInput } from "mdbreact";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAnimal, setAnimals } from "../../actions";
import { LinearProgress } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { doc, setDoc, Timestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function CreateCard() {
  // const[name, setName]= useState('')
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [type, setType] = useState("Jack");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [before, setBefore] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const posts = useSelector((state) => state.animals);
  const dispatch = useDispatch();
  // Create a root reference
  const storage = getStorage();
  const handleCreateCard = async (e) => {
    e.preventDefault();
    console.log(type);

    var currentDate = new Date();

    const docData = {
      name: name,
      specie: specie,
      breed: breed,
      color: color,
      description: description,
      month: month,
      year: year,
      type: type,
      age: age,
      notes: notes,
      status: status,
      before: before,
      image: image,
      datex: currentDate.getDate(),
      monthx: currentDate.getMonth(),
      yearx: currentDate.getFullYear(),
      time: currentDate,
    };
    await setDoc(doc(collection(db, "animalsPost")), docData);

    console.log(posts);

    toast.success("???? Post Successfully added the data to the database ", {
      position: "bottom-center",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // alert('success')
    setName("");
    setSpecie("");
    setBreed("");
    setColor("");
    setType("Jack");
    setDescription("");
    setMonth("");
    setYear("");
    setAge("");
    setNotes("");
    setStatus("");
    setBefore("");
    setImage("");
    setProgress(0);
  };

  const handleSelectChange = (option) => {
    setType(option.target.value);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      const storageRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImage(downloadURL);

            toast.success(
              "???? Image Successfully added the data to the database ",
              {
                position: "bottom-center",
                autoClose: true,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
            setProgress(0);
          });
        }
      );
    }
  };
  return (
    <div className="CreateCard flex-center">
      <Link to="./home">back</Link>
      <form onSubmit={handleCreateCard}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Name"
        />
        <input
          value={specie}
          onChange={(e) => setSpecie(e.target.value)}
          type="text"
          required
          placeholder="Specie"
        />
        <input
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          type="text"
          required
          placeholder="Breed"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          required
          placeholder="Color"
        />
        <br />
        <br />
        <select onChange={handleSelectChange} value={type} required name="type">
          <option value="Jack">Jack</option>
          <option value="Jenny">Jenny</option>
          <option value="Gelding">Gelding</option>
        </select>
        <br />
        <br />
        <MDBInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          hint="Description.."
        />
        <br />
        <input
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
          type="text"
          placeholder="Month"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          type="number"
          placeholder="Year"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          type="number"
          placeholder="Age"
        />
        <br />
        <br />
        <MDBInput
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
          hint="Intake Notes"
        />
        <MDBInput
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          hint="Status"
        />
        <MDBInput
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          required
          hint="Before Oscar's Place"
        />
        <input
          type="file"
          onChange={onImageChange}
          className="filetype"
          id="group_image"
        />

        <LinearProgress
          color="primary"
          variant="determinate"
          value={progress}
        />
        <Button required type="submit">
          Submit
        </Button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default CreateCard;
