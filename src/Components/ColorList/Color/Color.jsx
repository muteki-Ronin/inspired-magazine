// CORE
import { useEffect, useRef } from "react";
// STYLES
import cn from "classnames";
import style from "./Color.module.scss";

export const Color = ({ color, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color);
  }, [color]);

  return (
    <li ref={colorRef} className={cn(style.color, check && style.colorCheck)} />
  );
};
