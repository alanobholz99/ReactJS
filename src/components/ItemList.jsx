import React from 'react';
import Item from './item.jsx';
import ItemCart from './ItemCart.jsx';

const ItemList = ({ products, plantilla }) => {

    return (
        <>
            {
        plantilla === "Item"
                    ?
                    products.map(prod => <Item key={prod.id} product={prod} />)

                    :
                
                
                    products.map(prod => <ItemCart key={prod.id} product={prod}  />)

            }


        </>
    )
}

export default ItemList;
