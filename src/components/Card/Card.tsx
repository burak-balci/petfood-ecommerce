import React from "react";
import toast from "react-hot-toast";
import { deleteBasketItem, updateBasket } from "../../firebase";
import styles from "./Card.module.css";

interface Props {
  id: string;
  uid: string;
  basketItems: {
    desc: string;
    id: string;
    image: string;
    price: number;
    title: string;
    type: string;
  };
  piece: number;
}
interface Item {
  item: Props;
}

const Card = ({ item }: Item) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateBasket(item.id, e.target.value);
  };

  const handleDelete = () => {
    deleteBasketItem(item.id);
    toast.success("Sepet başarıyla güncellendi.");
  };

  return (
    <div className={styles.container}>
      <img src={item.basketItems.image} alt={item.basketItems.title} />
      <div className={styles.innerContainer}>
        <div className={styles.title}>{item.basketItems.title}</div>
        <div>
          <span className={styles.bold}>Fiyat : </span>
          {item.basketItems.price}
        </div>
        <div className={styles.sb}>
          <span className={styles.bold}>Adet : </span>
          <div className={styles.buttons}>
            <span
              className={styles.buttonleft}
              onClick={() => updateBasket(item.id, item.piece - 1)}
            >
              -
            </span>
            <input
              className={styles.input}
              min="1"
              type="number"
              value={item.piece}
              onChange={handleChange}
            />
            <span
              className={styles.buttonright}
              onClick={() => updateBasket(item.id, Number(item.piece) + 1)}
            >
              +
            </span>
          </div>
        </div>
        <div>
          <span className={styles.bold}>Toplam Fiyat : </span>
          {item.basketItems.price * item.piece} ₺
        </div>
        <div>
          <button className={styles.dButton} onClick={handleDelete}>
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
