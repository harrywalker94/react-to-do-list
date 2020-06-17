import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center" alt="Heading">
          Shopping List
        </h3>
        {/* - Set up items in toDo that we are going to be rendering
          - Loop through todoItems in the state array using .map()
          - Pass in itemID into each method in toDo item component
          - handleDelete, pass down with arrow function
          - handleEdit, pass down with arrow function
           */}
        {items.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-4"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
