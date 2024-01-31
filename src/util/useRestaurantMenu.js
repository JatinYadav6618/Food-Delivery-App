import { useState, useEffect } from "react";

function useRestaurantMenu(menuid) {
  const [resinfo, setresinfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(menuid);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034494&lng=77.1835983&restaurantId=" +
        menuid +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);

    setresinfo(
      //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      //     .card.itemCards
      [1, 2, 3, 4]
    );
    // console.log(
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     .card.itemCards
    // );
    console.log(resinfo);
    return resinfo;
  };
}

export default useRestaurantMenu;
