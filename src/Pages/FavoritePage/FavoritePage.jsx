// CORE
import { useDispatch, useSelector } from "react-redux";
// HOOKS
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";
// COMPONENTS
import { Goods } from "../../Components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../store/features/goodsSlice";

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

  return <Goods title="ИЗБРАННОЕ" />;
};
