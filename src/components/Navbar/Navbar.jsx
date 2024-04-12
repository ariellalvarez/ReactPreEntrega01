import classes from '../css/style.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { QuerySnapshot, collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {
    console.log(classes)

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = collection(db, 'categories')
        
        getDocs(categoriesCollection)
            .then(QuerySnapshot => {
                const categoriesAdapted = QuerySnapshot.docs.map( doc => {
                    const data = doc.data()
                    return {
                        id: doc.id, ...data
                    }
                    setCategories(categoriesAdapted)
                    console.log(categoriesAdapted)
                })
            })
            .catch(error => {
                console.error('error')
            })
    },[])

    return(
        <header className={classes.header}>
            <h1 onClick={()=> navigate('/')} style={{cursor: 'pointer'}} className={classes.h1} >Ecommerce - Maderera</h1>
            <nav>

                {/* {
                    categories.map(category => {
                        return
                        <Link  key={category.id} to={`/category/${category.slug}`} >
                            {category.name}
                        </Link>
                    })
                } */}

                <Link to='/category/pallet' className={classes.boton}>Pallets</Link>
                <Link to='/category/cajon' className={classes.boton}>Cajones</Link>
                <Link to='/category/jaula' className={classes.boton}>Jaulas</Link>
                <CartWidget />

            
                
                
            </nav>
            
        </header>
    )
}

export default Navbar