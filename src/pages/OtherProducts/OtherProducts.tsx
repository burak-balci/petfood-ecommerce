import { NavLink, Outlet } from "react-router-dom";
import styles from "./OtherProducts.module.css";

const OtherProducts = () => {
  const activeStyle = {
    backgroundColor: "#ec971f",
    color: "white",
  };
  const normalStyle = {
    color: "grey",
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.list}>
          <h3 className={styles.title}>Reyonlar</h3>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            className={styles.link}
            to="yas-mamasi"
          >
            Yaş Mama
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            className={styles.link}
            to="odul-mamasi"
          >
            Ödül Mamaları
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            className={styles.link}
            to="kemik"
          >
            Kemik
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            className={styles.link}
            to="kum"
          >
            Kum
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            className={styles.link}
            to="biskuvi"
          >
            Bisküvi
          </NavLink>
        </div>
        <div className={styles.other}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
