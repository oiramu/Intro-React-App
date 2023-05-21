import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodo/CreateTodoButton";

function AppUi({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todosSearch,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList>
            {todosSearch.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </>
    );
}

export { AppUi };