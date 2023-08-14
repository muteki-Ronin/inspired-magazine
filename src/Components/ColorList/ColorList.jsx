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
      {colors.map((colorId, i) => {
        const itemColorList = colorsList.find((color) => color.id === colorId);
        return <Color key={colorId} color={itemColorList?.code} check={!i} />;
      })}
    </ul>
  );
};
