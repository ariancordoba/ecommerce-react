import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "../ItemListContainer/ItemList";
import arrayProductos from "../json/productos.json"


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            })
        })

        promesa.then((data) => {
            setItems(data)
        })

    }, [id]);


    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;