// CORE

// COMPONENTS
import { Container } from "../Layout/Container/Container";
// STYLE
import style from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={style.search}>
      <Container>
        <form className={style.form}>
          <input
            className={style.input}
            type="search"
            name="search"
            placeholder="Найти..."
          />
          <button className={style.btn} type="submit">
            Искать
          </button>
        </form>
      </Container>
    </div>
  );
};
