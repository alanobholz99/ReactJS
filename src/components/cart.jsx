import React from 'react';
import CardWidget from './CardWidget';
import { useCarritoContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import ItemList from './itemList.jsx';
import ItemCart from './ItemCart.jsx'

const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext()
  return (
    <>
      {
        carrito.length === 0 ?
          <>
            <h1>carrito vacio</h1>
            <Link to={"/"}>
              <button   >

                volver al inicio

              </button>
            </Link>
          </>
          :
          <>
            <div>
              {<ItemList products={carrito} plantilla ="ItemCart" />}
            </div>
            <p>resumen de la compra: ${totalPrice()}</p>
            <button onClick={emptyCart} style={{ backgroundColor: "red", animation: "animate__pulse" }} >vaciar carrito </button>
            <Link to="/">
              <button style={{ backgroundColor: "red", animation: "animate__pulse" }} >

                Continuar comprando </button>
            </Link>
            <Link to="/checkout">
              <button style={{ backgroundColor: "red", animation: "animate__pulse" }} >
                Finalizar compra</button></Link>
          </>
      }
    </>
  );
}

export default Cart;
