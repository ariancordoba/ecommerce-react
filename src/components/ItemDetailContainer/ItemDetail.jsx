import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p className="mt-3">{item.descripcion}</p>
                <h3 className="mt-3"><b>{item.precio}</b></h3>
            </div>
            <ItemCount stockItems={item.stock}/>
        </div>
    )
}

export default ItemDetail;