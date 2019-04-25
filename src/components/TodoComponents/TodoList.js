import React from "react";
import Item from "./Todo";

function TodoList(props) {
  return (
    <div className="shopping-list">
      {props.list.map(item => (
        <Item key={item.id} item={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}

export default TodoList;