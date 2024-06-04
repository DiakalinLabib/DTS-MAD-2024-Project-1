import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleStatus }) => {
    return (
        <>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} handleStatus={handleStatus} />;
            })}
        </>
    );
};

export default TodoList;