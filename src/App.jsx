import "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/navBar"
import Categoria from "./components/categoria";
import cart from "./components/cart";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import checkout from "./components/checkout"
import ItemListcontainer from "./components/itemListcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemFooter from "./components/itemFooter";
import notFound from "./components/notFound";



export  const App = () => {
  return (
   /* lo que hice fue que 
   use el props de test en app*/ 

   <div className="colortitulo">
 <h1 className="colortitulo " >tienda vicio</h1>
 <BrowserRouter>


<NavBar/>
<Routes>

<Route  path="/" element={  <ItemListcontainer />}  />
<Route   path="/categoria/:cid"   element={<ItemListcontainer/>}/>
<Route path="/cart" element={<cart/>} />
<Route  path="/product/:pid"  element ={<ItemDetailsContainer/>} />
<Route  path="/checkout"  element ={<checkout/>} />
<Route  path="*" element ={<notFound/>} />


</Routes>


</BrowserRouter>
<ItemFooter/>
</div>
 
 

   
  )
}
export default App


