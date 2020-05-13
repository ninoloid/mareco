import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Reply from './components/Reply'
import AddPost from './components/AddPost'
import { useParams } from 'react-router-dom'
import checkUser from '../helpers/checkUser'
import NavigationBar from './components/NavigationBar'
import HtmlToReact from 'html-to-react'

const HtmlToReactParser = HtmlToReact.Parser
const loggedInUser = checkUser()

const Post = () => {
  const { id } = useParams()
  const users = useSelector(state => state.userReducer.users)
  const replies = useSelector(state => state.replyReducer.replies)
  const posts = useSelector(state => state.postReducer.posts)
  const filteredPost = posts.filter(post => post.id === Number(id))
  const post = filteredPost[0]
  const activeUser = useSelector(state => state.userReducer.loggedInUser)
  const dispatch = useDispatch()

  const htmlParser = string => {
    const htmlToReactParser = new HtmlToReactParser();
    return htmlToReactParser.parse(string)
  }

  const getUserData = data => {
    const user = users.filter(user => user.id === data.userId)
    return user[0]
  }

  const filteredReplies = replies.filter(reply => reply.postId === post.id )
  const postReplies = filteredReplies.map(reply => <Reply reply={reply} key={reply.id}/>)

  useEffect(() => {
    isUserLoggedIn()
  }, [])

  const isUserLoggedIn = () => {
    if (loggedInUser) dispatch({ type: 'LOGGED_IN_USER', payload: loggedInUser })
  }

  const getDate = () => {
    const date = new Date(post.createdAt)
    return date.toLocaleString('id-ID')
  }

  return (
    <>
      <NavigationBar />
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
            <div style={{ textAlign: "justify", textJustify: "auto" }}>
              { htmlParser(post.description) }
            </div>
          </Card.Body>
        </Card>
        <p className="createdAt">
          { getDate() }
        </p>

        { activeUser && <AddPost editorType="reply" postId={post.id}/> }
        { postReplies }
      </div>
    </>
  );
}

export default Post;
