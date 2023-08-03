// CORE
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
import { Product } from "../Product/Product";
// ACTIONS
import { fetchGoods } from "../../store/features/goodsSlice";
// STYLE
import style from "./MainPage.module.scss";

export const MainPage = ({ gender = "women" }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goodsReducer);

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [gender, dispatch]);

  return (
    <section>
      <Container>
        <h2 className={style.title}>Новинки</h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        {category && <p>Категория: {category}</p>}
      </Container>
    </section>
  );
};
