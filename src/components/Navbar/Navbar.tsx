import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link to="/kedi-mamasi" className={styles.button}>
          Kedi Mamaları
        </Link>
        <Link to="/kopek-mamasi" className={styles.button}>
          Köpek Mamaları
        </Link>
        <Link to="/diger-urunler" className={styles.button}>
          Diğer Ürünler
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
