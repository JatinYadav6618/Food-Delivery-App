import { useEffect, useState } from "react";
import RestaurantsCard from "./Restaurantcard.js";
import shimmer from "./shimmer.js";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [searchbtn, setsearchbtn] = useState("");
  const [demolist, setdemolist] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034494&lng=77.1835983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setResList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setdemolist(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return reslist.length === 0 ? (
    <shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="searchtext"
          value={searchbtn}
          onChange={(e) => {
            setsearchbtn(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            const filteredlist = reslist.filter((res) =>
              res.info.name.toLowerCase().includes(searchbtn.toLowerCase())
            );
            setResList(filteredlist);
          }}
        >
          search
        </button>
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
          <RestaurantsCard key={restaurant.info.id} ResList={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
