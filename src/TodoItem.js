import "./TodoItem.css";

function TodoItem({ text, completed }) {
  return (
    <li>
      <button className="check"></button>
      <p>{text}</p>
      <button>x</button>
    </li>
  );
}

export { TodoItem };
