import React from 'react'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Input, Label } from 'reactstrap';
import "bootstrap"
import {Player} from "@lottiefiles/react-lottie-player";


export class Watsap extends React.Component{
 state={
    abierto: false,
 }
 abrirmodal=()=>{
    this.setState({abierto: !this.state.abierto});
 }
    render() {
  return (
   <>
  
   <div > 
   <Button style={{background:"none",}} onClick={this.abrirmodal} >Trabajemos juntos</Button>
   </div>
  
   
   
   
   <Modal isOpen={this.state.abierto}>
<ModalHeader>

<button  >  <Player
            
            src='https://lottie.host/b37c55b2-28ec-4e01-b554-256927c311e2/BmbvCSZzlC.json'
            className="player"
            loop
  autoplay
  style={{height:"200px", width:"400px"}}
           />
           <a style={{textDecoration:"none"}} href="https://wa.me/541161366354">Hablemos</a>
           </button>
</ModalHeader>

<ModalFooter>

    <Button style={{background:"#6938e5"}} onClick={this.abrirmodal}>
cerrar        
    </Button>
</ModalFooter>


   </Modal>
   
   </>
  )
}

}
export default Watsap;