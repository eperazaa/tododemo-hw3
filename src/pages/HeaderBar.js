import React, { useContext } from 'react'

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
              <Nav.Link><Link href="/users">Users</Link></Nav.Link>
              {user.username && <Nav.Link>| <Link href="/todos/create">Add TODO</Link></Nav.Link>}
              
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>



    )
}