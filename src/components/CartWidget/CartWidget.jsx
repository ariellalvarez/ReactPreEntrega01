import cart from './assets/cart2.png'
import classes from '../css/style.module.css'

const CartWidget = () => {
    return (
        <button className={classes.boton}>
            <img width= '20px' src={cart} alt="cart-widget"/>
            0
        </button>
    )
}

export default CartWidget