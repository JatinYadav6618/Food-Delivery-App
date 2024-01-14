import { useState } from "react";
import myLogo from "../res/foodlogo.jpeg";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={myLogo}></img>
      </div>
      <div className="nav-item">
        <ul className="nav-items">
          <li className="n-items">Home</li>
          <li className="n-items">Restaurants</li>
          <li className="n-items">Cart</li>
          <li className="n-items">About Us</li>
          <button
            className="login-btn"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
