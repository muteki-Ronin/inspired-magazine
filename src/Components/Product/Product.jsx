// CORE
import { NavLink } from "react-router-dom";
// COMPONENTS
import { ColorList } from "../ColorList/ColorList";
import { BtnLike } from "../BtnLike/BtnLike";
// API_CONSTS
import { API_URL } from "../../api/consts.js";
// STYLES
import style from "./Product.module.scss";

export const Product = ({ id, pic, title, price, colors, description }) => {
  return (
    <article className={style.product}>
      <NavLink to={`/product/${id}`} className={style.link}>
        <img
          className={style.image}
          src={`${API_URL}${pic}`}
          alt={`${title}. ${description}`}
        />
        <h3 className={style.title}>{title}</h3>
      </NavLink>

      <div className={style.row}>
        <p className={style.price}>{price} грн.</p>
        <BtnLike id={id} />
      </div>
      <ColorList colors={colors} />
    </article>
  );
};
