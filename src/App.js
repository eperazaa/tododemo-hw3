import React, {useReducer, useEffect} from 'react';

//import User from './user/User';
import ToDoList from './todos/ToDoList';
import UserBar from './user/UserBar';
import appReducer from './reducers';
import AddToDoItem from './todos/AddToDoItem';

import {  StateContext } from './Contexts';
import { useResource } from 'react-request-hook';




function App() {
  
  const [ items, getToDoItems ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', items: [] })

  useEffect(getToDoItems, [])

  useEffect(() => {
      if (items && items.data) {
          dispatch({ type: 'FETCH_TODO_ITEMS', items: items.data.reverse() })
      }
  }, [items])



  const {user} = state;

/*   useEffect(() => {
    if (user) {
       document.title = `${user}’s ToDo List` 
     } else {
       document.title = 'ToDo List'
   }
  }, [user])
 */

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <UserBar />
        <br/><hr/><br/> 
        {user && <AddToDoItem /> }<br/>
        {user && <div> <h3>Todo List</h3></div>}
        {user && <ToDoList />}
      </StateContext.Provider>
      
    </div>
  )
}

export default App;
