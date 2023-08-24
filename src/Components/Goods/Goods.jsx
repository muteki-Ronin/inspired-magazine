// CORE
import { useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
import { Product } from "../Product/Product";
// STYLES
import style from "./Goods.module.scss";

export const Goods = ({ title }) => {
  const { goodsList } = useSelector((state) => state.goodsReducer);

  // const title = categoryData?.title ?? "Новинки";

  return (
    <section>
      <Container>
        <h2 className={style.title}>{title ?? "Новинки"}</h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        {/* {category && <p>Категория: {category}</p>} */}
      </Container>
    </section>
  );
};
