import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos