import React, {useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'

import { Link } from 'react-navi'

import ToDoItem from '../todos/ToDoItem'




export default function ToDoPage ({ id }) {
    const {state} = useContext(StateContext)
    
    const [ todo, getToDo ] = useResource(() => ({
        url: `/todos/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    useEffect(getToDo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <ToDoItem {...todo.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
