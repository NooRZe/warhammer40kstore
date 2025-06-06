import React from "react";
import Header from "./Header";
import axios from "axios";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://684034985b39a8039a57355c.mockapi.io/cart"
      );

      const itemsResponse = await axios.get(
        "https://684034985b39a8039a57355c.mockapi.io/items"
      );
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCart = (obj) => {
    if (
      cartItems.find((cartObj) => Number(cartObj.itemId) === Number(obj.itemId))
    ) {
      axios.delete(
        `https://684034985b39a8039a57355c.mockapi.io/cart/${obj.itemId}`,
        obj
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.itemId) !== Number(obj.itemId))
      );
    } else {
      axios
        .post("https://684034985b39a8039a57355c.mockapi.io/cart", obj)
        .then((res) => setCartItems((prev) => [...prev, res.data]));
    }
  };

  const onCartRemoval = (obj) => {
    console.log(obj);
    axios.delete(`https://684034985b39a8039a57355c.mockapi.io/cart/${obj.itemId}`);
    setCartItems((prev) => prev.filter((item) => Number(item.itemId) !== Number(obj.itemId)))
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          items={cartItems}
          onRemoval={onCartRemoval}
          onClose={() => setCartOpened(false)}
        />
      )}

      <Header onCartClick={() => setCartOpened(true)} />
      <Home
        items={items}
        searchValue={searchValue}
        onSearchInputChange={onSearchInputChange}
        setSearchValue={setSearchValue}
        onAddToCart={onAddToCart}
        onCartRemoval={onCartRemoval}
      />
    </div>
  );
}

export default App;
