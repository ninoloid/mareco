import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap'

const AddPost = ({ editorType, className, setAddPost }) => {
  const posts = useSelector(state => state.postReducer.posts)
  const replies = useSelector(state => state.replyReducer.replies)
  const [title, setTitle] = useState()
  const dispatch = useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const hideTheEditor = () => {
    setAddPost()
  }

  const submitPost = () => {
    if (editorType === "reply") {
      console.log('replyyyyyyyyyyyy')
      const reply = {
        id: 3,
        userId: 2,
        postId: 1,
        description: "third",
        createdAt: new Date()
      }
      const arrReplies = [...replies]
      arrReplies.push(reply)
      dispatch({ type: 'MODIFY_REPLY', payload: arrReplies })
      console.log('ini arrReplies', arrReplies)
    } else {
      console.log('aaaaaaa')
      const post = {
        id: 3,
        title: "Third Post",
        description: "This is the third",
        userId: 2,
        createdAt: new Date()
      }
      const arrPosts = [...posts]
      arrPosts.push(post)
      dispatch({ type: 'MODIFY_POST', payload: arrPosts })
      console.log('ini arrPosts', arrPosts)
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
        onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
      />
      <h1>{JSON.stringify(className)}</h1>
      { actionButton }
    </div>
  );
}

export default AddPost;
