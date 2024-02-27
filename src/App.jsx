import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
    <Navbar />
      <h1>Ecommerce</h1>
      <a> Prueba</a>

    <ItemListContainer greeting={'Bienvenidos'} />
    </>

    
  )
}

export default App
