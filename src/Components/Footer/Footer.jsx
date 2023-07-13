// COMPONENTS
import { Container } from "../Layout/Container";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Social } from "./Social/Social";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
// STYLES
import style from "./Footer.module.scss";

export const Footer = ({ mockList }) => {
  return (
    <footer>
      <Container>
        <div className={style.container}>
          <Category mockList={mockList} />
          <Contacts />
          <Social />
          <Copyright />
          <Development />
        </div>
      </Container>
    </footer>
  );
};
