import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import store from "./context/store";
import { login as loginHandle } from "./context/auth";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { clearFoods, updateFoods } from "./context/food";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Hesap başarıyla oluşturuldu.");
    return user;
  } catch (err) {
    if (
      (err as Error).message === "Firebase: Error (auth/email-already-in-use)."
    ) {
      toast.error("Bu email adresine ait hesap bulunmaktadır.");
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    toast.error((err as Error).message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        email: auth.currentUser?.email,
        uid: auth.currentUser?.uid,
      })
    );
    const uid = user.uid;
  } else {
  }
});

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    toast.error((err as Error).message);
  }
};

export const getFoods = async (type: string) => {
  const q = query(collection(db, "foods"), where("type", "==", type));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    store.dispatch(updateFoods(doc.data()));
  });
};
