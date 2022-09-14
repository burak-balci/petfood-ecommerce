import { useSelector } from "react-redux";
import Card from "../../components/Card";

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
    <div>
      <div>Basket</div>
      {basketItems.map((item: Props, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};

export default BasketPage;
