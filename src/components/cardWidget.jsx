import React, { useState } from 'react';

import { useCarritoContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

const CardWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    
    // const [count, setCount] = useState(0)
    // const handlerIncremento = () => {
    //     setCount (count + 1)
    
    return (




<Link  to={"/Cart"}>
<button variant="primary">

      Carrito <Badge bg="secondary"></Badge>
      <span className="visually-hidden">{getItemQuantity()}</span>
   
    </button>

    </Link>
   
    );

    }
export default CardWidget;
