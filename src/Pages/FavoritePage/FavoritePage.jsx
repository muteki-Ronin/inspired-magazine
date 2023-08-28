// CORE
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Goods } from "../../Components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../store/features/goodsSlice";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesReducer);

  useEffect(() => {
    dispatch(fetchCategory({ list: favorites }));
  }, [dispatch, favorites]);
  return <Goods title="ИЗБРАННОЕ" />;
};
