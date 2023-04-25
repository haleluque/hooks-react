import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onImputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <=1) return;
    const newTodo = {
        id: new Date().getTime() * 3,
        description: description,
        done: false,
      };
      onNewTodo(newTodo);
      onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="description"
        type="text"
        placeholder="nuevo TODO"
        className="form-control"
        onChange={onImputChange}
        value={description ?? ""}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  );
};
