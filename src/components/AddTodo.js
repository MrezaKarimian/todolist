import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { todoContext } from '../todoContext/todoProvider'

function AddTodo() {
    const { AddTodoFunc } = useContext(todoContext)
    const [todoText , setTodoText] = useState('') 

    const addTodo=(e)=>{
        e.preventDefault();
        AddTodoFunc({id:Math.random() ,text:todoText , done:false})
       setTodoText("");
    }

    return (
        <div>
            <Form onSubmit={addTodo}>
                <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)} />
                <Button type="submit" >ADD TODO</Button>
            </Form>
        </div>
    )
}

export default AddTodo

const Form = styled.form`
    width: 400px;
    padding: 50px;
    margin: 20px auto;
`
const Button = styled.button`
    width: 80px;
    padding: 10px;
    margin: 2rem;
`