import classes from '../css/style.module.css'

const ItemListContainer = ({ greeting}) => {
    return (
        <div>
            <h1 className={classes.h1}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer