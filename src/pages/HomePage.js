import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import ToDoList from '../todos/ToDoList'


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ items, getItems ] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))
    useEffect(getItems, [])
    useEffect(() => {
    if (items && items.data) {
            dispatch({ type: 'FETCH_TODO_ITEMS', items: items.data.reverse() })
        }
    }, [items])
    const { data, isLoading } = items;
    return (
        <>
          {isLoading && 'Items loading...'} <ToDoList />
        </>
    )
} 