import React from "react";
import styles from "./Card.module.scss";

function Card({title, price, imageUrl}) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart-unliked.svg" alt="like" />
      </div>
      <div>
        <img height={133} width={133} src={imageUrl} alt="item" />
        <h5>{title}</h5>
      </div>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <span>{price} руб.</span>
        </div>
        <img className={styles.plus} src="img/btn-plus.svg" alt="plus" />
      </div>
    </div>
  );
}

export default Card;