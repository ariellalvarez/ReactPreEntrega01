import classes from '../css/style.module.css'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    console.log(classes)
    return(
        <header className={classes.header}>
            <h1 className={classes.h1}>Ecommerce - Maderera</h1>
            <nav>
                <a className={classes.boton}>Cajones</a>
                <a className={classes.boton}>Pallets</a>
                <a className={classes.boton}>Jaulas</a>
                <CartWidget />

            
                
                
            </nav>
            
        </header>
    )
}

export default Navbar