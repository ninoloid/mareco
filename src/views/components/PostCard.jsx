import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const PostCard = ({ post }) => {
  const users = useSelector(state => state.userReducer.users)

  const getUserData = () => {
    const user = users.filter(user => user.id === post.authorId)
    return user[0]
  }

  return (
    <div className="postCardContainer">
      <Card style={{ flexDirection: 'row', margin: "10px auto", height: "60%" }}>
        <Card.Img src={ getUserData().profilePic } className="rounded-circle userPic"/>
        <Card.Body style={{ marginRight: "50px" }}>
          <Card.Title>
            { post.title }
          </Card.Title>
          <Card.Text>
            { post.description }
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="userName">
        { getUserData().username }
      </p>
      <p className="createdAt">
        { post.createdAt }
      </p>
      <p className="likes">
        { post.likes }
      </p>
    </div>
  );
}

export default PostCard;
