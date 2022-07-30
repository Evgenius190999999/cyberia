import React from 'react';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card__img" src={item.image} alt="" />
      <div className="card__content">
        <img src="/card-img.svg" alt="CardImage" className="card__content-img" />
        <p className="card__content-title">{item.title}</p>
        <p className="card__content-desc">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
