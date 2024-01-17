import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resinfo, setresinfo] = useState(null);

  useEffect =
    (() => {
      fetchMenu();
    },
    []);
  const menuid = useParams();

  const fetchMenu = async () => {
    console.log("data fetching");
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034494&lng=77.1835983&restaurantId=" +
        menuid +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  };

  if (resinfo === 0) return <Shimmer />;

  return (
    <div className="menu">
      <h1>restaurant Name</h1>
    </div>
  );
};

export default ResMenu;
