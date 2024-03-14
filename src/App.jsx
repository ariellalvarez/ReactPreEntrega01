import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos al sitio web de la Maderera'} />
    <ItemDetailContainer />
    
    
    
    </>

    
  )
}

export default App
