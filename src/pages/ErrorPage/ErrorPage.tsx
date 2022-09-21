import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>404</div>
      <div className={styles.errorMessage}>Üzgünüm,o sayfayı bulamadık.</div>
    </div>
  );
};

export default ErrorPage;
