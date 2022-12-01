import React from "react";

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-primary position-relative">
            <img src="../images/trash.svg" alt="" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill      bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CartWidget;