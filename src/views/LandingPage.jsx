import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import { Container } from 'react-bootstrap'
import PostCard from './components/PostCard'
import Post from './Post'
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddPost from './components/AddPost'

const LandingPage = () => {
  const posts = useSelector(state => state.postReducer.posts)
  const replies = useSelector(state => state.replyReducer.replies)
  const replyCounter = post => replies.filter(reply => reply.postId === post.id ).length
  const userPost = posts.map(post => <PostCard post={post} key={post.id} replyCount={ replyCounter(post) }/>)
  const [addPost, setAddPost] = useState()


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [addPost])

  const showTheEditor = () => {
    setAddPost(<AddPost setAddPost={ setAddPost }/>)
  }
  return (
    <div>
      <NavigationBar />
      <Container>
      { addPost }
        <div>
          <BsFillPlusCircleFill
            className="addButton"
            onClick={ showTheEditor }
          />
          { userPost }
        </div>
      </Container>
      <Post post={ posts[0] }/>
    </div>
  );
}

export default LandingPage;
