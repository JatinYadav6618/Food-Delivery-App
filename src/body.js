import { useState } from "react";
import ResList from "./res-list.js";
import RestaurantsCard from "./Restaurantcard.js";

const Body = () => {
  const [reslist, setResList] = useState(ResList);
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
