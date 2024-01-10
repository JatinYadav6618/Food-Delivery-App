import { useEffect, useState } from "react";
import RestaurantsCard from "./Restaurantcard.js";

const Body = () => {
  const [reslist, setResList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034494&lng=77.1835983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = reslist.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResList(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
        <button onClick={() => setResList(ResList)}>Reset</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantsCard key={restaurant.info.id} ResList={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
