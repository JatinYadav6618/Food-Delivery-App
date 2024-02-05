import { useDispatch } from "react-redux";
import { addItem } from "./util/cartSlice";

const RestaurantMenu = (accordianItem) => {
  // const { restaurantMenu } = props;
  // console.log(accordianItem);
  const { description, imageId, name, ratings, price } = accordianItem.items;
  // const { defaultPrice } =
  //   accordianItem.items.variantsV2.pricingModels[0].price;

  // console.log(name);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="Menu-container">
      <h2 className="menuitem">
        {name} - ( ₹{price / 100})
      </h2>
      <div className="itemImg">
        <div className="imgbtn">
          <button onClick={() => handleAddItems(accordianItem)}>Add +</button>
        </div>
        <img
          className="menuitem menuimage"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
        />
      </div>
      <h4 className="menuitem menudes">{description}</h4>
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
