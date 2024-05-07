import React from 'react';

import { useCarritoContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

export const CardWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    
    // const [count, setCount] = useState(0)
    // const handlerIncremento = () => {
    //     setCount (count + 1)
    
    return (




<Link  to={"/Cart"}>
<button style={{background:"#6938e5", borderRadius:"50px"}}>

      Carrito <Badge style={{background:"#6938e5", }}></Badge>
      <span className="visually-hidden">{getItemQuantity()}</span>
   
    </button>

    </Link>
   
    );

    }
export default CardWidget;
