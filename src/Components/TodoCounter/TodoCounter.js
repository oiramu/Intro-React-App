import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="title">
      <span> {completed} </span>
      Tareas completadas de
      <span> {total} </span>
    </h2>
  );
}

export { TodoCounter };
