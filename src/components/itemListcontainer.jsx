import { useState, useEffect } from 'react';
import ItemList from './itemList.jsx';
import { useParams } from 'react-router-dom';
import { getProducts } from '../firebase/firebase';
const ItemListcontainer = () => {
  const [products, setProducts] = useState ([])
  const {cid} = useParams();
  useEffect(()  => {
   getProducts()
    .then (prods => {
      const productos = prods.filter(prod => prod.stock > 0)
      if (cid){
        const productosFiltrados = prods.filter(prod => prod.categoria == cid)
   
        setProducts(productosFiltrados)
       
      }else{
        
        setProducts(productos)
      }
       
    })
    .catch((error)  => console.log(error)) 
  }, [cid] )
  
  
  return (
      < >
       <div className='separaciondecard' >
        <ItemList  products ={products} plantilla="Item"/>



      </div>
      
      </>
    );
}

export default ItemListcontainer;
