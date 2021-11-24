import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import ToDoList from '../todos/ToDoList'


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getTodos ] = useResource(() => ({
        url: '/todos',
        headers: {"Authorization": `${state.user.access_token}`},
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
    const {user} = state;
    return (
        <>
         { isLoading && 'ToDos loading...'} {user.username && (<ToDoList />)}
        
        </>
    )
} 