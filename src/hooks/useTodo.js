import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";

//Custom hook to handle el useReducer con los TODOS
export const useTodo = (localStorageName) => {
  const init = () => {
    return JSON.parse(localStorage.getItem(localStorageName)) || [];
  };

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
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //Cuando los todos cambian, se debe recargar
  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleToggleTodo,
    handleRemoveTodo,
    handleNewTodo,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  };
};
