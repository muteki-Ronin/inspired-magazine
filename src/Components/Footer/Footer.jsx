// COMPONENTS
import { Container } from "../Layout/Container";

// STYLE
import cn from "classnames";
import style from "./Footer.module.scss";
// ICONS
import vk from "/src/assets/icons/social/vk.svg";
import fb from "/src/assets/icons/social/fb.svg";

export const Footer = () => {
  return (
    <footer>
      <Container className={style.container}>
        <div className={style.category}>
          <h3 className={cn(style.title, style.categoryTitle)}>КАТАЛОГ</h3>
          <ul className={style.categoryList}>
            <li>
              <h3 className={style.categorySubtitle} href="#">Женщины</h3>
              <ul className={style.categorySublist}>
                <li><a className={style.link} href="#">Бюстгальтеры</a></li>
                <li><a className={style.link} href="#">Трусы</a></li>
                <li><a className={style.link} href="#">Носки</a></li>
                <li><a className={style.link} href="#">Халаты</a></li>
                <li><a className={style.link} href="#">Термобелье</a></li>
                <li><a className={style.link} href="#">Пижамы</a></li>
              </ul>
            </li>
            <li>
              <h3 className={style.categorySubtitle} href="#">Мужчины</h3>
              <ul className={style.categorySublist}>
                <li><a className={style.link} href="#">Трусы</a></li>
                <li><a className={style.link} href="#">Носки</a></li>
                <li><a className={style.link} href="#">Халаты</a></li>
                <li><a className={style.link} href="#">Термобелье</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className={style.contacts}>
          <a className={style.link} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
          <a className={style.link} href="tel:80001234567">8 000 123 45 67</a>
        </div>

        <div className={style.social}>
          <h3 className={cn(style.title, style.socialTitle)}>Связаться с нами</h3>
          <h3 className={style.socialSubtitle}>Контакты и адреса магазинов:</h3>
          <ul className={style.socialList}>
            <li>
              <a className={style.socialLinkVK} href="#">
                <img src={vk} alt="VK" />
              </a>
            </li>
            <li>
              <a className={style.socialLinkFB} href="#">
                <img src={fb} alt="FB" />
              </a>
            </li>
          </ul>
        </div>

        <div className={style.copyright}>
          <p>© INSPIRED, 2023</p>
        </div>

        <div className={style.development}>
          <ul className={style.developmentList}>
            <li>Designer: Anastasia Ilina</li>
            <li>Developer: Alex Diachenko</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
