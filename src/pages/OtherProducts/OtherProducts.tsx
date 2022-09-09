import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./OtherProducts.module.css";
import DetailCard from "../../components/DetailCard";

const OtherProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.list}>
          <h3 className={styles.title}>Reyonlar</h3>
          <Link className={styles.link} to="yas-mamasi">
            Yaş Mama
          </Link>
          <Link className={styles.link} to="odul-mamasi">
            Ödül Mamaları
          </Link>
          <Link className={styles.link} to="kemik">
            Kemik
          </Link>
          <Link className={styles.link} to="kum">
            Kum
          </Link>
          <Link className={styles.link} to="biskuvi">
            Bisküvi
          </Link>
        </div>
        <div className={styles.other}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
