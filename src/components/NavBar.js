import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/customerreviews">Customer Reviews</Link>
    </div>
  );
};

export default NavBar;
