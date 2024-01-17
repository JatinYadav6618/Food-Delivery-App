import React from "react";
import UserClass from "./userclass";

function About() {
  return (
    <div>
      <h1 className="abouthead">About us Information..... </h1>
      {<UserClass name={"Jatin"} location={"Haryana"} />}
    </div>
  );
}

export default About;
