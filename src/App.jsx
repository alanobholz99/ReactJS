import Cart from "./components/Cartt.jsx";
import NavBar from "./components/NavBar.jsx";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemFooter from "./components/ItemFooter.jsx";
import NotFound from "./components/NotFoundd.jsx";
import Checkout from "./components/Checkout.jsx";
import "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

//este provedor va a encerrar toda la app
  
const App = () => {
  return (
   /* lo que hice fue que 
   use el props de test en app*/ 

   <div className="colortitulo">
 <h1 className="colortitulo " >tienda vicio</h1>
 <BrowserRouter>
<CarritoProvider> 
<NavBar/>
<ToastContainer/>
<Routes>

<Route  path="/" element={  <ItemListContainer />}  />
<Route   path="/Categoria/:cid"   element={<ItemListContainer/>}/>
<Route path="/Cart" element={<Cart/>} />
<Route  path="/product/:pid"  element ={<ItemDetailsContainer/>} />
<Route  path="/Checkout"  element ={<Checkout/>} />
<Route  path="*" element ={<NotFound/>} />


</Routes>

</CarritoProvider>
</BrowserRouter>
<ItemFooter/>
</div>
 
 

   
  )
}
export default App


