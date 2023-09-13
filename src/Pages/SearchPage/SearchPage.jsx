// CORE
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Goods } from "../../Components/Goods/Goods";
// ACTIONS
import { fetchAll } from "../../store/features/goodsSlice";
// STYLES
import style from "./SearchPage.module.scss";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goodsReducer);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("q");
    const params = { search };

    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);

  return goodsList.length ? (
    <Goods title="Поиск" />
  ) : (
    <h3 className={style.empty}>
      Ничего не найдено по Вашему запросу {searchParams.get("q")}!
    </h3>
  );
};
