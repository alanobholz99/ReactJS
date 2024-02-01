import "./styles/App.css"
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/itemCount";
import ItemListcontainer from "./components/itemListcontainer";



export  const App = () => {
  return (
   /* lo que hice fue que 
   use el props de test en app*/ 
  
  <body className="colortitulo">
  <h1 className="colortitulo " >tienda vicio</h1>
 <NavBar/>
  <ItemCount/>
  <ItemListcontainer mensaje={"la mejor tienda para tus juegos"} />
  </body>
 
      

   
  )
}
export default App


