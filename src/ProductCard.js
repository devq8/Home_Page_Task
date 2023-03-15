function ProductCard(props) {
    return <div className="container">
        <img src={props.image} className='product-image'/>
        <h3>{props.name}</h3>
        <p>KD {props.price}</p>
    </div>
}

export default ProductCard;