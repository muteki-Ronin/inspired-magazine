// CORE
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Goods } from "../Goods/Goods";
// STYLES

// ACTIONS
import { setActiveGender } from "../../store/features/navigationSlice";
import { fetchCategory, fetchGender } from "../../store/features/goodsSlice";
import { Banner } from "../Banner/Banner";

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories } = useSelector(
    (state) => state.navigationReducer
  );
  const genderData = categories[activeGender];

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch]);

  return (
    <>
      <Banner data={genderData?.banner} />
      <Goods
        categoryData={genderData?.list.find((item) => item.slug === category)}
      />
    </>
  );
};
