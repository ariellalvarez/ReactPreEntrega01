import cart from './assets/cart2.png'
import classes from '../css/style.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
       

        <Link to={'/cart'}>
            <img width= '20px' src={cart} alt="cart-widget"/>
            { totalQuantity }
        </Link>

        
    )
}

export default CartWidget

