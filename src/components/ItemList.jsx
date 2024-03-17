import React from 'react';
import Item from './item';
import ItemCart from './ItemCart';

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
