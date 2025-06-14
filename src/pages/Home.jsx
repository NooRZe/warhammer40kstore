import Card from "../components/Card";

function Home({
  searchValue,
  setSearchValue,
  onSearchInputChange,
  items,
  onAddToCart,
  itemSelection
}) {
  const itemsRender = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    return filteredItems.map((item) => (
      <Card
        id={item.id}
        itemId={item.itemId}
        imageUrl={item.imageUrl}
        price={item.price}
        title={item.title}
        onAddToCart={onAddToCart}
        itemSelection={itemSelection}
      />
    ));
  };

  return (
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
  );
}

export default Home;
