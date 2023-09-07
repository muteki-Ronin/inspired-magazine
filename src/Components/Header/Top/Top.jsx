// CORE
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../../Layout/Container/Container";
// STYLES
import cn from "classnames";
import style from "./Top.module.scss";
// ICONS
import logo from "/src/assets/logo.svg";
import { ReactComponent as SearchSVG } from "../../../assets/icons/search.svg";
import { ReactComponent as BasketSVG } from "../../../assets/icons/basket.svg";
import { ReactComponent as LikeSVG } from "../../../assets/icons/heart.svg";

export const Top = () => {
  const { countItems } = useSelector((state) => state.cartReducer);
  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <div className={style.topPhone}>
          <a className={style.topLink} href="tel:80001234567">
            8 000 123 45 67
          </a>
        </div>

        <NavLink className={style.topLogo} to="/">
          <img src={logo} alt="Logo Inspired" />
        </NavLink>
        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li>
              <button className={style.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li>
              <NavLink to="/cart" className={style.topLink}>
                <BasketSVG />
                <span className={style.topLinkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={cn(style.topLink, style.like)}>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
