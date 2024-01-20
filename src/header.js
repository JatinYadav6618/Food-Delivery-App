import { useState } from "react";
import myLogo from "../res/images.png";
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
            <Link to="/" className="n-item">
              Home
            </Link>
          </li>
          <li className="n-items">
            <Link className="n-item" to="/restaurant">
              Restaurants
            </Link>
          </li>
          <li className="n-items">
            <Link to={"/cart "} className="n-item">
              Cart{" "}
            </Link>
          </li>
          <li className="n-items">
            <Link className="n-item" to="/about">
              About Us
            </Link>
          </li>
          <li className="n-items">
            <Link to="/contact" className="n-item">
              Contact Us
            </Link>
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
