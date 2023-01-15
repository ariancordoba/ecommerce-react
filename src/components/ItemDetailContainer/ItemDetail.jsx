import React from "react";
import ItemCount from "../ItemListContainer/ItemCount"
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);


    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p className="mt-3">{item.descripcion}</p>
                <h3 className="mt-3"><b>{item.precio}</b></h3>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;