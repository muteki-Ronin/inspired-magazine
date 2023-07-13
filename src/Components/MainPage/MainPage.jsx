// CORE
import { useParams } from "react-router-dom";
// COMPONENTS
import { Container } from "../Layout/Container";

export const MainPage = ({ gender = "woman" }) => {
  const { category } = useParams();

  return (
    <Container>
      <div>MainPage: {gender}</div>
      {category && <p>Категория: {category}</p>}
    </Container>
  );
};
