// CORE
import { NavLink, useLocation } from "react-router-dom";
// STYLE
import cn from "classnames";
import style from "./Category.module.scss";

export const Category = ({ mockList }) => {
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "woman";
  const categoriesList = mockList.find((item) => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => (
        <li key={item.link}>
          <NavLink
            to={`${gender}/${item.link}`}
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
