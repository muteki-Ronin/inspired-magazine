// CORE
import { NavLink } from "react-router-dom";
// STYLES
import cn from "classnames";
import style from "./Gender.module.scss";

export const Gender = ({ mockList }) => {
  return (
    <ul className={style.gender}>
      {mockList.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cn(style.link, isActive && style.linkActive)
            }
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
