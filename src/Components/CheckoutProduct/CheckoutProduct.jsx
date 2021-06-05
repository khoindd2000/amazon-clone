import React from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img className={classes.checkoutProduct_image} src={image} />
      <div className={classes.checkoutProduct_info}>
        <p className={classes.checkoutProduct_title}>{title}</p>
        <p className={classes.checkoutProduct_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.checkoutProduct_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className={classes.checkoutButton} onClick={handleRemove}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}
