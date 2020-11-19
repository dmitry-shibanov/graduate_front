import React from "react";
import { Link } from "react-router-dom";
import ICardItem from "../../../models/ICardItem";
import "./ItemProduct.css";

function itemCard(props: ICardItem) {
  return (
    <article className="card product-item">
      <header className="card__header">
        <h1 className="product__title">{props.title}</h1>
      </header>
      <div className="card__image">
        <img
          src={props.image}
          alt={props.title}
        ></img>
        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
      </div>
      <div className="card__content">
        {/* <h2 className="product__price mb-2">Цена 123</h2> */}
        <p className="product__description">{props.description}</p>
      </div>
      <div className="card__actions">
        <Link to={`/courses/${props.id}`} className="btn btn-outline-success">
          Курс
        </Link>
      </div>
    </article>
  );
}

export default itemCard;
