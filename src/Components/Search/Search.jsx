// CORE
import { Formik, Form, Field, ErrorMessage } from "formik";
// COMPONENTS
import { Container } from "../Layout/Container/Container";
// STYLE
import style from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={style.search}>
      <Container>
        <Formik>
          <Form className={style.form}>
            <label>
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
            </label>
            <button className={style.btn} type="submit">
              Искать
            </button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};
