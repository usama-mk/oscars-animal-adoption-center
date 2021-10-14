import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/images/logo.svg";
import register from "../../assets/images/register.svg";
import { firebaseApp } from "../../firebase";
import { auth } from "../../firebase";
import { Redirect, useHistory } from "react-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from '../../actions'


function Register({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch= useDispatch()
  const history = useHistory();
  const toggleSignIn = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  };

  const toggleSignUp = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null))
    }).catch((error) => {
      // An error happened.
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        // await getUserDocument(user.uid);
        setUser(user);
        if (user) {
          console.log("success login");
          history.push("./home");
        }
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            console.log("error");
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            console.log("error");
            break;
        }
      });
    console.log(`user is: ${user}`);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        console.log("success signup");
        console.log(user.email);
        dispatch(setUser(user))
        history.push("./home");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };

  return user ? (
    <Redirect to="/home" />
  ) : (
    <div>
      <body>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <input
                  onClick={handleLogin}
                  type="submit"
                  value="Login"
                  className="btn solid"
                />
                {user && <div onClick={handleLogout}> Logout</div>}
              </form>
              <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <input
                  onClick={handleSignup}
                  type="submit"
                  className="btn"
                  value="Sign up"
                />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Sign up Now! And enjoy the quality services through our web
                  app
                </p>
                <button
                  onClick={toggleSignIn}
                  className="btn transparent"
                  id="sign-up-btn"
                >
                  Sign up
                </button>
              </div>
              <img src={logo} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Sign in Now! And enjoy the quality services through our web
                  app
                </p>
                <button
                  onClick={toggleSignUp}
                  className="btn transparent"
                  id="sign-in-btn"
                >
                  Sign in
                </button>
              </div>
              <img src={register} className="image" alt="" />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Register;
