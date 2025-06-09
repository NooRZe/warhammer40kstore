function Item({itemId, id, title, price, imageUrl,}) {


  return (
    <div className="d-flex align-center p-40">
      <img src={imageUrl} alt="item" />
      <div>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <p>{title}</p>
      </div>
    </div>  
  );
}

export default Item;
