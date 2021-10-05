import react, {useState, useReducer, useEffect} from 'react';

import User from './user/User';
import ToDoList from './todos/ToDoList';
import UserBar from './user/UserBar';
import appReducer from './reducers';
import AddToDoItem from './todos/AddToDoItem';




function App() {
  
  const base_items = [
      {
      id: 1,
      title: "Task 01",
      description: "Task 01 Description",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    },
    {
      id: 2,
      title: "Task 02",
      description: "Task 02 Description",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    },
    {
      id: 3,
      title: "Task 03",
      description: "Task 03 Description",
      dateCreated: "09/12/2021",
	    complete: false,
	    dateCompleted: ""
    },
    {
      id: 4,
      title: "Task 04",
      description: "Task 04 Description",
      dateCreated: "09/12/2021",
	    complete: false,
	    dateCompleted: ""
    },
    {
      id: 5,
      title: "Task 05",
      description: "Task 05 Description",
      dateCreated: "09/12/2021",
	    complete: true,
	    dateCompleted: "09/12/2021"
    }  
  ]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', items: base_items })

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
      <UserBar user={user} dispatchUser={dispatch} />
      <br/><hr/><br/> 
      {user && <AddToDoItem user={user} dispatch={dispatch} /> }<br/>
      {user && <div> <h3>Todo List</h3></div>}
      {user && <ToDoList items={items} dispatch={dispatch} />}
      
    </div>
  )
}

export default App;
