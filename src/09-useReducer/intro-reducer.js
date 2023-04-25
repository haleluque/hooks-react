const initialState = [{
    id:1,
    todo: 'tarea1',
    done: false
}];

const todoReducer = (state = initialState, action  = {}) => {

    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload];    
        default:
        return state;
    }

}   

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'tarea2',
    done: false
};

const addTodoAction = {
    type: 'addTodo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);