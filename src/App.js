import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";


/*export const applyClasses = 
(classList=[]) => classList.join(' ')*/

const list = [
  {
    name: "Mana Potion",
    id: 123,  
    purchased: false
  },
  {
    name: "Axe",
    id: 124,
    purchased: false
  },
  {
    name: "Sword",
    id: 1235,
    purchased: false
  },
  {
    name: "Health Potion",
    id: 1246,
    purchased: false
  },
  {
    name: "Health Potion",
    id: 1246,
    purchased: false
  },
  {
    name: "Health Potion",
    id: 1246,
    purchased: false
  },
  {
    name: "Health Potion",
    id: 1246,
    purchased: false
  },
  {
    name: "Health Potion",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Magic Box",
    id: 1248,
    purchased: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    };
  }

  addItem = item => {
    // this takes an item string, copies the groceries on state, and adds in
    // the newly created item object
    this.setState({
      list: [
        ...this.state.list,
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
      list: this.state.list.map(item =>
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
      list: this.state.list.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Inventory List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          list={this.state.list}
          toggleComplete={this.toggleComplete}
        />
        <button onClick={this.removePurchased}>Clear Chosen</button>
      </div>
    );
  }
}

export default App;
