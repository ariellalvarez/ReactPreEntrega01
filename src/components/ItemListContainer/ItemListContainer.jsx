import classes from '../css/style.module.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting}) => {
    const [products,setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result =>{
                setProducts(result)
            })
},[categoryId])


    return (
        <main>
            <h1 className={classes.h1}>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer