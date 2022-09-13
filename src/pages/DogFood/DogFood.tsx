import styles from "./DogFood.module.css";
import DetailCard from "../../components/DetailCard";
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

const DogFood = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getFoods("dog");
  }, []);
  const { food } = useSelector((state: any) => state.food);
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {food.map((item: Food) => (
          <DetailCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DogFood;
