import React from "react";
import UserClass from "./userclass";

function About() {
  return (
    <div className="user-container">
      <h1 className="abouthead"> About Us 🚀 </h1>
      {<UserClass name={"Jatin"} location={"Haryana"} />}
    </div>
  );
}

export default About;
