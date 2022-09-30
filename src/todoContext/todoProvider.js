import React , { useReducer } from 'react'
import todoReducer from '../todoReducer/todoReducer';
import { addTodo , deleteTodo , toggleTodo } from "../todoReducer/todoActions"

export const todoContext = React.createContext();

function TodoProvider({children}) {
    const initialState = []

    const [state , dispatch] = useReducer(todoReducer , initialState)

    const AddTodoFunc=(todo)=>{
        dispatch(addTodo(todo))
    }
    const DeleteTodoFunc=(todoID)=>{
        dispatch(deleteTodo(todoID))
    }
    const ToggleTodoFunc=(todoID)=>{
        dispatch(toggleTodo(todoID))
    }

    return (
        <todoContext.Provider value={{ state , AddTodoFunc , DeleteTodoFunc , ToggleTodoFunc }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoProvider
