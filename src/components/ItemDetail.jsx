import React from 'react'
import useCounter from '../hooks/useCounter.jsx';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import ItemDetailsContainer from './ItemDetailsContainer';
import { useCarritoContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
export const ItemDetail = ({item}) => {
const {addItem} = useCarritoContext()
// funcion para agregar un nuevo producto al carrito
  const { count, increment, decrement, reset } = useCounter(1,item.stock, 1)
 
  const comprado = () => {
  addItem (item, count)
  toast.success(`Producto agregado al carrito correctamente`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
})
}


  return (




    <Card className='tamañodetail' >
      <Card.Body>
    
      <Card.Img variant="top" src={item.img} />
      
      <Card.Text >

        <Card.Text  >id: {item.id} </Card.Text>


        <Card.Text> stock: {item.stock}
        </Card.Text>
      
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            ${item.precio}

          </Card.Text >

          <Button onClick={increment} style={{ backgroundColor: "red", animation: "animate__pulse" }} >+ </Button>
          <Button onClick={comprado} style={{ backgroundColor: "aqua", color: "black" }}  >comprar {count} </Button>
          <Button onClick={reset} >reset</Button>
          <Button onClick={decrement}    >-</Button>
      
          <Button style={{backgroundColor:"white"
          }} >
            
            <Link to={`/`}>Inicio</Link>
          </Button>
      </Card.Text>
      </Card.Body>
    </Card>
   

  )
}
export default ItemDetail;
