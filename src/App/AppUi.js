import React from "react";

import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodo/CreateTodoButton";
import { TodoContext } from "../contexts/TodoContext";
import { ModalContext } from "../contexts/ModalContext";
import { Modal } from "../Components/Modal/Modal";
import { TodoForm } from "../Components/TodoForm/TodoForm";

function AppUi() {
  const { loading, todosSearch, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  const { openModal, setOpenModal } = React.useContext(ModalContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Cargando tareas...</p>}
        {!loading && todosSearch.length === 0 && <p>No hay más tareas 🤷</p>}
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
      <CreateTodoButton setOpenModal={setOpenModal} />

      {
        openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )
      }
    </>
  );
}

export { AppUi };
