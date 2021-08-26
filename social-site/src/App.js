import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from "./Add";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const [pages, changePages] = useState([]);

  // adds new post to the list and stores them in local storage
  const updateListItems = (post) => {
    console.log(post)
    changePages((prevState) => [...prevState, post]);  //adds new post to the end of the array
    localStorage.setItem('list', JSON.stringify([...pages, post]));  //stores in browser history
  };

  // increments the number of likes on click
  const buttonHandler = (id) => {
    const update = pages.map(post => post.postId === id ? { ...post, likes: post.likes +1 } : post)
    changePages(update) 
  }
  
  useEffect(() => {
    // localStorage.removeItem('list') // clears local storage
    const listContents = localStorage.getItem('list'); //check if item in local storage called list
    changePages(JSON.parse(listContents) || []); //add to state using changePages method 
  }, []);

  // updates local storage whenever the state of the items changes
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify([...pages]));
  }, [pages]);

  // displays the entire app (parent component of view.js and add.js)
  return (
    <Router>
      <Navbar id = 'navbar-header' expand = 'md'>
        <Navbar.Brand>Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls = 'basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id = 'basic-navbar-nav'>
          <Nav className = 'mr-auto'>

            <Link className = 'nav-link' to = '/'>
              View
            </Link>
            <Link className = 'nav-link' to = '/add'>
              Add
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path = '/add'>
            <Add onSubmit={(post) => updateListItems(post)} />
          </Route>
          <Route exact path = '/'>
            <View pages={pages} buttonHandler = {(id) => buttonHandler(id)} />
          </Route>
          <Route path = '/'>Error: 404 not found</Route> /if /and anything else
        </Switch>
      </Container>
    </Router>
  );
}
export default App;

