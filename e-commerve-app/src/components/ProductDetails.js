import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function ProductDetails () {
    const { productId } = useParams()
    const productUrl = "https://fakestoreapi.com/products";
    const [Product, setProduct] = useState({})

    useEffect( () => {
        fetch(`${productUrl}/${productId}`)
        .then( response => response.json())
        .then(product => setProduct(product));
    })
    return (
        <>
        <Card product={Product}/>
        </>
    )
}

export default ProductDetails;