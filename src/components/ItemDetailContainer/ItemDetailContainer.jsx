import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "../json/productos.json"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000)
        })

        promesa.then((data) => {
            setItem(data)
        })
    }, [id]);
    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;