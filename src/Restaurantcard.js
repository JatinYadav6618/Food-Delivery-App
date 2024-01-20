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
      <div className="res-info">
        <h2 className="res-card-item res-name">{name}</h2>
        <h5 className="res-card-item">{cuisines.join(", ")}</h5>
        <h6 className="res-card-item">{costForTwo}</h6>
        <h6 className="res-card-item">{avgRating} stars </h6>
      </div>
    </div>
  );
};

export default RestaurantsCard;
