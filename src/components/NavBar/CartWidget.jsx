import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/Cart"} type="button" className="btn position-relative">
            <img src={"/images/shop-bag.svg"} alt={"Carrito"} width={32} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;