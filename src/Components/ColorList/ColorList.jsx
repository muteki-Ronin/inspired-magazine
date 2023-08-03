// CORE
import { useSelector } from "react-redux";
// COMPONENTS
import { Color } from "./Color/Color";
// STYLE
import style from "./ColorList.module.scss";

export const ColorList = ({ colors }) => {
  const { colorsList } = useSelector((state) => state.colorsReducer);

  return (
    <ul className={style.colorList}>
      {colors.map((id, i) => {
        const color = colorsList.find((color) => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};
