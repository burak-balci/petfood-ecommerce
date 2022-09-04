import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
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
