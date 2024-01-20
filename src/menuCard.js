const RestaurantMenu = (props) => {
  const { restaurantMenu } = props;
  const { category, description, imageId, name, ratings } = restaurantMenu;

  return (
    <div className="Menu-container">
      <h2 className="menuitem">{name}</h2>
      <img
        className="menuitem menuimage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />
      <h4 className="menuitem menudes">{description}</h4>
      {/* <h4 className="menuitem menucat">{category}</h4> */}
      <h5 className="menuitem menurating">
        {ratings.aggregatedRating.rating} Stars
      </h5>
      <h5 className="menuitem menureview">
        {ratings.aggregatedRating.ratingCount}
      </h5>
    </div>
  );
};

export default RestaurantMenu;
