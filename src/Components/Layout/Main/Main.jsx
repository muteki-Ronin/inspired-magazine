// CORE
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// STYLES
import style from "./Main.module.scss";

export const Main = ({ children }) => {
  const { status } = useSelector((state) => state.statusServerReducer);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!status && location.pathname !== "/404") {
      navigate("/404");
    }
  }, [navigate, status, location]);

  return <div className={style.main}>{children}</div>;
};
