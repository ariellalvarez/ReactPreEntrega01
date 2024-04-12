import Item from "../Item/Item"

const ItemList =({ products}) =>{

    return(
        <section style={{display: 'flex'}}>
            {
                products.map(product =>{
                    return <Item key={product.id} {...product}/>
                })
            }
        </section>
    )
}

export default ItemList