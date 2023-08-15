// CORE
import { NavLink } from "react-router-dom";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
// STYLES
import style from "./Banner.module.scss";
// API_CONSTS
import { API_URL } from "../../api/consts";

export const Banner = ({ data }) => {
  return (
    <>
      {data && (
        <section
          className={style.banner}
          style={{
            backgroundImage: `url(${API_URL}${data.bg.desktop})`,
          }}
        >
          <Container>
            <div className={style.content}>
              <h2 className={style.title}>{data.description}</h2>
              <NavLink className={style.link} to={`product/${data.id}`}>
                Пкрейти
              </NavLink>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
