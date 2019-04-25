import React from "react";

function Item(props) {
  // this constructs the className attribute for the div below conditional
  // on whether this item's props.item.purchased is true or false
  let classNames = "item";
  if (props.item.purchased) {
    classNames += " purchased";
  }

  function updatePurchaseHere() {
    // this calls props.toggleComplete function called from App->ItemList->Item
    // It passes in its own id since that information is needed in the toggleComplete
    // function
    props.toggleComplete(props.item.id);
  }

  return (
    <div className={classNames} onClick={updatePurchaseHere}>
      <p>{props.item.name}</p>
    </div>
  );
}

export default Item;