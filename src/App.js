import React from "react";
import ItemList from "./components/TodoComponents/TodoList";
import AddItemForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries
    };
  }

  addItem = item => {
    // this takes an item string, copies the groceries on state, and adds in
    // the newly created item object
    this.setState({
      groceries: [
        ...this.state.groceries,
        { name: item, purchased: false, id: Date.now() }
      ]
    });
  };

  toggleComplete = id => {
    // this is mapping over each item, and checking if the item's id is the
    // parameter id we're seeking. If it is the one we're seeking, it creates
    // a new item object with toggled purchase property. Otherwise, it returns
    // the item unchanged.

    // So the end result is a NEW array containing the old items except for
    // the changed item, which is NEW and modified
    this.setState({
      groceries: this.state.groceries.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    });
  };

  removePurchased = () => {
    // const newGroceriesArray = this.state.groceries.filter((item) => {
    //   if (!item.purchased) {
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    // this.setState({ groceries: newGroceriesArray });
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <AddItemForm addItem={this.addItem} />
        </div>
        <ItemList
          groceries={this.state.groceries}
          toggleComplete={this.toggleComplete}
        />
        <button onClick={this.removePurchased}>Clear Purchased</button>
      </div>
    );
  }
}

export default App;
