import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {

  return (
    <div className="createTodo-container">
      <button onClick={() => setOpenModal( state => !state )}>+</button>
    </div>
  );
}

export { CreateTodoButton };
