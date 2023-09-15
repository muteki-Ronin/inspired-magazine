// CORE
import { useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../../../Components/Layout/Container/Container";
import { CartItem } from "./CartItem/CartItem";
import { Preloader } from "../../../Components/Preloader/Preloader";
// STYLES
import style from "./Cart.module.scss";

export const Cart = ({ cartItems, goodsList }) => {
  const { status } = useSelector((state) => state.goodsReducer);
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList.find((product) => product.id === item.id);
    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>
        {status === "loading" ? (
          <Preloader />
        ) : (
          <>
            {cartItems.length ? (
              <ul className={style.list}>
                {cartItems.map((item) => (
                  <li
                    key={`${item.id}-${item.color}-${item.size}`}
                    className={style.item}
                  >
                    <CartItem {...item} goodsList={goodsList} />
                  </li>
                ))}
              </ul>
            ) : (
              <h3 className={style.empty}>В корзине пусто.</h3>
            )}
            <div className={style.total}>
              <p>Итого:</p>
              <p>{totalPrice} грн.</p>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
