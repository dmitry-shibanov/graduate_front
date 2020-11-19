import React from 'react';

import Button from '../../Button/Button';
import './SinglePostCard.css';
import Image from "../../Image/Image";
import { Link } from 'react-router-dom';

const post = (props:any) => (
  <article className="post">
    <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    {/* <div className="post__image">
      <Image imageUrl={props.image} contain />
    </div> */}
    <div className="post__content">{props.content}</div>
    <div className="post__actions">
      <Button mode="flat" link={props.id}>
        <Link to={`/blogs/${props.id}`}>View</Link>
      </Button>
      {props.userId && props.userId == props.creator && (<Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>)}
      {props.userId == props.creator && (<Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button>)}
    </div>
  </article>
);

export default post;
