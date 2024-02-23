import React, { useState, useEffect } from 'react';






// con el console.log te muestra el array
// se tranforma la api en json ya que es un objeto



const Dolar = () => {
    const [dolar, setDolar] = useState([])
useEffect (() => {

fetch ("https://criptoya.com/api")
.then((response) => response.json()) 
.then((data) => {
    const molde = 
    <div>
    <h3>cotizacion del dolar</h3>
    <p>dolar mayorista: {data.mayorista.price}</p>
    
</div>

setDolar(molde)

}

)
.catch(error => console.log)
}, [])
    
    return (
       <>
        {dolar}
       
       </>
       
    );
}

export default Dolar;
