import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

function Add(props) {  //function for add component

    const [state, changeState] = useState({  //sets up one individual todo state 
        id:"",
        post:"",
        likes: 0,
    });

    toastr.options = {  //all options for toastr go to toastr website
        closeButton: true,
        debug: false,
        extendedTimeOut: "3000",
        hideDuration: "1000",
        hideEasing: "linear",
        hideMethod: "fadeOut",
        newestOnTop: false,
        onclick: null,
        positionClass: "toast-top-full-width",
        preventDuplicates: true,
        progressBar: true,
        showDuration: "3000",
        showEasing: "swing",
        showMethod: "fadeIn",
        timeOut: "5000",
      };
      toastr.clear();


    const handleChange = (event) => {
        console.log(event);
        const newState = {...state};  //makes state same as is so far
        if(event.target.name === "completed"){
            newState[event.target.name] = !state.completed;
        } else {
            newState[event.target.name] = event.target.value;
        }
        changeState(newState);
    };

    const submitHandler =(event) => {
        event.preventDefault();  //prevents screen refreshing
        props.onSubmit(state);
        toastr.success("Item added");
        changeState({ id: "", post: "", likes: 0});  //resets state to as was at begining
    };

    return (
    <div className="container">
    <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="taskID">
            <Form.Label>Username</Form.Label>
            <Form.Control name="id" 
            type ="text"
            placeholder="Username" 
            value={state["id"]} 
            onChange={(e) =>{
                handleChange(e);  //calls handleChange if you change text box passes event so know which changed
            }} 
            />           
        </Form.Group>

        <Form.Group controlId ="userPost">
            <Form.Label>Post</Form.Label>
            <Form.Control name="post"  type="text" placeholder="Post" value={state["post"]}  onChange={(e) =>{
                handleChange(e);
            }} />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Add Post</Button>
    </Form>
    </div>
);

}
export default Add