import React from 'react';
import { useRef } from 'react';

const Checkout = () => {
    const formRef = useRef() //genero una refenrencia

    const handleSubmit = (e) => { // aca empieza cuando doy click
e.preventDefault()
 const datForm = new FormData(formRef.current) //paso un form html a un objrto iterador
// el problema es que te tira methodos nomas entonces:   
// entonces lo que voy a hacer para que me pase el objeto iterator 
// a objeto simple hago esto:
const data = Object.fromEntries(datForm) //esto queda guardado en nuetrra base de datos
console.log(data)
e.target.reset() //resetea el form// deja que handlesubmit haga 
// lo que generalmente hace que es reset al form

}
return (
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
    );
}

export default Checkout;
