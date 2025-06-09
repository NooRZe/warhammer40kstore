import React from "react";
import Header from "./Header";
import axios from "axios";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState([{
    "id": "1",
    "itemId": "1",
    "title": "Horus Rising",
    "imageUrl": "img/covers/1.jpg",
    "price": 8999
  }]);

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

  const itemSelection = (obj) => {
    setSelectedItem((prev) => {
      return [...prev, obj];
    });
    console.log(selectedItem);
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
    axios.delete(
      `https://684034985b39a8039a57355c.mockapi.io/cart/${obj.itemId}`
    );
    setCartItems((prev) =>
      prev.filter((item) => Number(item.itemId) !== Number(obj.itemId))
    );
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onSearchInputChange={onSearchInputChange}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onCartRemoval={onCartRemoval}
              itemSelection={itemSelection}
            />
          }
          exact
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/item"
          element={<ItemPage selectedItem={selectedItem}></ItemPage>}
          exact
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
