import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
class App extends Component {
  /* Set up state and items array with property */
  state = {
    items: [],
    id: uuidv4(),
    /* Set item & editItem in the state */
    item: "",
    editItem: false,
  };
  /* Set Methods */
  /* handleChange 
  // - Pass in the event to handleChange
  */
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  /* handleSubmit 
// -Pass in event and  will be used every time we submit a form
// - Everytime something is typed in toDo, this will be updated within the state
 // - state.item gives us an intial value and keeps track of what we ar going to update
*/
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };
  /*  clearList
// - Used to clear the toDoList, no event required
// - preventDefault is used to prevent browser being refreshed when using submit button
// - Collect item id and item in the state
// - Update newItem when submitted using updatedItems
// - Using this.setState() replace previous array with newly constructed array.
// - Set item to empty string
// - set id to random uuid
 // - Set editItem back to false
*/
  clearList = () => {
    console.log("clear To Do List");
  };
  /*  handleDelete
// - Used to delete items
// - Passes in id in template literals
*/
  handleDelete = (id) => {
    console.log(`handle edit ${id}`);
  };
  /*  handleEdit
// - Used to edit deleted items
// - Passes in id in template literals
*/
  editItem = (id) => {
    console.log(`edit edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            {/* Set up props from the state within the components */}
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.state.clearList}
              handleDelete={this.state.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
