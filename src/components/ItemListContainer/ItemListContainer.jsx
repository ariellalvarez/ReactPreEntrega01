import classes from '../css/style.module.css'

const ItemListContainer = ({ greeting}) => {
    return (
        <main>
            <h1 className={classes.h1}>{greeting}</h1>
        </main>
    )
}

export default ItemListContainer