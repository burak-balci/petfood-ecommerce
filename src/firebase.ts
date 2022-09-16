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
  serverTimestamp,
  addDoc,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { clearFoods, updateFoods } from "./context/food";
import { Basket, Item } from "./types";
import { appendItem, setItems } from "./context/basket";
import { number } from "yup";

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

    const q = query(collection(db, "basket"), where("uid", "==", user.uid));
    // onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     store.dispatch(appendItem({ data: doc.data(), id: doc.id }));
    //   });
    // });
    onSnapshot(q, (doc) => {
      store.dispatch(
        setItems(
          doc.docs.reduce(
            (basketItems: any, basket) => [
              ...basketItems,
              { ...basket.data(), id: basket.id },
            ],
            []
          )
        )
      );
    });
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

export const addBasket = async (data: Basket) => {
  try {
    const result = await addDoc(collection(db, "basket"), data);
    return result.id;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const updateBasket = async (id: any, piece: number | string) => {
  try {
    const basketRef = doc(db, "basket", id);
    await updateDoc(basketRef, { piece });
    toast.success("Sepet başarıyla güncellendi.");
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const getAllFoods = async () => {
  const q = query(collection(db, "foods"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    store.dispatch(updateFoods(doc.data()));
  });
};

export const deleteBasketItem = async (id: any) => {
  try {
    await deleteDoc(doc(db, "basket", id));
    toast.success("Sepet başarıyla güncellendi.");
  } catch (error) {
    toast.error((error as Error).message);
  }
};
