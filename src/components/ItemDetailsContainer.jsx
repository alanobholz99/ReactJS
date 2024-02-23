import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from './itemDetail';
const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const {pid} = useParams()
    useEffect(()  =>  {
        fetch(`../public/data/productos.json`)
    .then(response => response.json())
    .then (productos => {
       
        const prod = productos.find(producto => producto.id == pid )

        if (prod)
setItem (prod)    
    })
}, [])
    
    return (
        
     
      <ItemDetail item={item} />
     
     

       
           
       
    )
}

export default ItemDetailsContainer
