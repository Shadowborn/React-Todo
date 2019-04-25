import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  // updates local state to handle the controlled input form
  onUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // this prevents the form submit default (refreshing), and then calls
  // the addItem function passed down on props from App, passing the
  // this.state.input as the argument, so a new item can be created in App's
  // state
  handleSubmit = event => {
    event.preventDefault(); //preserves state
    this.props.addItem(this.state.input); // update global state with current value
    this.setState({ input: "" }); //reset the input field
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="input"
          id="new-item"
          value={this.state.input}
          onChange={this.onUpdate}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;