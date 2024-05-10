import React from 'react';
import Watsap from "./Watsap.jsx";


const ItemFooter = () => {
    return (
        <div style={{border:"solid"}}>
            <ul className='ordendefooter' >

<li style={{fontFamily:"franklin"}} >*Derechos reservados por Alan Obholz</li>
<li style={{fontFamily:"franklin",}} ><a style={{textDecoration:"none"}}  href="mailto:obholzalan99@gmail.com">Enviame un correo</a></li>
<li  style={{fontFamily:"franklin"}}><Watsap></Watsap></li>
<li></li>
            </ul>
           
        </div>

    );
}

export default ItemFooter;
