import { useState } from "react";
import myLogo from "../res/foodlogo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={myLogo}></img>
      </div>
      <div className="nav-item">
        <ul className="nav-items">
          <li className="n-items">
            <Link to="/">Home</Link>
          </li>
          <li className="n-items">Restaurants</li>
          <li className="n-items">Cart</li>
          <li className="n-items">
            <Link to="/about">About Us</Link>
          </li>
          <li className="n-items">
            <Link to="/contact">Contact Us</Link>
          </li>
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
