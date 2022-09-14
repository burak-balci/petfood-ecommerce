import React from "react";
import { updateBasket } from "../../firebase";
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

  return (
    <div className={styles.container}>
      <img src={item.basketItems.image} alt={item.basketItems.title} />
      <div>{item.basketItems.title}</div>
      <div>Fiyat : {item.basketItems.price}</div>
      <div>
        Satın Alınan Miktar :
        <input type="number" value={item.piece} onChange={handleChange} />
      </div>
      <div>Toplam Fiyat : {item.basketItems.price * item.piece}</div>
    </div>
  );
};

export default Card;
