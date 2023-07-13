// COMPONENTS
import { Container } from "../../Layout/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";

export const Navigation = ({ mockList }) => {
  return (
    <nav>
      <Container>
        <Gender mockList={mockList} />
        <Category mockList={mockList} />
      </Container>
    </nav>
  );
};
