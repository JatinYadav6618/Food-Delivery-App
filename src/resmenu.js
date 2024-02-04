import { useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantMenu from "./menuCard";
import useRestaurantMenu from "./util/useRestaurantMenu";
import RestaurantCategory from "./restaurantCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const [searchBtn, setSearchBtn] = useState("");
  const resinfo = useRestaurantMenu(resId);
  // const [showIndex, setShowIndex] = useState(null);
  // console.log(resinfo);
  if (resinfo.length < 1) {
    <Shimmer />;
  } else {
    // console.log(typeof resinfo, resinfo.length);
    // .find((x) => x.groupedCard)
    //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
    //     ?.filter(
    //       (x) =>
    //         x["@type"] ==
    //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     )
    //     ?.map((x) => x.itemCards)
    //     .flat(Infinity)
    //     .map((x) => x.card?.info)

    const { name, cuisines, costForTwoMessage } = resinfo[0]?.card?.card?.info;

    const { itemCards } = resinfo.find((x) => x.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resinfo
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter(
        (x) =>
          x["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(categories);
    // console.log(name, cuisines, costForTwoMessage);

    return (
      <div className="menu">
        <div className="restaurantName">
          <h2>{name}</h2>
          <span>{cuisines.join(", ")}</span>
          <span>{costForTwoMessage}</span>
        </div>
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
                console.log(resinfo);
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

        {/* Catagories */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.title}
            data={category}
            // showItems={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
          />
        ))}

        {/* {resinfo.map((menu) => (
          <RestaurantMenu
            key={category?.card?.card.title}
            restaurantMenu={category?.card?.card}
          />
        ))} */}
        {/* {console.log(resinfo)} */}
      </div>
    );
  }
};

export default ResMenu;
