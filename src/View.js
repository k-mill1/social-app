import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function View(props) {

  // builds a card for each new post that's added
  const buildRows = () => {
      console.log(props)
    return props.pages.map((current) => (
       <Row key = {current.postId}>
          <Card style={{width: '30rem'}}>
            <Card.Body  >
            <Card.Header className = 'username'>{current.id}</Card.Header>
            <Card.Text style={{textAlign: 'justify'}} >
                {current.post}
            </Card.Text>
            <Row>
                <Col xs= 'auto'>
                    <Button onClick = {() => props.buttonHandler(current.postId)}>Like</Button>
                </Col>  
                <Col xs= 'auto'> 
                    <h5>{current.likes}</h5>
                </Col>
            </Row>
            </Card.Body>
          </Card>
        </Row>
    ));
  };

  // displays the cards
  return (
    <>
      {buildRows()}
    </>
  );

}
export default View;
