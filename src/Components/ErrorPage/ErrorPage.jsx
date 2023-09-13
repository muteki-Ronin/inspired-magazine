// CORE
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { fetchNavigation } from "../../store/features/navigationSlice.js";
import { fetchColors } from "../../store/features/colorsSlice.js";
// STYLES
import style from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector((state) => state.statusServerReducer);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === "/404") {
      navigate("/");
    }
  }, [navigate, status, location]);

  useEffect(() => {
    if (!status && location.pathname === "/404") {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [dispatch, status, location]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>Произошла ОШИБКА! Попробуйте зайти позже!</h2>
      <p className={style.message}>
        {routeError?.message || "Неизвестная ошибка!"}
      </p>
    </div>
  );
};
