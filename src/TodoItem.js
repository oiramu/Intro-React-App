function TodoItem({ text, completed }) {
  return (
    <li>
      <button>V</button>
      <p>{text}</p>
      <button>x</button>
    </li>
  );
}

export { TodoItem };
