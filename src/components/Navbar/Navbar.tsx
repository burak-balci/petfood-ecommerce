import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const activeStyle = {
    backgroundColor: "#fab41e",
    color: "white",
  };
  const normalStyle = {
    color: "grey",
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          to="/kedi-mamasi"
          className={styles.button}
        >
          Kedi Mamaları
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          to="/kopek-mamasi"
          className={styles.button}
        >
          Köpek Mamaları
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          to="/diger-urunler/yas-mamasi"
          className={styles.button}
        >
          Diğer Ürünler
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
