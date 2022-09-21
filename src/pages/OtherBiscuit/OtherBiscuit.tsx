import DetailCard from "../../components/DetailCard";
import { useSelector } from "react-redux";
import { getFoods } from "../../firebase";
import { useEffect } from "react";
import store from "../../context/store";
import { clearFoods } from "../../context/food";
import styles from "./OtherBiscuit.module.css";
import { Helmet } from "react-helmet";

interface Food {
  type: string;
  price: number;
  title: string;
  desc: string;
  image: string;
  id: string;
}

const OtherBiscuit = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getFoods("biskuvi");
  }, []);
  const { food } = useSelector((state: any) => state.food);
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>8Pet Mama | Ödül Bisküvileri</title>
      </Helmet>
      {food.map((item: Food, i: number) => (
        <DetailCard key={i} item={item} />
      ))}
    </div>
  );
};

export default OtherBiscuit;
