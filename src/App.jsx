// CORE
import { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useDispatch } from "react-redux";
// COMPONENTS
import { Root } from "./routes/Root";
// PAGES
import { MainPage } from "./Components/MainPage/MainPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
// ACTIONS
import { fetchNavigation } from "./store/features/navigationSlice";
import { fetchColors } from "./store/features/colorsSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      {/* <Route path="women" element={<MainPage gender="women" />} />
      <Route path="men" element={<MainPage gender="men" />} />
      <Route path="kids" element={<MainPage gender="kids" />} />
      <Route path="women/:category" element={<MainPage gender="women" />} />
      <Route path="men/:category" element={<MainPage gender="men" />} />
      <Route path="kids/:category" element={<MainPage gender="kids" />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
};
