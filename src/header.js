import myLogo from "../res/foodlogo.jpeg";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
