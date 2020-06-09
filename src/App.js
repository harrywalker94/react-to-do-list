import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
class App extends Component {
  /* Set up state and items array with property */
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "brush teeth" },
    ],
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
    console.log("handle Change");
  };
  /* handleSubmit 
// -Pass in event and  will be used every time we submit a form
*/
  handleSubmit = (e) => {
    console.log("handle Submit");
  };
  /*  clearList
// - Used to clear the toDoList, no event required
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
