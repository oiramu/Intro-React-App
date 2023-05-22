import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../contexts/TodoContext";

function TodoCounter() {
  const {totalTodos: total, completedTodos: completed} = React.useContext(TodoContext);
  return (
    <>
      {total === completed && (
        <h2 className="title">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {total !== completed && (
        <h2 className="title">
          <span> {completed} </span>
          Tareas completadas de
          <span> {total} </span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
