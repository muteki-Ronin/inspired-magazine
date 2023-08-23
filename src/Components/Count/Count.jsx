// STYLES
import cn from "classnames";
import style from "./Count.module.scss";

export const Count = ({
  className,
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className={cn(style.count, className)}>
      <button className={style.item} type="button" onClick={handleDecrement}>
        -
      </button>
      <span className={cn(style.item, style.number)}>{count}</span>
      <button
        className={cn(style.item, style.number)}
        type="button"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};
