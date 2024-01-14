const RestaurantsCard = (props) => {
  const { ResList } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = ResList;

  //   console.log(ResList);

  return (
    <div className="res-cards">
      <img
        className="res-logo res-card-item"
        alt="res-logo "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2 className="res-card-item res-name">{name}</h2>
      <h5 className="res-card-item">{cuisines.join(", ")}</h5>
      <h4 className="res-card-item">{costForTwo}</h4>
      <h4 className="res-card-item">{avgRating} stars </h4>
    </div>
  );
};

export default RestaurantsCard;
