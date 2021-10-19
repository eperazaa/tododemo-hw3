import react, {useState, useReducer, useEffect} from 'react';

import User from './user/User';
import ToDoList from './todos/ToDoList';
import UserBar from './user/UserBar';
import appReducer from './reducers';
import AddToDoItem from './todos/AddToDoItem';

import {  StateContext } from './Contexts';




function App() {
  
  

  const [ state, dispatch ] = useReducer(appReducer, { user: '', items: [] })

  const {user, items} = state;

  useEffect(() => {
    if (user) {
       document.title = `${user}’s ToDo List` 
     } else {
       document.title = 'ToDo List'
   }
  }, [user])


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
