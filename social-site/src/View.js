import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function View(props) {

  const buildRows = () => {
      console.log(props)
    return props.pages.map((current) => (
       <Card style={{width: '30rem'}}>
       <Card.Body  >
       <Card.Header className = 'username'>{current.id}</Card.Header>
       <Card.Text style={{textAlign: 'justify'}} >
           {current.post}
       </Card.Text>
       <Row>
           <Col md= 'auto'>
               <Button onClick = {() => props.buttonHandler(current.id)}>Like</Button>
            </Col>  
            <Col md= 'auto'> 
               <h5>{current.likes}</h5>
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
