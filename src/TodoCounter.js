import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="title">
      {completed} tareas completadas de {total}
    </h2>
  );
}

export { TodoCounter };
