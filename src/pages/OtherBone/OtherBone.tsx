import DetailCard from "../../components/DetailCard";
import { useSelector } from "react-redux";
import { getFoods } from "../../firebase";
import { useEffect } from "react";
import store from "../../context/store";
import { clearFoods } from "../../context/food";
import styles from "./OtherBone.module.css";

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
      {food.map((item: Food) => (
        <DetailCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OtherBone;
