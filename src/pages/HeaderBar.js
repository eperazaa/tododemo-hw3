import React, { useContext } from 'react'

import AddToDoItem from '../todos/AddToDoItem'
import UserBar from '../user/UserBar'
import Header from '../Header'


import { Link } from 'react-navi'

import { Navbar, Nav, Container } from 'react-bootstrap'

import { StateContext } from '../Contexts'

export default function HeaderBar () {
    
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><Header text="My ToDoList" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && <Nav.Link><Link href="/todos/create">Add TODO Item</Link></Nav.Link>}
              
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>



    )
}