import { useState } from "react";
import Shimmer from "./shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantMenu from "./menuCard";
import useRestaurantMenu from "./util/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const [searchBtn, setSearchBtn] = useState("");
  const resinfo = useRestaurantMenu(resId);

  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="search-container">
        <input
          className="text"
          placeholder="Search Dish"
          value={searchBtn}
          onChange={(e) => {
            setSearchBtn(e.target.value);
            console.log(searchBtn);
            if (searchBtn.length === 1) {
              resinfo = useRestaurantMenu(resId);
            } else {
              const filteredMenu = resinfo.filter((res) =>
                res.card.info.name
                  .toLowerCase()
                  .includes(searchBtn.toLowerCase())
              );
              resinfo = filteredMenu;
            }
          }}
        />
      </div>

      {/* {resinfo.map((menu) => (
        <RestaurantMenu
          key={menu.card.info.id}
          restaurantMenu={menu.card.info}
        />
      ))} */}
      {console.log(resinfo)}
    </div>
  );
};

export default ResMenu;
