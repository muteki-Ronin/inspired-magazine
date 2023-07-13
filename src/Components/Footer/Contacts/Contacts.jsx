// STYLES
import style from "./Contacts.module.scss";
import footerStyle from "../Footer.module.scss";

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <a className={footerStyle.link} href="mailto:Inspired@gmail.com">
        Inspired@gmail.com
      </a>
      <a className={footerStyle.link} href="tel:80001234567">
        8 000 123 45 67
      </a>
    </div>
  );
};
