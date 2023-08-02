// CORE
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// COMPONENTS
import { Container } from "../../Layout/Container/Container";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";
// ACTIONS
import { setActiveGender } from "../../../store/features/navigationSlice";
// STYLES
import style from "./Navigation.module.scss";

export const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "woman";

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  return (
    <nav className={style.navigation}>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
