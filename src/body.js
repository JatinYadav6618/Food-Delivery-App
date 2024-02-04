import { useEffect, useState } from "react";
import RestaurantsCard, { withPromotedLable } from "./Restaurantcard.js";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [searchbtn, setsearchbtn] = useState("");
  const [demolist, setdemolist] = useState([]);
  const promotedRestaurant = withPromotedLable(RestaurantsCard);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034494&lng=77.1835983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // card": {
    //   "card": {
    //     "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    //     "layout": {
    //       "columns": 4
    //     },
    //     "id": "restaurant_grid_listing",
    //     "gridElements": {
    // console.log(json);
    let restaurantCards;
    json.data.cards.map((card) => {
      if (card.card.card.id === "restaurant_grid_listing") {
        restaurantCards = card;
      }
    });
    setResList(
      restaurantCards?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setdemolist(
      restaurantCards?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(reslist);

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurant"
          className="searchtext"
          value={searchbtn}
          onChange={(e) => {
            setsearchbtn(e.target.value);
            console.log(searchbtn);
            if (searchbtn.length === 1) {
              setResList(demolist);
            } else {
              const filteredlist = reslist.filter((res) =>
                res.info.name.toLowerCase().includes(searchbtn.toLowerCase())
              );
              setResList(filteredlist);
            }
          }}
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn btn"
          onClick={() => {
            const filteredlist = reslist.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResList(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="reset btn" onClick={() => setResList(demolist)}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <Link
            className="res-details"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {console.log(restaurant.info)}
            {restaurant.info.promoted ? (
              <promotedRestaurant
                key={restaurant.info.id}
                ResList={restaurant.info}
              />
            ) : (
              <RestaurantsCard
                key={restaurant.info.id}
                ResList={restaurant.info}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
