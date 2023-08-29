// CORE
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// STYLES
import cn from "classnames";
import style from "./Pagination.module.scss";
import { setPage } from "../../store/features/goodsSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goodsReducer);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(page + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={style.item}>
          <NavLink
            to={`${pathname}?page=${i}`}
            className={cn(style.link, i === +page ?? style.linkActive)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <div className={style.pagination}>
      <button
        className={style.arrow}
        onClick={handlePrevPage}
        disabled={page <= 2}
      >
        &lt;
      </button>
      <ul className={style.list}>{renderPaginationItems()}</ul>
      <button
        className={style.arrow}
        onClick={handleNextPage}
        disabled={page >= pages - 1 || page <= 3}
      >
        &gt;
      </button>
    </div>
  );
};