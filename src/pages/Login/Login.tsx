import { useState } from "react";
import styles from "./Login.module.css";
import { login } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>8Pet Mama | Giriş Yap</title>
      </Helmet>
      <div className={styles.innerContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>Giriş Yap</div>
          <div className={styles.line}>
            <div className={styles.column}>
              <span className={styles.subTitle}>E-Posta</span>
              <input
                value={email}
                className={styles.input}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.column}>
              <span className={styles.subTitle}>Şifre</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                type="password"
              />
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
