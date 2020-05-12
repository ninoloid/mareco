const initialState = {
  users: [
    {
      id: 1,
      username: "FirstUser",
      email: "firstuser@mail.com",
      password: "FirstUser",
      profilePic: "https://i.picsum.photos/id/370/300/300.jpg"
    },
    {
      id: 2,
      username: "SecondUser",
      email: "seconduser@mail.com",
      password: "SecondUser",
      profilePic: "https://i.picsum.photos/id/371/300/300.jpg"
    },
    {
      id: 3,
      username: "ThirdUser",
      email: "thirduser@mail.com",
      password: "ThirdUser",
      profilePic: "https://i.picsum.photos/id/372/300/300.jpg"
    }
  ]
}

const userReducer = (state = initialState, action) => state
export default userReducer