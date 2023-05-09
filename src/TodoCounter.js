function TodoCounter({ total, completed }) {
  return (
    <h2>
      Haz completado {completed} tarea de {total}
    </h2>
  );
}

export { TodoCounter };
