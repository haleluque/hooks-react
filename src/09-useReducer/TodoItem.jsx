export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onDoubleClick={() => {
          onToggleTodo(todo.id);
        }}
      >
        {todo.description}
      </span>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => onRemoveTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
