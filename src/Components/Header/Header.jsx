// COMPONENTS
import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";
// STYLES
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Navigation />
    </header>
  );
};
