import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiPlusCircle,
  FiHeart,
  FiUser,
} from "react-icons/fi";

function BottomNavigation() {
  return (
    <nav className="bottom-navigation">
      <NavLink to="/" className="nav-item">
        <FiHome className="nav-icon" />
      </NavLink>
      <NavLink to="/search" className="nav-item">
        <FiSearch className="nav-icon" />
      </NavLink>
      <NavLink to="/add" className="nav-item">
        <FiPlusCircle className="nav-icon" />
      </NavLink>
      <NavLink to="/likes" className="nav-item">
        <FiHeart className="nav-icon" />
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <FiUser className="nav-icon" />
      </NavLink>
    </nav>
  );
}

export default BottomNavigation;
