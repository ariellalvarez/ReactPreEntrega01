import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext'


const ItemDetail = ({id, name, category, price, img, description, stock}) => {
    
    const [quantity, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)

    }
    
    return (
        <article>
        <section>
                <img src={img} style={{width: 100}}/>
                <h3>{name}</h3>
                <h4>categoria: {category}</h4>
                <h4>${price}</h4>
                <h4>Descripcion: {description}</h4>
        </section>
        <footer>
         {
             quantity === 0 ? (
                 <ItemCount onAdd={handleOnAdd} stock={stock}/>
             ) : (
                 <Link to='/cart'>Finalizar compra</Link>
             )
         }
        </footer>

        </article>
        

        
    )
}


export default ItemDetail



// const ItemDetail = ({id, name, category, price, img, description, stock}) => {
    
//     const [quantity, setQuantity] = useState(0)

//     const handleOnAdd = (count) => {
//         const objProductToAdd = {
//             id, name, price, count
//         }
//         console.log(objProductToAdd)
//         console.log('agregue al carrito: ', count)

//         setQuantity(count)
//     }

    
//     return (
//         <article>
//         <section>
//                 <img src={img} style={{width: 100}}/>
//                 <h3>{name}</h3>
//                 <h4>categoria: {category}</h4>
//                 <h4>${price}</h4>
//                 <h4>Descripcion: {description}</h4>
//         </section>
//         <footer>
//          {
//              quantity === 0 ? (
//                  <ItemCount onAdd={handleOnAdd} stock={stock}/>
//              ) : (
//                  <Link to='/cart'>Finalizar compra</Link>
//              )
//          }
//         </footer>

//         </article>
        

        
//     )
// }


// export default ItemDetail