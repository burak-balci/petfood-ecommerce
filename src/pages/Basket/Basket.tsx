import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import styles from "./Basket.module.css";
import { addOrder, deleteBasketItem } from "../../firebase";
import { clearBasket } from "../../context/basket";
import store from "../../context/store";
import { Auth } from "../../types";

const BasketPage = () => {
  const { basketItems } = useSelector((state: Selector) => state.basket);
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    city: "",
    phoneNumber: "",
    address: "",
    items: basketItems,
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (order.name && order.address && order.city && order.phoneNumber) {
      console.log(order);
      await addOrder(order);
      basketItems.map((item) => deleteBasketItem(item.id));
      await store.dispatch(clearBasket());
      setModal(false);
      toast.success("Siparişiniz başarıyla oluşturuldu.");
    } else {
      toast.error("Lütfen ilgili alanları doldurun");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={modal ? styles.activeModal : styles.disableModal}>
          <div className={styles.modalContainer}>
            <div className={styles.closeContainer}>
              <span onClick={() => setModal(false)} className={styles.close}>
                X
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalContent}>
                <span>Ad ve Soyad</span>
                <input
                  value={order.name}
                  onChange={(e) => setOrder({ ...order, name: e.target.value })}
                  className={styles.input}
                  type="text"
                />
              </div>
              <div className={styles.modalContent}>
                <span>Şehir</span>
                <input
                  onChange={(e) => setOrder({ ...order, city: e.target.value })}
                  value={order.city}
                  className={styles.input}
                  type="text"
                />
              </div>
              <div className={styles.modalContent}>
                <span>Telefon</span>
                <input
                  onChange={(e) =>
                    setOrder({ ...order, phoneNumber: e.target.value })
                  }
                  value={order.phoneNumber}
                  className={styles.input}
                  type="text"
                />
              </div>
              <div className={styles.modalContent}>
                <span>Adres</span>
                <textarea
                  onChange={(e) =>
                    setOrder({ ...order, address: e.target.value })
                  }
                  value={order.address}
                  className={styles.textarea}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.confirmButton} type="submit">
                  Onayla
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.title}>Sepetteki Ürünler</div>
        <div className={styles.empty}>
          {basketItems.length <= 0 && "Sepetinizde Ürün Bulunamamaktadır."}
        </div>
        <div className={styles.contentContainer}>
          {basketItems.map((item: Props, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => setModal(true)} className={styles.button}>
            Sipariş ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
