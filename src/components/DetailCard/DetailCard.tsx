import React from "react";
import styles from "./DetailCard.module.css";

interface Food {
  type: string;
  price: number;
  title: string;
  desc: string;
  image: string;
}

interface IProps {
  item: Food;
}

const DetailCard = ({ item }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <img src={item.image} alt={item.title} className={styles.image} />
        </div>
        <div>
          <h3 className={styles.title}>{item.title}</h3>
          <h5 className={styles.desc}>{item.desc}</h5>
        </div>
      </div>
      <div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Paket</th>
              <th>Fiyat</th>
              <th>Adet</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <div>1.5 Kg x 2 Adet</div>
              </td>
              <td>₺ {item.price}</td>
              <td>1</td>
              <td>Sepete ekle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailCard;
