import React, {useState, useReducer, useEffect} from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import { Container } from 'react-bootstrap';

import appReducer from './reducers';
 

import { StateContext } from './Contexts';
import AddToDoItem from './todos/AddToDoItem';
import ToDoPage from './pages/ToDoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import Profile from './pages/Profile';

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [], users: [] })

  const {user} = state;


 
 
 
 
  const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/todos':  route({ view: <HomePage /> }),
  '/users':  route({ view: <UsersPage /> }),
  '/users/:id': route(req => {
    return { view: <Profile id={req.params.id} /> }}),
  '/todos/create': route({ view: <AddToDoItem /> }),
  '/todos/:id': route(req => {
      return { view: <ToDoPage id={req.params.id} /> }
  }),
})

 

  





return (
    <div>
      
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar/>
                <hr />
                <View />
            </Container>
            </Router>
        </StateContext.Provider>
      
    </div>
  )
}

export default App;
