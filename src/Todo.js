import { useEffect, useState } from "react";
import customApi from "./customApi";
import TodoList from "./TodoList";

function Todo() {
    const[todo, setTodo] = useState('');
    const[todoList, setTodoList] = useState([]);
    const todoListGet = async() =>{
        try{
            const res = await customApi({
                method: 'get',
                url: 'todos'
            })
            setTodoList(res.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        todoListGet();
    }, [])

    const addTodo = async() => {
        try{
            const res = await customApi({
                method: 'post',
                url: 'todos',
                data: {
                    todo,
                    isCompleted: false
                }
            })
            setTodo('');
            await todoListGet();
        }catch(err){
            console.log(err);
        }
    }

    return todoList ? (
        <main>
            <h1>투두리스트</h1>
            <input data-testid="new-todo-input" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button data-testid="new-todo-add-button" onClick={addTodo}>추가</button>
            <ul className="todo">
                {todoList.length === 0 ?
                    <li>리스트가 비었습니다.</li>
                    :
                    todoList.map((el) => <TodoList todo={el} key={el.id} todoListGet={todoListGet}/>)
                }
            </ul>
        </main>
    )
    : (
        <main>
            <h1>로딩중입니다</h1>
        </main>
    )
}

export default Todo;