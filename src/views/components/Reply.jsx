import React from 'react';
import { Card } from 'react-bootstrap'

const Reply = () => {
  return (
    <Card style={{ maxWidth: "95%", margin: "10px auto" }}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">username</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Reply;
