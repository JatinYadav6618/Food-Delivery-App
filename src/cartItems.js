const CartItems = (items) => {
  console.log(items.data);
  //   const totalprice = 0;
  return (
    <div>
      {items?.data.map((item) => (
        <div className="cartitemdetails">
          <img
            alt="img "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item.items.imageId
            }
          ></img>
          <div>
            <h3>{item.items.name}</h3>
            {/* <h5 className="res-card-item">{item.items.cuisines.join(", ")}</h5> */}
            <h6>₹ {item.items.price / 100}</h6>
            <h6>{item.items.ratings.aggregatedRating.rating} stars </h6>
          </div>
        </div>
      ))}
      {/* <div>{totalprice}</div> */}
    </div>
  );
};

export default CartItems;
