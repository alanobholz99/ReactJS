import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams();
    useEffect(() => {
        fetch("../public/data/productos.json")
            .then(response => response.json())
            .then(productos => {
           
                const prods = productos.find(producto => producto.id == pid);
                 if (prods)
                 
                setItem(prods)
                console.log(prods)
       })
           
    },[] )

    return (



        <ItemDetail item={item} />
    )
}

export default ItemDetailsContainer
