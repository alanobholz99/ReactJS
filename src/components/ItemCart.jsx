import React from 'react'
import { useCarritoContext } from '../context/CartContext.jsx'
import useCounter from '../hooks/useCounter.jsx'


const ItemCart = ({ product }) => {

  const { removeItem, updateItem } = useCarritoContext()
  const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
  console.log(product)

  return (

    <  >
     <div className='itemcard3'>

     
      <div className='separaciondeitemcard' >
        <p>{product.id}</p>
        <p>{product.nombre}</p>
        <img src={product.img} style={{border:"solid", borderRadius:"20px", borderColor:"purple"}} alt={`imagen de ${product.nombre}`} />
        <p >${product.precio}</p>
      </div>
     <div className='separaciondeitemcard2'  > 
      <button style={{borderRadius:"30px",  width:"100px"}} onClick={() => {
        updateItem(product.id, count + 1)
        increment();
      }} >+ </button>

      <span  > {count} </span>
      <button  style={{borderRadius:"30px",  width:"100px"}}  onClick={async () => {
        updateItem(product.id, count - 1)
        decrement();
      }}    >-</button>


      <div>
        <p>subtotal: ${product.precio * count}</p>

      </div>

      <div>
        <button  style={{borderRadius:"30px", width:"100px"}} onClick={() => removeItem(product.id)}>
          eliminar
        </button>
        </div>
      </div>
      </div>
    </>


  )
}

export default ItemCart