import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearFoods } from "../../context/food";
import store from "../../context/store";
import { getAllFoods } from "../../firebase";
import DetailCard from "../../components/DetailCard";
import styles from "./Search.module.css";

const Search = () => {
  const { word } = useParams<{ word: string }>();

  useEffect(() => {
    store.dispatch(clearFoods());
    getAllFoods();
  }, []);

  interface Item {
    desc: string;
    image: string;
    price: number;
    title: string;
    type: string;
  }

  const { food } = useSelector((state: any) => state.food);

  if (!word) {
    return null;
  }

  const filtered = food.filter((item: Item) =>
    Object.values(item).toString().toLowerCase().includes(word)
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          {filtered.length > 0 ? (
            filtered.map((item: Item, i: number) => (
              <DetailCard key={i} item={item} />
            ))
          ) : (
            <div>boş</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
