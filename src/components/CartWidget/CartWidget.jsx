import cart from './assets/cart2.png'
import classes from '../css/style.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <button className={classes.boton}>
            <img width= '20px' src={cart} alt="cart-widget"/>
            { totalQuantity }
        </button>
    )
}

export default CartWidget