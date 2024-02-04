import React, { useState } from "react";
import RestaurantMenu from "./menuCard";

function RestaurantCategory(category) {
  const [showItems, setShowItems] = useState(false);
  const handleAccordian = () => {
    setShowItems(!showItems);
  };
  //   console.log(category);
  return (
    <div className="accordianHead">
      <div className="accordianHeading" onClick={handleAccordian}>
        <span>
          {category?.data?.title} - ({category?.data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems &&
        category.data.itemCards.map((x) => (
          <RestaurantMenu key={x.card.info.id} items={x.card.info} />
        ))}
    </div>
  );
}

export default RestaurantCategory;
