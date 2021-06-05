import React from "react";
import useStyles from "./styles";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer/basket/basket";
import { useSelector } from "react-redux";

export default function SubTotal() {
  const classes = useStyles();
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} iteams) : <strong>{value}</strong>
            </p>
            <small className={classes.subtotal_gift}>
              <input className={classes.subtotal_input} type="checkbox" /> This
              order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={classes.subtotal_button}>Proceed to checkout</button>
    </div>
  );
}
