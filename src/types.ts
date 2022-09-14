import { FieldValue } from "firebase/firestore";

export interface Auth {
  auth: User;
  basket: Basket;
}
export interface User {
  user: UserProps;
}
export interface UserProps {
  email: string;
  uid: string;
}

export interface Basket {
  basketItems: Item;
  createdAt?: FieldValue;
  uid: string;
  piece: string;
}

export interface Item {
  price: number;
  title: string;
  type: string;
  desc: string;
  image: string;
  length?: number;
  id?: string;
}
