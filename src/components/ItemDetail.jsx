import React from 'react'
import useCounter from '../hooks/useCounter';
import {useState,useEffect}  from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import ItemDetailsContainer from './ItemDetailsContainer';

export const ItemDetail = ({item}) => {
    const {count, increment, decrement, reset} = useCounter(1,10,1)
    const comprado = () =>{
      console.log("agregado al carrito")
  }
  
    return (
  
     
   

    
 <Card  >
      <Card.Img  variant="top" src={`../public/data/img/${item.img}`} />
     <Card.Text >

<Card.Text  >id: {item.id} </Card.Text>


      <Card.Text> stock: {item.stock}
      </Card.Text>
      <Card.Body  >
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        ${item.precio} 
       
</Card.Text >
        
        <Button    onClick={increment} style={{backgroundColor: "red", animation: "animate__pulse"}} >+ </Button>
        <Button    onClick={comprado} style={{backgroundColor: "aqua",  color: "black"}}  >comprar {count} </Button>
        <Button    onClick={reset} >reset</Button>
        <Button    onClick={decrement}    >-</Button>
      </Card.Body>

      </Card.Text>
    </Card>
    
    
   
  )
}
export default ItemDetail;
