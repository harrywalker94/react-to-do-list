import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
