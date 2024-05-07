import React from 'react';
import {Player} from "@lottiefiles/react-lottie-player";
import { useCarritoContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import ItemList from './ItemList.jsx';




export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext()

  return (
    <>
      { 
        carrito.length === 0 ?
          <>
            <div>
           
            
            <h1 className='hola' style={{color:"black",}} >carrito vacio</h1>
            
            <Player
            
            src='https://lottie.host/a74f1d39-774f-444c-a29e-2953105786e9/gkWAA6Zr9a.json'
            className="player"
            loop
  autoplay
  style={{height:"500px", width:"500px"}}
            />
            </div>
            
           
            <Link to={"/"}>
              <button style={{backgroundColor:"#6938e5", borderRadius:"30px" }}  >

                volver al inicio

              </button>

            </Link>
          </>
          :
          <    >
            <div  >
              {<ItemList  products={carrito} plantilla ="ItemCart" />}
            </div>
            <p>resumen de la compra: ${totalPrice()}</p>
            <button onClick={emptyCart} style={{ backgroundColor: "#6938e5",  }} >vaciar carrito </button>
            <Link to="/">
              <button style={{ backgroundColor: "#6938e5", animation: "animate__pulse" }} >

                Continuar comprando </button>
            </Link>
            <Link to="/checkout">
              <button style={{ backgroundColor: "#6938e5", animation: "animate__pulse" }} >
                Finalizar compra</button></Link>
          </>
      }
    </>
  );
}

export default Cart;
