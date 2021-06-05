import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";

export default function Checkout() {
  const basket = useSelector((state) => state.basket.basket);
  const classes = useStyles();
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_left}>
        <img
          className={classes.checkout_ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Hello</h3>
          <h2 className={classes.checkout_title}>Your shopping basket</h2>
          <div className={classes.checkout_product}>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.checkout_right}>
        <SubTotal />
      </div>
    </div>
  );
}
