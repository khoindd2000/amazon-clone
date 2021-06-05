import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function Header() {
  const basket = useSelector((state) => state.basket.basket);
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.header_logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className={classes.header_search}>
        <input className={classes.header_searchInput} type="text" />
        <SearchIcon className={classes.header_searchIcon} />
      </div>

      <div className={classes.header_nav}>
        {/* <Link to={!user && "/login"}> */}
        {/* <Link to={"/login"}> */}
        <div className={classes.header_option}>
          {/* <span className="header_optionLineOne">
              {user ? "Hello " + user.email : "Hello guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span> */}
        </div>
        {/* </Link> */}
        {/* <Link to="/orders"> */}
        <div className={classes.header_option}>
          <span className={classes.header_optionLineOne}>Returns</span>
          <span className={classes.header_optionLineTwo}>& Orders</span>
        </div>
        {/* </Link> */}
        <div className={classes.header_option}>
          <span className={classes.header_optionLineOne}>Your</span>
          <span className={classes.header_optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.header_optionBasket}>
            <div className={classes.BasketIcon}>
              <ShoppingBasketIcon />
            </div>
            <span className={classes.header_basketCount}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
