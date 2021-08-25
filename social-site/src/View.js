import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function View(props) {

  const buildRows = () => {
      console.log(props)
    return props.pages.map((current) => (
       <Card>
       <Card.Body >
       <Card.Header>{current.id}</Card.Header>
       <Card.Text>
           {current.post}
       </Card.Text>
       <Row>
           <Col>
               <Button variant = 'success' onClick = {() => props.buttonHandler(current.id)}>Like</Button>
               {'   ' + current.likes}
           </Col>
       </Row>
       </Card.Body>
   </Card>
    ));
  };

  return (
    <>
      {buildRows()}
    </>
  );

}
export default View;
