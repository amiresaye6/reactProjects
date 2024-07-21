import './card.css'
function Card(props) {
    return (
        <div className="card">
            <img src={props.product.image} alt={props.product.title} />
            <h1>{props.product.title}</h1>
            <span>{props.product.price}$</span>
            <br/>
            <span>{props.product.rating.rate} Stars</span>
        </div>
    )
}

export default Card;
// id
// title
// price
// description
// category
// image
// rating
// rate
// count