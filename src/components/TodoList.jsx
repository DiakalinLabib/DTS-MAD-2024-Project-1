import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleStatus, handleDetete }) => {
    return (
        <>
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleStatus={handleStatus}
                        handleDetete={handleDetete}
                    />
                );
            })}
        </>
    );
};

export default TodoList;