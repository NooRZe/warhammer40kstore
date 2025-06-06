function Cart({ items = [], onClose, onRemoval }) {
  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="d-flex justify-between mb-30">
          {"Корзина"}
          <img
            onClick={onClose}
            className="removeBtn  cu-p"
            src="img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>

                  <img
                    //onClick={() => onRemoval(obj)}
                    onClick={() => console.log(obj)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>

                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              src="img/empty-cart.png"
              alt="empty-cart"
              className="mb-20"
              width={120}
              height={120}
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              {" "}
              Добавьте хотя бы один товар, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
