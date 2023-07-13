// STYLES
import style from "./Development.module.scss";
import footerStyle from "../Footer.module.scss";

export const Development = () => {
  return (
    <div className={style.development}>
      <ul className={style.developmentList}>
        <li>
          Designer:
          <a
            className={footerStyle.link}
            href="https://t.me/Mrshmalloww"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasia Ilina
          </a>
        </li>
        <li>
          Developer:
          <a
            className={footerStyle.link}
            href="https://github.com/muteki-Ronin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Diachenko
          </a>
        </li>
      </ul>
    </div>
  );
};
