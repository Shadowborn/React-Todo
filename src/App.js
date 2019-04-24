import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const toDoLists = [
  {
    id: '1',
    task: 'Harry Potter',
    completed: false
  },
  {
    id: '2',
    task: 'Ron Weasley',
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      toDoOnState: toDoLists,
      todolist: {
        id: '',
        task: '',
        completed: false
      }
    };
  }

  handleInputChange = event => {
    console.log(event.target.task);
    this.setState({ 
      todolist: {
        ...this.state.todolist,
        [event.target.task]: event.target.value
        }
      });
  };

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDoOnState: [...this.state.toDoOnState, this.state.todolist],
      todolist: {}
    });
  };

  render() {
    return (
      <div>
      <h2>Welcome to your Todo App!</h2>
      <div className="App">
        <div className="to-do-list">
          {this.state.toDoOnState.map(todolist => (
            <TodoList todolist={todolist} key={todolist.task}/>
          ))}
        </div>
        <form onSubmit={this.addToDo}>
            <input
              placeholder="What do you need to do?"
              value={this.state.todolist.task}
              onChange={this.handleInputChange}
            />
        </form>
        <button>Add task</button>
      </div>
      </div>
    );
  }
}

export default App;
