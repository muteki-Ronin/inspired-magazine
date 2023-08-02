// CORE
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// STYLES
import cn from "classnames";
import style from "./Gender.module.scss";

export const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(
    (state) => state.navigationReducer
  );

  return (
    <ul className={style.gender}>
      {genderList.map((item) => (
        <li key={item} className={style.item}>
          <NavLink
            className={({ isActive }) =>
              cn(
                style.link,
                (isActive || item === activeGender) && style.linkActive
              )
            }
            to={item}
          >
            {categories[item].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
