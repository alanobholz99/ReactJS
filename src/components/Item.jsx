import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const {count, increment, decrement, reset} = useCounter(1,10,1)
  const comprado = () =>{
    console.log("agregado al carrito")
}
    return (
        <  >
           <Link to={"/product/${product.id}"} >
           < >
             
            <Card className='colordeclick' >
      <Card.Img  variant="top" src={`../public/data/img/${product.img}`} />
     <Card.Text >

<Card.Text  >id: {product.id} </Card.Text>


      <Card.Text> stock: {product.stock}
      </Card.Text>
      <Card.Body  >
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
        ${product.precio} 
       
</Card.Text >
        
        <Button    onClick={increment} style={{backgroundColor: "red", animation: "animate__pulse"}} >+ </Button>
        <Button    onClick={comprado} style={{backgroundColor: "aqua",  color: "black"}}  >comprar {count} </Button>
        <Button    onClick={reset} >reset</Button>
        <Button    onClick={decrement}    >-</Button>
      </Card.Body>

      </Card.Text>
    </Card>

 
   </>
</Link>

        </>
    );
}

export default Item;
