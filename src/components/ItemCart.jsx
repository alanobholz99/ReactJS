import React from 'react'
import ItemList from './ItemList'
import Item from './Item'
import ItemDetailsContainer from './ItemDetailsContainer'
import { useCarritoContext } from '../context/CartContext'
import useCounter from '../hooks/useCounter'


const ItemCart = ({ product }) => {
  console.log(product)
  const { removeItem, updateItem } = useCarritoContext()
  const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)


  return (

    <div style={{ backgroundColor: "red", display: "flex" }}>
      <div>
        <p>{product.id}</p>
        <img src={`../public/data/img/${products.img}`} alt={`imagen de ${product.nombre}`} />
        <p >${product.price}</p>
      </div>
      <span>{product.quantity}</span>
      <button onClick={() => {
        updateItem(product.id, count + 1)
        increment()
      }} style={{ backgroundColor: "red", animation: "animate__pulse" }} >+ </button>

      <span style={{ backgroundColor: "aqua", color: "black" }}  > {count} </span>
      <button onClick={async () => {
        updateItem(product.id, count - 1)
        decrement()
      }}    >-</button>


      <div>
        <p>subtotal: ${product.price * count}</p>

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