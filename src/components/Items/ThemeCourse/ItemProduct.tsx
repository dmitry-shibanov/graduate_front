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
          src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"
          alt={props.title}
        ></img>
        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
      </div>
      <div className="card__content">
        {/* <h2 className="product__price mb-2">Цена 123</h2> */}
        <p className="product__description">{props.description}</p>
      </div>
      <div className="card__actions">
        <Link to={`/blogs/${props.id}`} className="btn btn-outline-success">
          Детали
        </Link>
      </div>
    </article>
  );
}

export default itemCard;
