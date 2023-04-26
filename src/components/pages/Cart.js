import React from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return <div>cart:{cartItems?.length}</div>;
}
