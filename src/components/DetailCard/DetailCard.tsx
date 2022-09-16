import React, { useState } from "react";
import styles from "./DetailCard.module.css";
import { addBasket, deleteBasketItem } from "../../firebase";
import { useSelector } from "react-redux";
import { Auth, Item } from "../../types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

interface Selector {
  basket: Arr;
}
interface Arr {
  basketItems: Props[];
}

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

const DetailCard = ({ item }: IProps) => {
  const { user } = useSelector((state: Auth) => state.auth);
  const { basketItems } = useSelector((state: Selector) => state.basket);
  const [piece, setPiece] = useState("0");
  const navigate = useNavigate();

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
                  min="1"
                  className={styles.input}
                  value={piece}
                  onChange={(e) => setPiece(e.target.value)}
                />
              </td>
              <td>
                {JSON.stringify(basketItems).includes(item.title) ? (
                  <button
                    className={styles.button}
                    onClick={() => navigate("/sepet")}
                  >
                    Sepete eklendi.
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => handleClick(item)}
                  >
                    Sepete ekle
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailCard;
