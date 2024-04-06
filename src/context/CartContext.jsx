import { createContext, useState} from "react"

export const CartContext = createContext()


export const CartProvider =({children}) => {
    const [cart, setCart] = useState([])

    console.log('CART: ', cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.error('El producto ya esta agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id == itemId)
    }

    


    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

// export const CartProvider =({children}) => {
//     const [cart, setCart] = useState([])
//     console.log('CART: ', cart)

//     const addItem = (item, getTotalQuantity) => {
//         if(!isInCart(productToAdd.addItem)){
//             setCart(prev => [... prev, productToAdd])
//         }else {
//             console.error('El producto ya esta agregado')
//         }
//     }

//     const isInCart = (id) =>{
//         return cart.some(prod => prod.id == id)
//     }

//     const getTotalQuantity = () => {
//         let acumulator = 0

//         cart.forEach( prod => {
//             acumulator += prod.quantity
//         })

//         return acumulator
//     }

//     const totalQuality = getTotalQuantity()


//     return (
//         <CartContext.Provider value ={{cart, addItem, totalQuantity}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

