import React from "react";
import Header from "./Header";
import axios from "axios";

import Home from "./pages/Home";

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

  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header />
      <Home
        items={items}
        searchValue={searchValue}
        onSearchInputChange={onSearchInputChange}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default App;
