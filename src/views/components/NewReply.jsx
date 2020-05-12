import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap'

const NewReply = () => {
  return (
    <div style={{ maxWidth: "95%", margin: "10px auto", display: "flex", flexDirection: "column" }}>
      <h5>Post a Reply!</h5>
      <CKEditor
        style={{  minHeight: "500px"   }}
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
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
      <Button style={{ width: "5em", alignSelf: "flex-end", margin: "10px 0" }}>Post</Button>
    </div>
  );
}

export default NewReply;
