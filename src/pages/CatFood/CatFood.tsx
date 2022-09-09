import React from "react";
import DetailCard from "../../components/DetailCard";
import styles from "./CatFood.module.css";

const CatFood = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
    </div>
  );
};

export default CatFood;
