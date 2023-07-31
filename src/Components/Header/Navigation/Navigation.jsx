// COMPONENTS
import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
// STYLES
import style from "./Navigation.module.scss";

export const Navigation = ({ mockList }) => {
  return (
    <nav className={style.navigation}>
      <Container>
        <Gender mockList={mockList} />
        <Category mockList={mockList} />
      </Container>
    </nav>
  );
};
