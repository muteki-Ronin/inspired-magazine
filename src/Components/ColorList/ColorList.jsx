// CORE
import { useSelector } from "react-redux";
// COMPONENTS
import { Color } from "./Color/Color";
import { ColorLabel } from "./ColorLabel/ColorLabel";
// STYLE
import style from "./ColorList.module.scss";

export const ColorList = ({ colors, handleColorChange, selectedColor }) => {
  const { colorsList } = useSelector((state) => state.colorsReducer);

  return handleColorChange ? (
    <div className={style.colorList}>
      {colors?.map((id, i) => {
        const color = colorsList.find((color) => color.id === id);
        return (
          <ColorLabel
            key={id}
            color={color}
            check={!i}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
        );
      })}
    </div>
  ) : (
    <ul className={style.colorList}>
      {colors.map((colorId, i) => {
        const itemColorList = colorsList.find((color) => color.id === colorId);
        return <Color key={colorId} color={itemColorList?.code} check={!i} />;
      })}
    </ul>
  );
};
