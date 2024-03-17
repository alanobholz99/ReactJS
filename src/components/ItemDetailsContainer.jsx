import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import { getProduct } from '../firebase/firebase.js';
const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams();
    useEffect(() => {
       
            getProduct(pid)
            .then(prod => setItem(prod))
      
           .catch(error => console.log(error))
    },[] )

    return (



        <ItemDetail  item={item} />
    )
}

export default ItemDetailsContainer
