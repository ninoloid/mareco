import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import { Container } from 'react-bootstrap'
import PostCard from './components/PostCard'
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddPost from './components/AddPost'
import checkUser from '../helpers/checkUser'

const LandingPage = () => {
  const loggedInUser = checkUser()
  const posts = useSelector(state => state.postReducer.posts)
  const replies = useSelector(state => state.replyReducer.replies)
  const replyCounter = post => replies.filter(reply => reply.postId === post.id ).length
  const userPost = posts.map(post => <PostCard post={post} key={post.id} replyCount={ replyCounter(post) }/>)
  const [addPost, setAddPost] = useState()
  const activeUser = useSelector(state => state.userReducer.loggedInUser)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [addPost])

  useEffect(() => {
    isUserLoggedIn()
  }, [])

  const isUserLoggedIn = () => {
    if (loggedInUser) dispatch({ type: 'LOGGED_IN_USER', payload: loggedInUser })
  }

  const showTheEditor = () => {
    setAddPost(<AddPost setAddPost={ setAddPost }/>)
  }
  return (
    <div>
      <NavigationBar />
      <Container>
      { addPost }
        <div>
          { activeUser && <BsFillPlusCircleFill
            className="addButton"
            onClick={ showTheEditor }
          />}
          { userPost }
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
