import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(props) {

  const buildRows = () => {
      console.log(props)
    return props.todos.map((current) => (
      <tr key={current.id}>
        <td>{current.id}</td>
        <td>{current.post}</td>
        <td><button onClick = {() => props.buttonHandler(current.id)}>Like</button>{current.likes}</td>
      </tr>
    ));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {buildRows()}
        </tbody>
      </Table>
    </>
  );

}
export default View;
