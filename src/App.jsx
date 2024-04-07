import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./context/CartContext"



function App() {
  return (
    <>
    
    <BrowserRouter>
      <CartProvider>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos al sitio web de la Maderera'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Producto de la categoria: '} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}
      </Routes>
      </CartProvider>
      
    </BrowserRouter>
    


  
    </>

    
  )
}

export default App
