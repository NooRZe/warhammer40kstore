import React from "react";
import Header from "./Header";
import axios from "axios";

function App() {
  const itemss = [
    {
      id: "1",
      title: "Кроссовки Puma X Aka Boku Future Rider",
      imageUrl: "img/sneakers/4.jpg",
      price: 8999,
    },
    {
      id: "2",
      title: "Мужские Кроссовки Nike Air Max 270",
      imageUrl: "img/sneakers/2.jpg",
      price: 12999,
    },
    {
      id: "3",
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      imageUrl: "img/sneakers/1.jpg",
      price: 12999,
    },
  ];

  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://684034985b39a8039a57355c.mockapi.io/items"
      );
      setItems(itemsResponse.data)
    }
    fetchData();
  }, [])


  const itemsRender = () => {
    return items.map((item) => (
      <>
        <div>
          <img src="img/heart-unliked.svg" alt="like" />
        </div>
        <div>
          <img height={133} width={133} src={item.imageUrl} alt="item" />
          <h5>{item.title}</h5>
        </div>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <p>ЦЕНА:</p>
            <span>{item.price} руб.</span>
          </div>
          <img src="img/btn-plus.svg" alt="plus" />
        </div>
      </>
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
