import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useCarritoContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Cart from './cart';
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
