import React from "react";
import styles from "./DetailCard.module.css";

const DetailCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <img
            src="https://www.temizmama.com/assets/img/urun/2/r-bonacibo-tavuklu-yavru-kedi-mamasi.webp"
            alt=""
            className={styles.image}
          />
        </div>
        <div>
          <h3 className={styles.title}>
            BonaCibo Kitten Tavuklu (Hamsi ve Pirinç eşliğinde) Yavru Kedi
            Maması
          </h3>
          <h5 className={styles.desc}>
            Tüm ırklardan 12 aya kadar Yavru Kediler ile Hamilelik ve Emzirme
            Dönemindeki Kediler için hazırlanmıştır. BonaCibo Kitten; 12 aya
            kadar, sütten kesilmiş ve hassas sindirim sistemine sahip Yavru
            kedinizin; sağlıklı gelişimini ve bağışıklık sisteminin güçlenmesini
            desteklemek üzere formüle edilmiştir.
          </h5>
        </div>
      </div>
      <div>
        <table className={styles.table}>
          <tr>
            <th>Paket</th>
            <th>Fiyat</th>
            <th>Adet</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <div>1.5 Kg x 2 Adet</div>
              <div className={styles.subtitle}>(1 Adet = ₺ 76,63 ) </div>
            </td>
            <td>₺ 153,25</td>
            <td>1</td>
            <td>Sepete ekle</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DetailCard;
