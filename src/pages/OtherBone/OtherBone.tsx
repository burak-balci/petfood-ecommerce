import DetailCard from "../../components/DetailCard";
import { useSelector } from "react-redux";
import { getFoods } from "../../firebase";
import { useEffect } from "react";
import store from "../../context/store";
import { clearFoods } from "../../context/food";
import styles from "./OtherBone.module.css";
import { Helmet } from "react-helmet";

interface Food {
  type: string;
  price: number;
  title: string;
  desc: string;
  image: string;
  id: string;
}

const OtherBone = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getFoods("kemik");
  }, []);
  const { food } = useSelector((state: any) => state.food);
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>8Pet Mama | Kemik Çeşitleri</title>
      </Helmet>
      {food.map((item: Food, i: number) => (
        <DetailCard key={i} item={item} />
      ))}
    </div>
  );
};

export default OtherBone;
