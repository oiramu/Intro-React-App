import "./App.css";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodo/CreateTodoButton";

function App() {
  const defaultTodos = [
    {
      text: "Terminar curso de react",
      completed: true,
    },
    {
      text: "Ir a Platzi Conf",
      completed: false,
    },
    {
      text: "Pasear perrito",
      completed: false,
    },
    {
      text: "Llorar con la llorana bien mucho",
      completed: false,
    },
    {
      text: "Ir al gym",
      completed: true,
    },
    {
      text: "Lavar ropa",
      completed: false,
    },
    {
      text: "Terminar RE4",
      completed: false,
    },
    {
      text: "Tomar más cursos de JuanDC",
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
