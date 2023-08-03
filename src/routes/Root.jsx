// CORE
import { Outlet } from "react-router-dom";
// COMPONENT
import { Header } from "../Components/Header/Header";
import { Main } from "../Components/Layout/Main/Main";
import { Footer } from "../Components/Footer/Footer";

export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
