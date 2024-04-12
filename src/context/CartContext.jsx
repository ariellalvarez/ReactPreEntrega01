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

    const getTotalQuantity = () => {
        let acumulador = 0
    
        cart.forEach(prod => {
          acumulador += prod.quantity
        })
    
        return acumulador
      }
    
      const totalQuantity = getTotalQuantity()

      const getTotal = () => {
        let acumulador = 0
    
        cart.forEach(prod => {
          acumulador += prod.quantity * prod.price
        })
    
        return acumulador
      }
    
      const total = getTotal()


    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}


