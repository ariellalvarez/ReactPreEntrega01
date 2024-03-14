import classes from '../css/style.module.css'

import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    console.log(classes)
    return(
        <header className={classes.header}>
            <h1 className={classes.h1}>Ecommerce - Maderera</h1>
            <nav>
                <Link to='/category/cajon' className={classes.boton}>Cajones</Link>
                <Link to='/category/pallet' className={classes.boton}>Pallets</Link>
                <Link to='/category/jaula' className={classes.boton}>Jaulas</Link>
                <CartWidget />

            
                
                
            </nav>
            
        </header>
    )
}

export default Navbar