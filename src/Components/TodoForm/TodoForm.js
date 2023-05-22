import React from "react";
import "./TodoForm.css";
import { ModalContext } from "../../contexts/ModalContext";
import { TodoContext } from "../../contexts/TodoContext";

function TodoForm() {
  const { setOpenModal } = React.useContext(ModalContext);
  const { addTodo } = React.useContext(TodoContext);

  const [ newTodoValue, setNewTodoValue ] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => setOpenModal(false);
  
  const onChange = (event) => setNewTodoValue(event.target.value); 

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Cortar cebolla..." />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
