import React from "react";
import Navbar from "../Navbar";
import Video from "../Video";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.logo}>8Pet Mama</div>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Üye Ol</button>
            <button className={styles.button}>Giriş Yap</button>
          </div>
        </div>
      </div>
      <Navbar />
      <Video />
    </div>
  );
};

export default Header;
