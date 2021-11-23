import React, {useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'



import ToDoList from '../todos/ToDoList'




export default function Profile ({ id }) {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getTodos ] = useResource(() => ({
        url:  `/users/${id}`,
        method: 'get'
    }))


    useEffect(() =>{
        getTodos()
    }, [state.user.access_token])


    useEffect(() => {
    if (todos && !todos.isLoading && todos.data) {
            console.log(todos.data)
            dispatch({ type: 'FETCH_TODO_ITEMS', todos: todos.data.todos })
        }
    }, [todos])
    const { data, isLoading } = todos;
    return (
        <>
         {isLoading && 'ToDos loading...'} <ToDoList />
        
        </>
    )
}
