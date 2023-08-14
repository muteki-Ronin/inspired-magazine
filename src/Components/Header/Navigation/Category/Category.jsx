// CORE
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// STYLE
import cn from "classnames";
import style from "./Category.module.scss";

export const Category = () => {
  const { activeGender, categories } = useSelector(
    (state) => state.navigationReducer
  );

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map((item) => (
        <li key={item.slug}>
          <NavLink
            to={`catalog/${activeGender}/${item.slug}`}
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
