import React from "react";
import useStyles from "./styles";

export default function Product({ id, title, image, price, rating }) {
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
      <button className={classes.button}>Add to basket</button>
    </div>
  );
}
