import React from "react";
import Item from "./Todo";

function ItemList(props) {
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}

export default ItemList;