import React from "react";
import Header from "./Header";
import axios from "axios";
import Card from "./components";

function App() {
  const [items, setItems] = React.useState([]);

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
    return items.map((item) => (
      <Card
        id={item.id}
        imageUrl={item.imageUrl}
        price={item.price}
        title={item.title}
      />
    ));
  };

  return (
    <div className="wrapper clear">
      <Header />

      <div className="main-content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все товары</h1>
          <div>
            <img src="img/search.svg" alt="search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">{itemsRender()}</div>
      </div>
    </div>
  );
}

export default App;
