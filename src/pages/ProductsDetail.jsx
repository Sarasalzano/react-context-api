//import useprarams per leggere parametri dinamici dall'url
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetail(){
//recupero id
const {id} =useParams();

// stato dell'oggetto ricavato da api
const [product, setProduct] =useState({});

//chiamata api per recuperare oggetto corrispondende a id dinamico
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
},[id])

    return(
        <>
        <h2>id prodotto:{id}</h2>
        <div className="detail-wrapper">
            <div className="column-left">
            <img src={product.image} alt={product.title} />
            </div>
             <div className="column-right">
            <p>{product.description}</p>
            </div>
        </div>
        </>
    )
}