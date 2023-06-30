import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className="navbar-white">
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink className={({isActive}) => (isActive) ? styles.active : '' } to="/" >Home</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => (isActive) ? styles.active : '' } to="/about" >About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
