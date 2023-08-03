// CORE
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// STYLES
import cn from "classnames";
import style from "./Category.module.scss";
import footerStyle from "../Footer.module.scss";

export const Category = () => {
  const { genderList, categories } = useSelector(
    (state) => state.navigationReducer
  );

  return (
    <div className={style.category}>
      <h2 className={cn(footerStyle.title, style.categoryTitle)}>КАТАЛОГ</h2>
      <ul className={style.categoryList}>
        {genderList.map((item) => (
          <li key={item}>
            <h3 className={style.categorySubtitle}>
              <NavLink to={item} className={footerStyle.link}>
                {categories[item].title}
              </NavLink>
            </h3>
            <ul className={style.categorySublist}>
              {categories[item].list.map((category) => (
                <li key={category.slug}>
                  <NavLink
                    to={`${item}/${category.slug}`}
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
