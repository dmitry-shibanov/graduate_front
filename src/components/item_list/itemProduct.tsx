import React from "react";
import { Link } from "react-router-dom";
import ICardItem from "../../models/ICardItem";
import "./itemProduct";


function itemList(props: ICardItem){
    return (
        <article className="card product-item">
                    <header className="card__header">
                        <h1 className="product__title">
                        { props.title }
                        </h1>
                    </header>
                    <div className="card__image">
                        <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" alt={props.title}></img>
                        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
                    </div>
                    <div className="card__content">
                        <h2 className="product__price mb-2">Цена 123</h2>
                        <p className="product__description">
                        { props.description }
                        </p>
                    </div>
                    <div className="card__actions">
                        <Link to={`/products/${props.id}`} className="btn btn-outline-success">Детали</Link>
                        {/* <% if (authenticated) { %>
                    <form action="cart/" method="post">
                        <input type="hidden" name="productId" value="<%= product._id %>">
                        <input type="hidden" value="<%= csrfToken %>" name="_csrf">
                        <input type="submit" className="btn btn-outline-success" value="В корзину">
                    </form>
                    <% } %> */}
                    </div>
                </article>
        // <article className={ cardProductItem }>
        //         <header className="card__header">
        //             <h1 className="product__title">
        //                 { props.name }
        //             </h1>
        //         </header>
        //         <div className="card__image">
        //             <img src="<%= product.imageUrl %>" alt="<%= product.title %>"></img>
        //         </div>
        //         <div className="card__content">
        //             <h2 className="product__price">$
        //                 { props.price }
        //             </h2>
        //             <p className="product__description">
        //                 { props.description }
        //             </p>
        //         </div>
        //         <div className="card__actions">
        //             <Link to={`/products/${props.id}`} className="btn btn-outline-success">Детали</Link>
        //             {/* <% if (authenticated) { %>
        //             <form action="cart/" method="post">
        //                 <input type="hidden" name="productId" value="<%= product._id %>">
        //                 <input type="hidden" value="<%= csrfToken %>" name="_csrf">
        //                 <input type="submit" className="btn btn-outline-success" value="В корзину">
        //             </form>
        //             <% } %> */}
        //         </div>
        //     </article>
    )
}