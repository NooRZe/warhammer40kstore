import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card({ itemId, id, title, price, imageUrl, onAddToCart,itemSelection }) {
  const [isInCart, setIsInCart] = React.useState(false);
  const onPlus = () => {
    onAddToCart({ itemId, id, imageUrl, price, title });
  };

  const itemSelect = () => {
    itemSelection ({itemId, id, imageUrl, price, title });
  };

  return (
    <div className={styles.card}>
      <Link to="/item">
        <div onClick={itemSelect}>
          <img height={157} width={157} src={imageUrl} alt="item" />
          <h5>{title}</h5>
        </div>
      </Link>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div className="d-flex justify-between align-center">
          <img className={styles.plus} src="img/heart-unliked.svg" alt="like" />
          <img
            onClick={onPlus}
            className={styles.plus}
            src="img/btn-plus.svg"
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
