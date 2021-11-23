import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import UserList from '../user/UserList'


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
       // headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))


    useEffect(() =>{
        getUsers()
    }, [])


    useEffect(() => {
    if (users && !users.isLoading && users.data) {
            console.log(users.data)
            dispatch({ type: 'FETCH_USERS', users: users.data.users })
        }
    }, [users])
    const { data, isLoading } = users;
    return (
        <>
         {isLoading && 'Users loading...'} <UserList />
        
        </>
    )
} 