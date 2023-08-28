// CORE
import { useDispatch, useSelector } from "react-redux";
// STYLES
import cn from "classnames";
import style from "./BtnLike.module.scss";
// ICONS
import { ReactComponent as LikeSVG } from "../../assets/icons/heart.svg";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/features/favoritesSlice";

export const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favoritesReducer.includes(id)
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  return (
    <button
      className={isFavorite ? cn(style.like, style.active) : style.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  );
};
