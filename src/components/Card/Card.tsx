import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://www.temizmama.com/assets/img/urun/10/anasayfa/bonacibo-yetiskin-kopek-mamasi.webp"
        alt=""
      />
      <div>Bonacibo Adult Dog Lamb & Rice</div>
      <div>Kuzu Etli ve Pirinçli Yetişkin Köpek Maması</div>
    </div>
  );
};

export default Card;
