import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const handleNewTodo = (todo) => {
    const action = {
      type: "addTodo",
      payload: todo,
    };

    //El dispatch es la forma como se le envian actiones al reducer
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "removeTodo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
        type: "toggleTodo",
        payload: id,
      };
  
      dispatch(action);
  };

  //el init es como cargar el initialState y es opcional
  //con el tercer param del useReducer traemos los valores del localStorag
  const [todos, dispatch] = useReducer(todoReducer,  [], init);

  //Cuando los todos cambian, se debe recargar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        ToDo App: {todos.length} <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
