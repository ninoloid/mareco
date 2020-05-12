import React from 'react';
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Reply from './components/Reply'
import NewReply from './components/NewReply'

const Post = ({ post }) => {
  const users = useSelector(state => state.userReducer.users)

  const getUserData = () => {
    const user = users.filter(user => user.id === post.authorId)
    return user[0]
  }

  return (
    <div className="postCardContainer" style={{ maxWidth: '90%' }}>
    <Card style={{ flexDirection: 'row', margin: "10px auto" }}>
      <div className="userInfo">
        <Card.Img src={ getUserData().profilePic } className="rounded-circle userInfoPic"/>
        <Card.Text className="userInfoName">asd</Card.Text>
      </div>
      <Card.Body style={{ marginRight: "50px" }}>
        <Card.Title>
          { post.title }
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", textJustify: "auto" }}>
          { post.description }
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae voluptatibus sunt ipsa mollitia esse suscipit molestiae. Iusto delectus nesciunt laborum veniam illo laudantium, aperiam iste rerum unde incidunt dolore nobis praesentium soluta est provident excepturi sequi, commodi laboriosam debitis cupiditate, ratione vel! Facilis obcaecati sit perspiciatis quia perferendis cupiditate tenetur cum quasi assumenda tempora? Nemo quo sint recusandae dolorum culpa praesentium totam perferendis, quod veniam obcaecati modi repellat maiores nostrum natus sit quas nobis, consequatur ipsam eligendi corrupti nesciunt. Earum eligendi placeat, at non, culpa similique corrupti accusantium perspiciatis quas a sed! Officia debitis minima quia magni, libero sunt.
        </Card.Text>
      </Card.Body>
    </Card>
    <p className="userName">
      { getUserData().username }
    </p>
    <p className="createdAt">
      { post.createdAt }
    </p>

    <NewReply />

    <Reply />
    <Reply />
  </div>
  );
}

export default Post;
