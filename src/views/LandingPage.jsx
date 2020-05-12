import React from 'react';
import { useSelector } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import { Container } from 'react-bootstrap'
import PostCard from './components/PostCard'
import Post from './Post'

const LandingPage = () => {
  const posts = useSelector(state => state.postReducer.posts)

  const userPost = posts.map(post => <PostCard post={post} key={post.id}/>)

  return (
    <div>
      <NavigationBar />
      <Container>
        <div>
          { userPost }
        </div>
      </Container>

      <Post post={ posts[0] }/>
    </div>
  );
}

export default LandingPage;
