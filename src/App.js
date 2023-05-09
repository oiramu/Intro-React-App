import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function App() {
  const defaultTodos = [
    {
      text: "Todo 1",
      completed: false,
    },
    {
      text: "Todo 2",
      completed: false,
    },
    {
      text: "Todo 3",
      completed: false,
    },
  ];

  return (
    <>
      <TodoCounter total={16} completed={11} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
