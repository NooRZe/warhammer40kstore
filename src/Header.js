function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/cart.svg" alt="logo" />
        <div>
          <h3>WH40k Store</h3>
          <p>Прими Ересь в себя</p>
        </div>
      </div>

      <ul className="width={40} height={40}">
        <li>
          <img src="/img/cart.svg" alt="cart"/>
          <span>1200 руб.</span>
        </li>
        <li><img src="/img/favorite.svg" alt="favorites"/></li>
        <li><img src="/img/user.svg" alt="user"/></li>
      </ul>
    </header>
  );
}

export default Header;
