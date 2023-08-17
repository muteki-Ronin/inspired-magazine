// CORE
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMedia } from "react-use";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
// STYLES
import style from "./Banner.module.scss";
// API_CONSTS
import { API_URL } from "../../api/consts";

export const Banner = ({ data }) => {
  const isMobile = useMedia("(max-width: 540px)");
  const isTablet = useMedia("(max-width: 786px)");
  const isLaptop = useMedia("(max-width: 1024px)");
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    if (isMobile) {
      setBgUrl(`${API_URL}${data?.bg.mobile}`);
    } else if (isTablet) {
      setBgUrl(`${API_URL}${data?.bg.tablet}`);
    } else if (isLaptop) {
      setBgUrl(`${API_URL}${data?.bg.laptop}`);
    } else {
      setBgUrl(`${API_URL}${data?.bg.desktop}`);
    }
  }, [isMobile, isTablet, isLaptop, data]);

  // TEST
  // const [bgUrl, setBgUrl] = useState("");
  // useEffect(() => {
  //   const foo = () => {
  //     // console.dir(document.documentElement.clientWidth);
  //     const width = document.documentElement.clientWidth;

  //     if (width < 540) {
  //       setBgUrl(`${API_URL}${data?.bg.mobile}`);
  //     } else if (width < 768) {
  //       setBgUrl(`${API_URL}${data?.bg.tablet}`);
  //     } else if (width < 1024) {
  //       setBgUrl(`${API_URL}${data?.bg.laptop}`);
  //     } else {
  //       setBgUrl(`${API_URL}${data?.bg.desktop}`);
  //     }
  //   };
  //   foo();
  //   window.addEventListener("resize", foo);

  //   return () => {
  //     window.removeEventListener("resize", foo);
  //   };
  // }, [data]);

  return (
    <>
      {data && (
        <section
          className={style.banner}
          style={{
            backgroundImage: `url(${bgUrl})`,
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
