// COMPONENTS
import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";

export const Header = ({ mockList }) => {
  return (
    <header>
      <Top />
      <Navigation mockList={mockList} />
    </header>
  );
};
