import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

import { Link } from 'react-navi'

import ToDoItem from '../todos/ToDoItem'


export default function ToDoPage ({ id }) {
    const [ item, getToDoItem ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))

    useEffect(getToDoItem, [id])

    return (
        <div>
            {(item && item.data)
                ? <ToDoItem {...item.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
