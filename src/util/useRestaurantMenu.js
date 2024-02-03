import { useState, useEffect } from "react";

function useRestaurantMenu(menuid) {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  // console.log(menuid);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034494&lng=77.1835983&restaurantId=" +
        menuid
    );
    const json = await data.json();
    console.log(json);
    // const menuItemsData =
    //   json?.data?.cards
    //     .find((x) => x.groupedCard)
    //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
    //     ?.filter(
    //       (x) =>
    //         x["@type"] ==
    //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     )
    //     ?.map((x) => x.itemCards)
    //     .flat(Infinity)
    //     .map((x) => x.card?.info) || [];

    // console.log(menuItemsData);

    // setMenuItems(menuItemsData);
    setMenuItems(json?.data);
  };
  return menuItems;
}

export default useRestaurantMenu;
