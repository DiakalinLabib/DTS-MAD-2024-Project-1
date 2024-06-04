import { useState } from "react";
import { addTodo, changeTodoStatus, deleteTodo, getTodos } from "../database/todos";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header"
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

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

    const handleDetete = (id) => {
        setTodos(deleteTodo(id));
    };

    const handleAdd = (text) => {
        setTodos(addTodo(text));
    };

    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <div className="card border-double border-4 border-gray-600">
                <div className="card-body">
                    <h3 className="text-3xl mb-4">Todo App</h3>

                    <TodoForm handleAdd={handleAdd} />

                    <TodoList 
                        todos={todos} 
                        handleStatus={handleStatus}
                        handleDetete={handleDetete}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppTodo;