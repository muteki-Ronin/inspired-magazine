// CORE
import { useDispatch, useSelector } from "react-redux";
// HOOKS
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";
// COMPONENTS
import { Goods } from "../../Components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../store/features/goodsSlice";
// STYLES
import style from "./FavoritePage.module.scss";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesReducer);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param));
    }
  }, [dispatch, favorites, page]);

  return favorites.length ? (
    <Goods title="ИЗБРАННОЕ" />
  ) : (
    <h3 className={style.empty}>Вы ничего не добавили в избранное!</h3>
  );
};
