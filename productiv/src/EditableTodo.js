import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./EditableTodo.css";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - isEditing: boolean
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */
function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    setIsDeleted(true);
    setTimeout(handleRemove, 500)
  }

  function handleRemove() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    setIsEditing(false);
    update(formData);
  }


  return (
    <div className={`EditableTodo ${isDeleted ? "hidden" : ""}`}>
      {isEditing === true
        ? <TodoForm initialFormData={todo} handleSave={handleSave} />
        : <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>

          <Todo
            title={todo.title}
            description={todo.description}
            priority={todo.priority} />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
