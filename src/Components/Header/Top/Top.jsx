// COMPONENTS
import { Container } from "../../Layout/Container";
// STYLES
import cn from "classnames";
import style from "./Top.module.scss";
// ICONS
import logo from "/src/assets/logo.svg";
import search from "/src/assets/icons/search.svg";
import basket from "/src/assets/icons/basket.svg";
import heart from "/src/assets/icons/heart.svg";

export const Top = () => {
  return (
    <div className="top">
      <Container className={style.topContainer}>
        <a className={cn(style.topLink, style.topPhone)} href="tel:80001234567">
          8 000 123 45 67
        </a>
        <a className={style.topLogo} href="/">
          <img src={logo} alt="Logo Inspired" />
        </a>
        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.navItem}>
              <button className={style.topLink}>
                <img src={search} alt="Search" />
              </button>
            </li>
            <li className={style.navItem}>
              <a className={style.topLink}>
                <img src={basket} alt="Basket" />
              </a>
            </li>
            <li className={style.navItem}>
              <a className={style.topLink}>
                <img src={heart} alt="Heart" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
