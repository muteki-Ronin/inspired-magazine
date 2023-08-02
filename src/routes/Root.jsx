// CORE
import { Outlet } from "react-router-dom";
// COMPONENT
import { Header } from "../Components/Header/Header";
import { Main } from "../Components/Layout/Main/Main";
import { Footer } from "../Components/Footer/Footer";

const mockList = [
  {
    link: "woman",
    title: "Женщины",
    categories: [
      { link: "bras", title: "Бюстгальтеры" },
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
      { link: "pajamas", title: "Пижамы" },
    ],
  },
  {
    link: "man",
    title: "Мужчины",
    categories: [
      { link: "panties", title: "Трусы" },
      { link: "socks", title: "Носки" },
      { link: "bathrobes", title: "Халаты" },
      { link: "thermal", title: "Термобелье" },
    ],
  },
];

export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer mockList={mockList} />
    </>
  );
};
