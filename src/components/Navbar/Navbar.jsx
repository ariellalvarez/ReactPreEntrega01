import classes from '../css/style.module.css'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    console.log(classes)
    return(
        <header className={classes.header}>
            
            <nav>
                <h2 className={classes.h2}>Ecommerce - Maderera</h2>
                <div>
                    <button className={classes.boton}>Cajones</button>
                    <button className={classes.boton}>Pallets</button>
                    <button className={classes.boton}>Jaulas</button>
                </div>
                
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar