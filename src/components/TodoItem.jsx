import { useContext } from "react";
import { TodoContext } from "./App";

const TodoItem = ({ todo }) => {
    const {handleStatus, handleDetete} = useContext(TodoContext);

    return (
        <div className="flex justify-between border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96">
            <p
                onClick={() => {
                    handleStatus(todo.id);
                }}                className="select-none">{
                todo.done
                    ? <>✓ <del>{todo.text}</del></>
                    : <>➤ {todo.text}</>
            }</p>
            <span 
                className="hover:text-red-400 cursor-pointer select-none"
                onClick={() => {
                    handleDetete(todo.id);
                }}
            >☓</span>
        </div>
    );
};

export default TodoItem;