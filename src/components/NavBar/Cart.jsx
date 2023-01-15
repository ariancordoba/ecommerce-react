import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/CartContext"

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos en el Carrito!
                        </div>
                        <Link to={"/"} className="btn btn-danger text-white">Volver a la Pagina Principal</Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-end" colSpan={5}><Link className="btn btn-danger text-white" onClick={clear}>Vaciar Carrito</Link></th>
                        </tr>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle">
                                        <Link onClick={() => {removeItem(item.id)}}>
                                            <img src={"../images/trash1.svg"} alt={"Eliminar Producto"} width={24} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;