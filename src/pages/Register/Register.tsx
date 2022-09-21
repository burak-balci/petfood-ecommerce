import styles from "./Register.module.css";
import { Formik, Field, Form } from "formik";
import RegisterSchema from "./RegisterSchema";
import { register } from "../../firebase";
import { Helmet } from "react-helmet";

interface Values {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>8Pet Mama | Üye Ol</title>
      </Helmet>
      <div className={styles.innerContainer}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values: Values) => {
            register(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.title}>Üye Ol</div>
              <div className={styles.line}>
                <div className={styles.column}>
                  <span className={styles.subTitle}>E-Posta</span>
                  <Field
                    id="email"
                    name="email"
                    className={styles.input}
                    type="email"
                  />
                  {errors.email && touched.email && (
                    <div className={styles.errormessage}>{errors.email}</div>
                  )}
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.column}>
                  <span className={styles.subTitle}>Şifre</span>
                  <Field
                    id="password"
                    name="password"
                    className={styles.input}
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <div className={styles.errormessage}>{errors.password}</div>
                  )}
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.column}>
                  <span className={styles.subTitle}>Şifre (Tekrar)</span>
                  <Field
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className={styles.input}
                    type="password"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <div className={styles.errormessage}>
                      {errors.passwordConfirm}
                    </div>
                  )}
                </div>
              </div>
              <button type="submit" className={styles.button}>
                Üye Ol
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
