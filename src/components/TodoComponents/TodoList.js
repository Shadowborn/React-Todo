// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

function TodoList(props) {
  return (
      <div className="todo-info">
        <h3>{props.todolist.task}</h3>
      </div>
  );
}

export default TodoList;