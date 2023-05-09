import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="title">
      Haz completado {completed} tarea de {total}
    </h2>
  );
}

export { TodoCounter };
