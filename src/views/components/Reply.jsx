import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import HtmlToReact from 'html-to-react'

const HtmlToReactParser = HtmlToReact.Parser

const Reply = ({ reply }) => {
  const users = useSelector(state => state.userReducer.users)

  const getUserData = data => {
    const user = users.filter(user => user.id === reply.userId)
    return user[0]
  }

  const htmlParser = string => {
    const htmlToReactParser = new HtmlToReactParser();
    return htmlToReactParser.parse(string)
  }


  return (
    <Card style={{ maxWidth: "95%", margin: "10px auto" }}>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">{ getUserData().username }</Card.Subtitle>
        <Card.Text>
          { htmlParser(reply.description) }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Reply;
