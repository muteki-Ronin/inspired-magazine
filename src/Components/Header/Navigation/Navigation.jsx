// COMPONENTS
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";

export const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  );
};
