import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" alt="Saloodo" src={logo}></img>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">My Parcels</Link>
          </li>
          <li>
            <Link to="/create-parcel">Create Parcel</Link>
          </li>

          <li>
            <button className="btn btn-primary">Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
