const getTodos = () => {
    if (!localStorage.getItem("todos")) localStorage.setItem("todos", JSON.stringify([]));

    return JSON.parse(localStorage.getItem("todos"));
};

const setTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const getSortedTodos = (type) => {
    return getTodos().sort((a, b) => {
        if (type === 'asc') {
            return b.done - a.done || a.id - b.id;
        }

        return a.done -  b.done || b.id - a.id;
    });
};

const changeTodoStatus = (id) => {
    setTodos(getTodos().map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }

        return todo;
    }));

    return getSortedTodos();
};

const deleteTodo = (id) => {
    setTodos(getTodos().filter((todo) => todo.id !== id));

    return getSortedTodos();
};

const addTodo = (text) => {
    setTodos(getTodos().concat({
        id: getTodos().length + 1,
        text,
        done: false,
    }));

    return getSortedTodos();
};

export { getTodos, changeTodoStatus, deleteTodo, addTodo, getSortedTodos };