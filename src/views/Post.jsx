import React from 'react';
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Reply from './components/Reply'
import AddPost from './components/AddPost'

const Post = ({ post }) => {
  const users = useSelector(state => state.userReducer.users)
  const replies = useSelector(state => state.replyReducer.replies)

  const getUserData = data => {
    const user = users.filter(user => user.id === data.userId)
    return user[0]
  }

  const filteredReplies = replies.filter(reply => reply.postId === post.id )
  const postReplies = filteredReplies.map(reply => <Reply reply={reply} key={reply.id}/>)

  return (
    <div className="postCardContainer" style={{ maxWidth: '90%' }}>
      <Card style={{ flexDirection: 'row', margin: "10px auto" }}>
        <div className="userInfo">
          <Card.Img src={ getUserData(post).profilePic } className="rounded-circle userInfoPic"/>
          <Card.Text className="userInfoName">
            { getUserData(post).username }
          </Card.Text>
        </div>
        <Card.Body style={{ marginRight: "50px" }}>
          <Card.Title>
            { post.title }
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", textJustify: "auto" }}>
            { post.description }
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="createdAt">
        { post.createdAt }
      </p>

      <AddPost editorType="reply"/>
      { postReplies }
    </div>
  );
}

export default Post;
