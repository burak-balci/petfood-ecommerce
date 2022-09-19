import DetailCard from "../../components/DetailCard";
import styles from "./CatFood.module.css";
import { useSelector } from "react-redux";
import { getFoods } from "../../firebase";
import { useEffect } from "react";
import store from "../../context/store";
import { clearFoods } from "../../context/food";

interface Food {
  type: string;
  price: number;
  title: string;
  desc: string;
  image: string;
  id: string;
}

const CatFood = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getFoods("cat");
  }, []);
  const { food } = useSelector((state: any) => state.food);
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {food.map((item: Food, i: number) => (
          <DetailCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CatFood;
