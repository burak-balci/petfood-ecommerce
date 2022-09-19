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

// export interface Order {
//   order: OrderProps;
//   basketItems: Basket;
// }
// export interface OrderProps {
//   name: string;
//   city: string;
//   phoneNumber: string;
//   address: string;
// }

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
export interface Order {
  name: string;
  city: string;
  phoneNumber: string;
  address: string;
  items: Props[];
}
