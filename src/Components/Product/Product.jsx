// CORE
import { NavLink } from "react-router-dom";
// COMPONENTS
import { ColorList } from "../ColorList/ColorList";
// API_CONSTS
import { API_URL } from "../../api/consts.js";
// STYLES
import style from "./Product.module.scss";
// ICONS
import { ReactComponent as Like } from "../../assets/icons/heart_product.svg";

export const Product = ({ id, pic, title, price, colors }) => {
  return (
    <article className={style.product}>
      <NavLink to={`product/${id}`} className={style.link}>
        <img className={style.image} src={`${API_URL}${pic}`} />
        <h3 className={style.title}>{title}</h3>
      </NavLink>

      <div className={style.row}>
        <p className={style.price}>{price} грн.</p>
        <button>
          <Like />
        </button>
      </div>
      <ColorList colors={colors} />
    </article>
  );
};
