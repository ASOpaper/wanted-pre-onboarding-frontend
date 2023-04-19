import { useState } from "react";
import customApi from "./customApi";

function TodoList( {todo, todoListGet} ) {
    const [isEdit, setIsEdit] = useState(false);
    const [todoEdit, setTodoEdit] = useState(todo.todo || '');
    const [checked, setChecked] = useState(todo.isCompleted);

    function editHandler(){
        setIsEdit(!isEdit);
    }

    const editTodo = async() => {
        try{
            await customApi({
                method: 'put',
                url: `todos/${todo.id}`,
                data: {
                    todo: todoEdit,
                    isCompleted: todo.isCompleted
                }
            })
            setIsEdit(!isEdit);
            await todoListGet();
        }catch(err){
            console.log(err);
        }
    }
    const editTodoCheck = async() => {
        try{
            await customApi({
                method: 'put',
                url: `todos/${todo.id}`,
                data: {
                    todo: todo.todo,
                    isCompleted: !todo.isCompleted
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    const deleteTodo = async() => {
        try{
            await customApi({
                method:'delete',
                url: `todos/${todo.id}`
            })
            await todoListGet();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <li key={todo.id}>
            <input
            type={'checkbox'}
            onChange={() => {
            editTodoCheck()
            setChecked(!checked)
            }}
            checked={checked}
            />
            {isEdit ?
            <>
                <input data-testid="modify-input"  value={todoEdit || ''} onChange={(e) => setTodoEdit(e.target.value)}/>
                <button data-testid="submit-button" onClick={editTodo}>제출</button>
                <button
                data-testid="cancel-button"
                onClick={() => {
                    editHandler()
                    setTodoEdit(todo.todo)
                }}
                >취소</button>
            </>
                :
            <>
                <span className={checked ? 'complete': ''}>{todo.todo}</span>
                <button data-testid="modify-button" onClick={editHandler}>수정</button>
                <button data-testid="delete-button" onClick={deleteTodo}>삭제</button>
            </>
            }
        </li>
    );
}

export default TodoList;