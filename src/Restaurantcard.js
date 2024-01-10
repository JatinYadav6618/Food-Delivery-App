const RestaurantsCard = (props) => {
  const { ResList } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = ResList;

  //   console.log(ResList);

  return (
    <div className="res-cards" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating} stars </h3>
    </div>
  );
};

export default RestaurantsCard;
