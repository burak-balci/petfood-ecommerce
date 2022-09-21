import styles from "./Home.module.css";
import Video from "../../components/Video";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { clearFoods } from "../../context/food";
import store from "../../context/store";
import { getAllFoods } from "../../firebase";
import DetailCard from "../../components/DetailCard";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    store.dispatch(clearFoods());
    getAllFoods();
  }, []);
  const { food } = useSelector((state: any) => state.food);
  const featuredProducts = food.slice(0, 10);

  interface Props {
    item: Item;
  }
  interface Item {
    desc: string;
    image: string;
    price: number;
    title: string;
    type: string;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>8Pet Mama</title>
      </Helmet>
      <div className={styles.video}>
        <Video />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>Öne Çıkan Ürünler</div>
          <div className={styles.contentContainer}>
            {featuredProducts.map((item: Item, i: number) => (
              <DetailCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
