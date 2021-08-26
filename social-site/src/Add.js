import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import './App.css';

function Add(props) {  

    // sets up the initial state
    const [state, changeState] = useState({
        postId: 0, 
        id:'',
        post:'',
        likes: 0,
    });

    // pop-up confirmation that post has been added
    toastr.options = {
        closeButton: true,
        debug: false,
        extendedTimeOut: '3000',
        hideDuration: '1000',
        hideEasing: 'linear',
        hideMethod: 'fadeOut',
        newestOnTop: false,
        onclick: null,
        positionClass: 'toast-top-full-width',
        preventDuplicates: true,
        progressBar: true,
        showDuration: '3000',
        showEasing: 'swing',
        showMethod: 'fadeIn',
        timeOut: '5000'
      };
      toastr.clear();

    // changes the state to whatever you have typed in the form
    const handleChange = (event) => {
        console.log(event);
        const newState = {...state}; 
        newState[event.target.name] = event.target.value;
        changeState(newState);
    };

    // sends the post to the view page
    const submitHandler =(event) => {
        event.preventDefault();  // prevents screen refreshing
        const newId = state.postId + 1
        props.onSubmit(state);
        toastr.success('Post added');
        changeState({postId: newId, id: '', post: '', likes: 0});
    };

    // form that's displayed on the page
    return (
    <div className = 'add-container'>
    <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId = 'taskID'>
            <Form.Label>Username</Form.Label>
            <Form.Control name = 'id' 
            type = 'text'
            placeholder = 'Username' 
            value={state['id']} 
            onChange={(e) =>{
                handleChange(e);
            }} 
            />           
        </Form.Group>

        <Form.Group controlId = 'userPost'>
            <Form.Label>Post</Form.Label>
            <Form.Control name = 'post'  type = 'text' placeholder = 'Post' value={state['post']}  onChange={(e) =>{
                handleChange(e);
            }} />
        </Form.Group>
        <br />
        <Button variant = 'primary' type = 'submit'>Add Post</Button>
    </Form>
    </div>
);

}
export default Add