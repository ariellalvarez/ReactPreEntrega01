import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos al sitio web de la Maderera'} />
    <ItemCount stock={10}/>
    
    </>

    
  )
}

export default App
