import Item from "../components/Item";

function ItemPage({ selectedItem }) {
  return (
    <Item
      id={selectedItem.id}
      itemId={selectedItem.itemId}
      imageUrl={selectedItem.imageUrl}
      price={selectedItem.price}
      title={selectedItem.title}
    ></Item>
  );
}

export default ItemPage;
