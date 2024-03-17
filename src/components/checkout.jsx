import React from 'react';
import { useRef } from 'react';
import {useCarritoContext} from "../context/CartContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct} from "../firebase/firebase.js";
import { toast } from 'react-toastify'; 
const Checkout = () => {
    const formRef = useRef() //genero una refenrencia
const navigate = useNavigate() //devuleve la locacion actual de mi componente(ruta)
const  {carrito, totalPrice, emptyCart} = useCarritoContext()   


const handleSubmit = (e) => { // aca empieza cuando doy click
e.preventDefault()
 const datForm = new FormData(formRef.current) //paso un form html a un objrto iterador
// el problema es que te tira methodos nomas entonces:   
// entonces lo que voy a hacer para que me pase el objeto iterator 
// a objeto simple hago esto:
const cliente = Object.fromEntries(datForm) //esto queda guardado en nuetrra base de datos
// aca tengo que generar la orden de compra



// modificar stock
const aux = [...carrito] 
aux.forEach (prodCarrito => {
getProduct(prodCarrito.id).then(prodBDD => {
if (prodBDD.stock >= prodCarrito.quantity){ //si existe el stock suficiente para realizar la compra
prodBDD.stock -= prodCarrito.quantity //de ewsta forma descuento del stock el producto comprado
updateProduct(prodBDD.id, prodBDD) //actualizo descontando el stock
} else{
    toast.info(`El producto con el nombre ${prod.nombre} no puede continuar con la compra ya que no posee stock suficiente`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    })
aux.filter(prod => prod.id != prodBDD.id) //elimino el producto del carrito al no tener stock suficiente
}

})


})
const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio})) //para que solo me muestre eso en la orden de compra

createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString("es-AR",{timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}))
// para que a la hora de aparecer la fecha salda dia/mes/año

.then(ordenCompra => {
toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"

})
emptyCart()

e.target.reset() //resetea el form// deja que handlesubmit haga 
// lo que generalmente hace que es reset al form
navigate("/")
})
.catch(e => {
    toast.error(`Error al generar orden de compra: ${e}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    })
})
}
return (
        <>
        {
            carrito.length === 0 ?
            <>
            <h2>para finalizar compra debe tener productos en el carrito</h2>
            <Link to={"/"}>
                            <button >
                                Volver al inicio
                            </button>
                        </Link>
            </>
    :    
   
        <div  >
            <form action=""  ref={formRef} onSubmit={handleSubmit} >
<label >nombre: </label>
<input type="text"  name="nombre"/>
<label >apellido: </label>
<input type="text" name="apellido"/>
<label >direccion: </label>
<input type="text" name="direccion"/>
<label > DNI:</label>
<input type="number" name="DNI"/>        
<label > email:</label>
<input type="email" name="email"/>           
<label >Telefono: </label>
<input type="number" name="telefono"/>           
<button>finalizar compra</button>
</form>
</div>
        
    }
        </>
        
        
    );
}

export default Checkout;
