import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Replied from './Replied'

const PostCard = ({ post, replyCount }) => {
  const users = useSelector(state => state.userReducer.users)

  const getUserData = () => {
    const user = users.filter(user => user.id === post.userId)
    return user[0]
  }

  const getDate = () => {
    const date = new Date(post.createdAt)
    console.log(date)
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
          <Card.Text>
            { post.description }
          </Card.Text>
          <Card.Text>Read more..</Card.Text>
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
