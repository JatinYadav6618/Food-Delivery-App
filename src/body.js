import { useState } from "react";
import ResList from "./res-list.js";
import RestaurantsCard from "./Restaurantcard.js";

const Body = () => {
  const [reslist, setreslist] = useState(ResList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = reslist.filter((res) => res.avgRating > 4);
            setreslist(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-containner">
        {reslist.map((restaurant) => (
          <RestaurantsCard key={restaurant.info.id} ResList={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
