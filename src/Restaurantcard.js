const RestaurantsCard = (props) => {
  const { ResList } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = ResList;

  return (
    <div className="res-card" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-card__info">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars </h4>
      </div>
    </div>
  );
};

export default RestaurantsCard;
