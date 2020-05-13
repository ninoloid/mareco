import { LOGGED_IN_USER, USER_REGISTER } from '../actionTypes'

const initialState = {
  users: [
    {
      id: 1,
      username: "FirstUser",
      password: "FirstUser",
      profilePic: "https://i.picsum.photos/id/370/300/300.jpg"
    },
    {
      id: 2,
      username: "SecondUser",
      password: "SecondUser",
      profilePic: "https://i.picsum.photos/id/371/300/300.jpg"
    },
    {
      id: 3,
      username: "ThirdUser",
      password: "ThirdUser",
      profilePic: "https://i.picsum.photos/id/372/300/300.jpg"
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload }
    case USER_REGISTER: 
      return { ...state, users: action.payload }
    default: return state
  }
}
export default userReducer