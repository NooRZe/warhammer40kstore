import React from "react";
import Header from "./Header";
import axios from "axios";
import Card from "./components";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://684034985b39a8039a57355c.mockapi.io/items"
      );
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const itemsRender = () => {
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    return filteredItems.map((item) => (
      <Card
        id={item.id}
        imageUrl={item.imageUrl}
        price={item.price}
        title={item.title}
      />
    ));
  };

  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header />

      <div className="main-content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все товары"}
          </h1>
          <div className="searchBlock d-flex">
            <img src="img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                src="/img/btn-remove.svg"
                className="clear cu-p"
                alt="clear"
              />
            )}
            <input
              onChange={onSearchInputChange}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">{itemsRender()}</div>
      </div>
    </div>
  );
}

export default App;
