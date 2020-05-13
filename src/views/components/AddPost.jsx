import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap'

const AddPost = ({ editorType, className, setAddPost, postId }) => {
  const posts = useSelector(state => state.postReducer.posts)
  const replies = useSelector(state => state.replyReducer.replies)
  const activeUser = useSelector(state => state.userReducer.loggedInUser)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const hideTheEditor = () => {
    setAddPost()
  }

  const getLastIndexOfPost = () => posts[posts.length - 1].id + 1

  const getLastIndexOfReply = () => replies[replies.length - 1].id + 1

  const submitPost = () => {
    if (editorType === "reply") {
      const reply = {
        id: getLastIndexOfReply(),
        userId: activeUser.id,
        postId,
        description,
        createdAt: new Date()
      }
      const arrReplies = [...replies]
      arrReplies.push(reply)
      dispatch({ type: 'MODIFY_REPLY', payload: arrReplies })
    } else {
      const post = {
        id: getLastIndexOfPost(),
        title,
        description,
        userId: activeUser.id,
        createdAt: new Date()
      }
      const arrPosts = [...posts]
      arrPosts.push(post)
      dispatch({ type: 'MODIFY_POST', payload: arrPosts })
      hideTheEditor()
    }
  }

  const titleForEditor = editorType === 'reply' ? <h5>Post a Reply!</h5> : (
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        placeholder="Title"
        style={{ padding: "5px 10px", fontWeight: "bold" }}
        onChange={handleTitleChange}
      />
  )

  const actionButton = editorType === 'reply' ? 
  <Button style={{ width: "5em", alignSelf: "flex-end", margin: "10px 0" }} onClick={submitPost}>Post</Button> : (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button style={{ width: "5em", margin: "10px 10px" }} onClick={hideTheEditor}>Cancel</Button>
      <Button style={{ width: "5em", margin: "10px 0" }} onClick={submitPost}>Post</Button>
    </div>
  )

  return (
    <div 
      style={{ maxWidth: "95%", margin: "10px auto", display: "flex", flexDirection: "column" }}
    >
      { titleForEditor }
      <CKEditor
        editor={ ClassicEditor }
        data=""
        onChange={ (event, editor) => {
          const data = editor.getData();
          setDescription(data)
      } }
      />
      { actionButton }
    </div>
  );
}

export default AddPost;
