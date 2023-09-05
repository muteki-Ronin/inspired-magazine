// CORE
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Container } from "../../Components/Layout/Container/Container";
import { ColorList } from "../../Components/ColorList/ColorList";
import { ProductSize } from "./ProductSize/ProductSize";
import { Count } from "../../Components/Count/Count";
import { Goods } from "../../Components/Goods/Goods";
import { BtnLike } from "../../Components/BtnLike/BtnLike";
// ACTIONS
import { fetchProduct } from "../../store/features/productSlice";
import { fetchCategory } from "../../store/features/goodsSlice";
import { addToCart } from "../../store/features/cartSlice";
// STYLES
import cn from "classnames";
import style from "./ProductPage.module.scss";
// CONSTS
import { API_URL } from "../../api/consts";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  /////////////////
  const { product } = useSelector((state) => state.productReducer);
  const { gender, category, colors } = product;
  const { colorsList } = useSelector((state) => state.colorsReducer);
  ////////////////
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        selectedColor,
        selectedSize,
        count,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(
      fetchCategory({ gender, category, count: 4, top: true, exclude: id })
    );
  }, [gender, category, id, dispatch]);

  useEffect(() => {
    if (colorsList?.length && colors?.length) {
      setSelectedColor(
        colorsList.find((color) => color.id === colors[0]).title
      );
    }
  }, [colorsList, colors]);

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img
            src={`${API_URL}${product.pic}`}
            alt={`${product.title} ${product.description}`}
            className={style.image}
          />
          <form className={style.content} onSubmit={handleSubmitForm}>
            <h2 className={style.title}>{product.title}</h2>

            <p className={style.price}>{product.price} грн.</p>

            <div className={style.vendorCode}>
              <p className={style.subtitle}>Артикул</p>
              <span className={style.id}>{product.id}</span>
            </div>

            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
              <ColorList
                colors={colors}
                handleColorChange={handleColorChange}
                selectedColor={selectedColor}
              />
            </div>

            <ProductSize
              size={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
            />

            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>
                Описание
              </p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>

            <div className={style.control}>
              <Count
                className={style.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />

              <button className={style.addCart}>В корзину</button>

              <BtnLike id={id} />
            </div>
          </form>
        </Container>
      </section>

      <Goods title="Вам также может понравиться" />
    </>
  );
};
