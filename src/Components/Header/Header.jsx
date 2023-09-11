// CORE
import { useSelector } from "react-redux";
// COMPONENTS
import { Top } from "./Top/Top";
import { Search } from "../Search/Search";
import { Navigation } from "./Navigation/Navigation";
// STYLES
import style from "./Header.module.scss";

export const Header = () => {
  const { openSearch } = useSelector((state) => state.searchReducer);

  return (
    <header className={style.header}>
      <Top />
      {openSearch && <Search />}
      <Navigation />
    </header>
  );
};
