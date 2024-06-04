import { useState } from "react";
import { changeTodoStatus, getTodos } from "../database/todos";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"
import TodoList from "./TodoList";

const AppAuth = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const AppTodo = () => {
    const [todos, setTodos] = useState(getTodos());

    const handleStatus = (id) => {
        setTodos(changeTodoStatus(id));
    };

    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <div className="card border-double border-4 border-gray-600">
                <div className="card-body">
                    <h3 className="text-3xl mb-4">Todo App</h3>
                    <TodoList todos={todos} handleStatus={handleStatus} />
                </div>
            </div>
        </div>
    );
};

export default AppTodo;