import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Video from "../Video";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.contentContainer}>
        <div className={styles.innerContainer}>
          <Link to="/" className={styles.logo}>
            8Pet Mama
          </Link>
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
    </div>
  );
};

export default Header;
