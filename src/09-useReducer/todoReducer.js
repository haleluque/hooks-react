export const todoReducer = (initialState = [], action) => {
  //Se debe intentar siempre retornar un nuevo estado, en lugar de mutar el recibido
  switch (action.type) {
    case "addTodo":
      return [...initialState, action.payload];
    case "removeTodo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "toggleTodo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          //se retorna todo lo demas igual exceptuando el done
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
