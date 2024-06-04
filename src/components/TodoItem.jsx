const TodoItem = ({ todo, handleStatus }) => {
    return (
        <div
            className="border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96"
            onClick={() => {
                handleStatus(todo.id);
            }}
        >
            <p className="select-none">{
                todo.done
                    ? <>✓ <del>{todo.text}</del></>
                    : <>➤ {todo.text}</>
            }</p>
        </div>
    );
};

export default TodoItem;