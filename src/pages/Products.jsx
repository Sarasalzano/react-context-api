import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function Products(){
   //setto variabile di stato dei prodotti come array vuoto
    const [products, setProducts] =useState([]);
    //chiamata axios per recuperare i prodotti da inserire nelle card
    useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
        }, []);

    return(
        <div className="products-container">
            <div className="row">
                {products.map((product) => (
                <div key={product.id} className="column">          
                    <div  className="img-wrapper">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <h3 className="item-title">{product.title}</h3>
                    <span className="item-price">€{product.price}</span>
                    {/* Link alla pagina di dettaglio del prodotto con il suo id */}
                    <Link to={`/products/${product.id}`}>
                        PRODUCTS DETAIL
                    </Link>
                </div>
                ))}
            </div>
            <Outlet />
        </div>

    );
}