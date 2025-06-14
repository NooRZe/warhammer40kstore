import { Link } from "react-router";

function Header({ onCartClick }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/whlogo.svg" alt="logo" />
          <div>
            <h3 className="text-uppercase">WH40k Store</h3>
            <p className="opacity-5">Моя вера - мой щит</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-20 cu-p">
          <img
            onClick={onCartClick}
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="cart"
          />
          <span>1200 руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <img width={18} height={18} src="/img/favorite.svg" alt="favorites" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
