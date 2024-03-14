const Item = ({name, category, price, img}) => {
    return(
        <article>
                <h4>categoria: {category}</h4>
                <h3>{name}</h3>
                <img src={img} style={{width: 100}}/>
                <h4>${price}</h4>
                <a>Ver detalle</a>

        </article>
    )
}

export default Item