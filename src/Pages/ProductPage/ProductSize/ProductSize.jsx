// STYLES
import style from "./ProductSize.module.scss";

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
  return (
    <div className={style.size}>
      <p className={style.title}>Размер</p>
      <div className={style.list}>
        {size?.map((item) => (
          <label className={style.item} key={item}>
            <input
              type="radio"
              name="size"
              value={item}
              checked={selectedSize === item}
              onChange={handleSizeChange}
              className={style.input}
            />
            <span className={style.check}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
