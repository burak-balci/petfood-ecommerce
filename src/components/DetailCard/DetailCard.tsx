import React, { useState } from "react";
import styles from "./DetailCard.module.css";
import { addBasket } from "../../firebase";
import { useSelector } from "react-redux";
import { Auth, Item } from "../../types";
import toast from "react-hot-toast";

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
  const { user } = useSelector((state: Auth) => state.auth);
  const [piece, setPiece] = useState("0");

  const handleClick = async (item: Item) => {
    await addBasket({
      basketItems: item,
      uid: user.uid,
      piece: piece,
    });
    toast.success("Ürün sepetinize eklendi.");
    setPiece("0");
  };

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
                <div>1 Adet</div>
              </td>
              <td>{item.price} ₺</td>
              <td>
                <input
                  type="number"
                  min="0"
                  className={styles.input}
                  value={piece}
                  onChange={(e) => setPiece(e.target.value)}
                />
              </td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => handleClick(item)}
                >
                  Sepete ekle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailCard;
