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

const OtherCanned = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getFoods("yas");
  }, []);
  const { food } = useSelector((state: any) => state.food);
  return (
    <div>
      {food.map((item: Food) => (
        <DetailCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OtherCanned;
