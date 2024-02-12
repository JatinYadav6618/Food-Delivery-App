import React, { useRef, useState } from "react";
// import myLogo from "../res/images.png";
// import loginAnimation from "../res/loginAnimation.mp4";
import funky from "../res/funky.jpg";
import { Validate } from "./util/validate.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./util/firebase.js";

const Login = () => {
  const [loginbtn, setLoginBtn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLoginBtn = () => {
    // console.log(email);
    // console.log(password);
    // console.log(name);
    const message = Validate(email.current.value, password.current.value);
    // setErrorMsg(message);
    if (message) return;
    if (!loginbtn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };

  const toggleRegistrationForm = () => {
    setLoginBtn(!loginbtn);
  };

  return (
    <div className="login">
      <div>
        <img src={funky} placeholder="img" className="funkyimg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="LoginForm">
        {!loginbtn && <input ref={name} type="text" placeholder="Full Name" />}
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
        <p>{errorMsg}</p>
        <button onClick={handleLoginBtn}>
          {loginbtn ? "Login" : "Register"}
        </button>
        <p className="newuser" onClick={toggleRegistrationForm}>
          {loginbtn
            ? "New here! Register Now 📋"
            : "Already Registered Login Now 🚀"}
        </p>
      </form>
    </div>
  );
};

export default Login;
