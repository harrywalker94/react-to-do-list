import React, { Component } from "react";
import Item from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    return (
      <section>
        <h1>To Do List</h1>
        <Item />
      </section>
    );
  }
}
