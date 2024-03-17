import React from 'react'
import { useCarritoContext } from '../context/CartContext'
import useCounter from '../hooks/useCounter'


const ItemCart = ({ product }) => {

  const { removeItem, updateItem } = useCarritoContext()
  const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
  console.log(product)

  return (

    <div style={{ backgroundColor: "red", display: "flex" }}>
      <div>
        <p>{product.id}</p>
        <p>{product.nombre}</p>
        <img src={product.img} alt={`imagen de ${product.nombre}`} />
        <p >${product.precio}</p>
      </div>
     
      <button onClick={() => {
        updateItem(product.id, count + 1)
        increment();
      }} >+ </button>

      <span  > {count} </span>
      <button onClick={async () => {
        updateItem(product.id, count - 1)
        decrement();
      }}    >-</button>


      <div>
        <p>subtotal: ${product.precio * count}</p>

      </div>

      <div>
        <button onClick={() => removeItem(product.id)}>
          eliminar
        </button>
      </div>
    </div>

  )
}

export default ItemCart