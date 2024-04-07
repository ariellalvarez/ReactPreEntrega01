import classes from '../css/style.module.css'
import { useEffect, useState } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import {QuerySnapshot, collection, getDocs, query, where} from 'firebase/firestore'

import {db} from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting}) => {
    const [products,setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const productsCollection = categoryId
            ? (
                query(collection(db, 'products'), where('category', '==',categoryId )))
            : (
                collection(db, 'products'))

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                
                const productsAdapted = QuerySnapshot.docs.map(doc =>{
                    const data = doc.data()
                    
                    return {id: doc.id, ...data}
                })

                console.log(productsAdapted)

                setProducts(productsAdapted)
            })
            .catch()


        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(result =>{
        //         setProducts(result)
        //     })
    },[categoryId])


    return (
        <main>
            <h1 className={classes.h1}>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer