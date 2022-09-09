import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import styles from "./Home.module.css";
import Video from "../../components/Video";

const Home = () => {
  return (
    <div>
      <div className={styles.video}>
        <Video />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>Öne Çıkan Ürünler</div>
          <div className={styles.contentContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
