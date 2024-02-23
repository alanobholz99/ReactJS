import React from 'react';
import Item from './item';


const ItemList = ({products}) => {
    return (
        <>
        {products.map(prod => <Item product ={prod}/>)}
        
        
        </>
    )
}

export default ItemList;
