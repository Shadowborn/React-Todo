import React from 'react';

function Todo(props) {
  return (
      <div className="todo-info">
        <h3>{props.todo.todo}</h3>
      </div>
  );
}

export default Todo;