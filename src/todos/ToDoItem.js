import React, {useContext, useEffect}  from 'react'
import { Link, useNavigation } from 'react-navi'
import { Card, Button } from 'react-bootstrap'

import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'

function ToDoItem (todo) {
    const {state, dispatch} = useContext(StateContext)


    const navigation = useNavigation()

  
    const [deletedTodo, deleteToDoItem ] = useResource((todoId) => ({
        url: `/todos/${todoId}`,  
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'delete'
    }))

    const [toggledTodo, toggleToDoItem ] = useResource((todoId, c) => ({
        url: `/todos/${todoId}`,  
        method: 'patch',
        headers: {"Authorization": `${state.user.access_token}`},
        data: {
            completed: c
        }
    }))

    
    useEffect(() => {
        if (deletedTodo && deletedTodo.data  && !deletedTodo.isLoading) { //TODO ADD LOADING THING
            dispatch({type: "DELETE_TODO_ITEM", _id: deletedTodo.data._id});
            console.log(deletedTodo.data)
            //navigation.navigate(``) // TODO Navigate to as to go back
        }
   }, [deletedTodo])

    useEffect(() => {
           if (toggledTodo && toggledTodo.data && !toggledTodo.isLoading) {
                console.log('Toggle ToDo: ')
                console.log(toggledTodo.data)
                dispatch({type: "TOGGLE_TODO_ITEM", _id: toggledTodo.data._id, completed: toggledTodo.data.completed, completedOn: toggledTodo.data.completedOn});
           }
      }, [toggledTodo])



      
  return (
    <Card>
        <Card.Body>
            <Card.Title><Link href={`/todos/${todo._id}`}>{todo.title}</Link>
            </Card.Title>
            <Card.Subtitle>
            <i>Created by <b>{todo.author}</b></i>
            </Card.Subtitle>
            <Card.Text>
            {todo.description}
            </Card.Text>
            {todo.createdOn && <i>Created on: {todo.createdOn}</i>}<br/>
            <input type="checkbox" name="completed" disabled={state.user._id !== todo.author} checked={todo.completed} onChange={e => {toggleToDoItem(todo._id, todo.completed)}} />&nbsp;&nbsp;
            {todo.completed && <i>Completed on: {todo.completedOn ? todo.completedOn : ""}</i>}<br/>
            {console.log(state.user._id + ' - ' + todo.author)}
            { (state.user._id === todo.author) && <Button variant="link" onClick={(e) => {deleteToDoItem(todo._id)}}>Delete ToDo</Button>}
    </Card.Body>
    </Card>
 )
}

export default React.memo(ToDoItem);