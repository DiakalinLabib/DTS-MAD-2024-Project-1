const todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Learn Vue', done: false },
    { id: 3, text: 'Learn Angular', done: false },
];

const getTodos = () => {
    return todos;
};

const changeTodoStatus = (id) => {
    return todos.map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }

        return todo;
    });
};

const deleteTodo = (id) => {
    return todos.filter((todo) => todo.id !== id);
};

export { getTodos, changeTodoStatus, deleteTodo };