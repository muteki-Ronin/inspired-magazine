// CORE
import { NavLink } from "react-router-dom";
// STYLES
import cn from "classnames";
import style from "./Category.module.scss";
import footerStyle from "../Footer.module.scss";

export const Category = ({ mockList }) => {
  return (
    <div className={style.category}>
      <h2 className={cn(footerStyle.title, style.categoryTitle)}>КАТАЛОГ</h2>
      <ul className={style.categoryList}>
        {mockList.map((item) => (
          <li key={item.link}>
            <h3 className={style.categorySubtitle}>
              <NavLink to={item.link} className={footerStyle.link}>
                {item.title}
              </NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {item.categories.map((category) => (
                <li key={category.link}>
                  <NavLink
                    to={`${item.link}/${category.link}`}
                    className={footerStyle.link}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
