import { useState } from "react";
import myLogo from "../res/images.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

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
          {/* <li className="n-items">
            <Link className="n-item" to="/restaurant">
              Restaurants
            </Link>
          </li> */}
          <li className="n-items">
            <Link to={"/cart"} className="n-item">
              Cart ({cartItems.length} items)
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
          <Link to={"/login"}>
            <button
              className=" login-btn"
              onClick={() => {
                loginbtn === "Login"
                  ? setloginbtn("Logout")
                  : setloginbtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
