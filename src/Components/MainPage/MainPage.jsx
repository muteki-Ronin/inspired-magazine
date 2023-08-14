// CORE
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
import { Product } from "../Product/Product";
// STYLES
import style from "./MainPage.module.scss";
// ACTIONS
import { setActiveGender } from "../../store/features/navigationSlice";
import { fetchCategory, fetchGender } from "../../store/features/goodsSlice";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goodsReducer);
  // const { activeGender, categories } = useSelector((state) => state.navigation);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch]);

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
