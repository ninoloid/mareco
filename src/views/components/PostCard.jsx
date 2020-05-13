import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Replied from './Replied'
import { Link } from 'react-router-dom'
import HtmlToReact from 'html-to-react'

const HtmlToReactParser = HtmlToReact.Parser

const htmlParser = string => {
  const htmlToReactParser = new HtmlToReactParser();
  return htmlToReactParser.parse(string)
}

const PostCard = ({ post, replyCount }) => {
  const users = useSelector(state => state.userReducer.users)

  const getUserData = () => {
    const user = users.filter(user => user.id === post.userId)
    return user[0]
  }

  const getDate = () => {
    const date = new Date(post.createdAt)
    return date.toLocaleString('id-ID')
  }

  return (
    <div className="postCardContainer">
      <Card style={{ flexDirection: 'row', margin: "10px auto" }}>
        <Card.Img src={ getUserData().profilePic } className="rounded-circle userPic"/>
        <Card.Body style={{ marginRight: "50px" }}>
          <Card.Title>
            { post.title }
          </Card.Title>
          <div style={{ marginBottom: "30px" }}>
            { htmlParser(post.description) }
          </div>
          <Link to={`post/${post.id}`}>Read more..</Link>
        </Card.Body>
        <Replied replyCount={replyCount}/>
      </Card>
      <p className="userName">
        { getUserData().username }
      </p>
      <p className="createdAt">
        { getDate() }
      </p>
    </div>
  );
}

export default PostCard;
