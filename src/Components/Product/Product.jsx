import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket.length);
  const item = {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  };
  const handleAddToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", item });
  };
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <div className={classes.product_info}>
        <p>{title}</p>
        <p className={classes.product_price}>
          <small>$</small>
          <strong>{price}</strong>
          <div className={classes.product_rating}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </p>
      </div>
      <img className={classes.img} src={image}></img>
      <button className={classes.button} onClick={handleAddToBasket}>
        Add to basket
      </button>
    </div>
  );
}
