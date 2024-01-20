import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantMenu from "./menuCard";

const ResMenu = () => {
  let [resinfo, setresinfo] = useState(null);
  const menuid = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034494&lng=77.1835983&restaurantId=" +
        menuid.resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setresinfo(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {resinfo.map((menu) => (
        // <Link className="menuDetails" key={menu.card.info.id} to={}
        <RestaurantMenu
          key={menu.card.info.id}
          restaurantMenu={menu.card.info}
        />
      ))}
    </div>
  );
};

export default ResMenu;
