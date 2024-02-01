import React from 'react';
import { useState } from 'react';


const ItemCount = () => {
    /* Count es el componente render y setcount seria el que produce su actualizacion osea su renderizado*/
    const [count, setCount] = useState (1)
    const handlerIncremento = () => {
    setCount (count + 1)
    }
    const handlerdecrement = () => {
        if (count > 1){
setCount (count - 1)
        }
    }
     const handlerAddtocar = () => {
        console.log ("esta dentro de tu carro")
     }
    
    
    /*el onclick sirve para que los botones tengan un sentido y 
    funcionen asi como pasa con la funcion handlerincremento */
    return (
<>
{/* <div>
   
    <button onClick={handlerIncremento}>+</button>
    <p>{count}</p>
    <button onClick={handlerdecrement}>-</button>
<button onClick={handlerAddtocar} ></button>
</div> */}


</>
   
);
}

export default ItemCount;
