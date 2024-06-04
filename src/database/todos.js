let todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Learn Vue', done: false },
    { id: 3, text: 'Learn Angular', done: false },
];

const getTodos = () => {
    return todos;
};

const getSortedTodos = (type) => {
    return todos.sort((a, b) => {
        if (type === 'asc') {
            return b.done - a.done || a.id - b.id;
        }

        return a.done -  b.done || b.id - a.id;
    });
};

const changeTodoStatus = (id) => {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }

        return todo;
    });

    return todos;
};

const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);

    return todos;
};

const addTodo = (text) => {
    todos = todos.concat({
        id: todos.length + 1,
        text,
        done: false,
    });

    return todos;
};

export { getTodos, changeTodoStatus, deleteTodo, addTodo, getSortedTodos };