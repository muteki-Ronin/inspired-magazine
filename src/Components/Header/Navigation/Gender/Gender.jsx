// CORE
import { NavLink, useLocation } from "react-router-dom";
// STYLES
import cn from "classnames";
import style from "./Gender.module.scss";

export const Gender = ({ mockList }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || "woman";

  return (
    <ul className={style.gender}>
      {mockList.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cn(style.link, (isActive || gender === item.link) && style.linkActive)
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
