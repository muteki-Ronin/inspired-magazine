// CORE
import { RotatingLines } from "react-loader-spinner";
// STYLES
import style from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <RotatingLines
        strokeWidth="3"
        strokeColor="grey"
        animationDuration="0.60"
        width="80"
      />
    </div>
  );
};
