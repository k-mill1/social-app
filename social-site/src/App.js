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
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'



function App() {
  const [pages, changePages] = useState([]);

  const updateListItems = (post) => {
    console.log(post)
    changePages((prevState) => [...prevState, post]);  //adds object to end of array
    localStorage.setItem("list", JSON.stringify([...pages, post]));  //store in browser history
  };

  const buttonHandler = (id) => {
    const update = pages.map(post => post.id === id ? { ...post, likes: post.likes +1 } : post)
    changePages(update)
  }
 

  useEffect(() => {
    // localStorage.removeItem('list')
    const listContents = localStorage.getItem("list"); //check if item in local storage called list
    changePages(JSON.parse(listContents) || []); //add to state using changePages method 
  }, []);

  return (
    <Router>
      <Navbar id="navbar-header" expand="md">
        <Navbar.Brand>Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Link className="nav-link" to="/">
              View
            </Link>
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/add">
            <Add onSubmit={(task) => updateListItems(task)} />
          </Route>
          <Route exact path="/">
            <View pages={pages} buttonHandler = {(id) => buttonHandler(id)} />
          </Route>
          <Route path="/">Error: 404 not found</Route> /if /and anything else
        </Switch>
      </Container>
    </Router>
  );
}
export default App;

