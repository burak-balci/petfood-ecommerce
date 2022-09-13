import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { logout } from "../../firebase";
import { logout as logoutHandle } from "../../context/auth";
import { useDispatch } from "react-redux";

interface Auth {
  auth: User;
}
interface User {
  user: UserProps;
}
interface UserProps {
  email: string;
  uid: string;
}

const Header = () => {
  const { user } = useSelector((state: Auth) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <div className={styles.contentContainer}>
        <div className={styles.innerContainer}>
          <Link to="/" className={styles.logo}>
            8Pet Mama
          </Link>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" />
          </div>
          {!user ? (
            <div className={styles.buttonContainer}>
              <Link to="/kayit" className={styles.button}>
                Üye Ol
              </Link>
              <Link to="/giris" className={styles.button}>
                Giriş Yap
              </Link>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <Link to="/" className={styles.button}>
                Sepetim
              </Link>
              <span onClick={handleLogout} className={styles.button}>
                Çıkış Yap
              </span>
            </div>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
