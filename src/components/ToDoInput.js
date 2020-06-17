import React, { Component } from "react";

export default class ToDoInput extends Component {
  render() {
    /* Destructure Props 
    // - Input all methods and props
    */
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        {/* Pass in handleSubmit prop into form used for submitting item */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-info text-white">
                <i className="fas fa-plus-circle"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add To Do Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          {/* 
            - If the edit item is set to true, then change classes(bg-warning) to bg-warning
            - If value is set to false, change classes (bg-info)
            */}
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-warning mt-3 text-uppercase"
                : "btn btn-block btn-info mt-3 text-uppercase"
            }
          >
            {/* Using conditional rendering
           -  Ternary operator, If the edit item is set to true, then get the 
            the value of the edit item
           - If false, add item */}
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
