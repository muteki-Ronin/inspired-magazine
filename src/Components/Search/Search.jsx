// CORE
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
// ACTIONS
import { toggleSearch } from "../../store/features/searchSlice";
// STYLE
import style from "./Search.module.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const { openSearch } = useSelector((state) => state.searchReducer);

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object({
    search: Yup.string().required("Вы не ввели товар для поиска!"),
  });

  const navigate = useNavigate();

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleSearch(false));
    }
  };

  return (
    <div className={style.search}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={style.form}>
            <Field
              className={style.input}
              type="search"
              name="search"
              placeholder="Найти..."
            />
            <ErrorMessage
              className={style.error}
              name="search"
              component={"span"}
            />

            <button className={style.btn} type="submit">
              Искать
            </button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};
