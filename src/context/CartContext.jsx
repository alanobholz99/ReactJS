import { useState, createContext, useContext}  from "react";

const CarritoContext = createContext() 
//creando el contexto(por el momento vacio)

export const useCarritoContext = () => useContext(CarritoContext)
// funcion para consultar mi contexto

export const CarritoProvider = (props) =>  {  //forma de proveer el contexto, puede recibnir props o no

// funcionalidades de un carrito
// agregar producto- eliminar producto- vaciar carrito- obtener cantidad(subtotales)-
//obtener precio

const [carrito, setCarrito] = useState([ ])

//buscar producto


const isInCart = (id) => {
return carrito.some(prod => prod.id === id) //con la funcion some nos va a tirar si existe ya el producto en el carrito 
//por false o true
}

//agregar producto
const addItem = (item, cantidad) => {
if (isInCart(item.id) ){ //se ejecuta esto si ya esta en el carrito

const indice = carrito.findIndex(prod => prod.id === item.id) //con el metodo findindex retorna el primer elemento del array
const aux = [...carrito] //hago la copia del carrito
aux[indice].quantity = cantidad //modifico la cantidad del producto ingresado
setCarrito(aux) //llamo a aux ya que con el queantity modifique la cantidad que ya estaba en el carrito



}else{  //de lo contario si no esta en el carrito
const newItem = {
    ...item, //operador esprep es cuando se usa los ...(sirve para copiar los valores del array)
    quantity: cantidad // de esta forma se agrega algo nuevo y con la cantidad que deseamos
}
/* otra forma de hacer  el setCarrito es:
const aux = [...carrito] copio la info del carro
y despues guardo lo nuevo.
aux.push(newItem)
setCarrito(aux) 
*/

setCarrito([...carrito, newItem]) //guardo en el array del carrito el nuevo producto
//aca tambien se usa los ... ya que es la copia del array anterior y te agrega un nuevo item
//como se hace aca con el newItem
}
}

// forma de remover:
const removeItem = (id) => {
// const aux = [...carrito]
// const indice = aux.findIndex(prod => prod.id === id)
// if (indice != -1){
//     setCarrito(aux.splice(indice, 1)) //con la funcion splice se elemmina la cantidad que yo desee
// diferente el indice de -1. por eso cuando dice(indice, 1) quiere decir que limine a uno


setCarrito(carrito.filter(prod => prod.id !== id)) //con el filter  al que no sea igual
// id que yo llamé los trate pero al que sea igual lo elimina
}
// eliminar todos los producto del carrito: le escribno un array vacio

const emptyCart = () => {
    setCarrito([ ])
}
// cantidad de productos en el carrito:
const getItemQuantity = () => {
    return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    // este sirve para sumar la cantidad de productos
}
// obtener precio total
const totalPrice = () => {
    return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price, 0) )
} //este lo que haxce es sacar el total multiplicando los productos por el precio
console.log(carrito)
return (  
    <CarritoContext.Provider value = {{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
   {props.children}
   
    </CarritoContext.Provider>
)
 //para poder enviar props junto con el carrito



}

