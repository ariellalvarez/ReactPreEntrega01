import { useState, useEffect } from "react"
//import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getDoc, doc, QueryDocumentSnapshot} from 'firebase/firestore'
import {db} from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

    const {itemId} = useParams()

    useEffect(() =>{

        const productDoc = doc(db, 'products', itemId)


        getDoc(productDoc)
            .then(QueryDocumentSnapshot => {
                console.log(QueryDocumentSnapshot)
                const data = QueryDocumentSnapshot.data()
                const productAdapted = {id: QueryDocumentSnapshot.id,...data}
                setProduct(productAdapted)
            })
            .catch()


        // getProductById(itemId)
        // .then(result =>{
        //     setProduct(result)
        // })
    }, [itemId])

    return (
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer