import { useSelector } from "react-redux";
import Card from "../../components/Card";
import styles from "./Basket.module.css";

const BasketPage = () => {
  const { basketItems } = useSelector((state: Selector) => state.basket);
  interface Selector {
    basket: BasketItems;
  }
  interface BasketItems {
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

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>Sepetteki Ürünler</div>
        <div className={styles.contentContainer}>
          {basketItems.map((item: Props, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
