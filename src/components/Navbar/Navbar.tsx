import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <button className={styles.button}>Kedi Mamaları</button>
        <button className={styles.button}>Köpek Mamaları</button>
        <button className={styles.button}>Diğer Ürünler</button>
      </div>
    </div>
  );
};

export default Navbar;
