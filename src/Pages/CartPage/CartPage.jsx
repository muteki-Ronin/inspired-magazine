// CORE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Cart } from "./Cart/Cart";
import { Order } from "./Order/Order";
// ACTIONS
import { fetchAll } from "../../store/features/goodsSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector((state) => state.cartReducer);
  const { goodsList } = useSelector((state) => state.goodsReducer);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map((item) => item.id) }));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} />
    </>
  );
};
