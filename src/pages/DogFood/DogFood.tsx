import React from "react";
import styles from "./DogFood.module.css";
import DetailCard from "../../components/DetailCard";

const DogFood = () => {
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

export default DogFood;
