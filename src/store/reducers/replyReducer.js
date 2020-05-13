import { MODIFY_REPLY } from '../actionTypes'

const initialState = {
  replies: [
    {
      id: 1,
      userId: 1,
      postId: 1,
      description: "First reply",
      createdAt: "2020-05-13T11:05:37.178Z"
    },
    {
      id: 2,
      userId: 2,
      postId: 1,
      description: "Second reply",
      createdAt: "2020-05-13T11:05:37.178Z"
    }
  ]
}

const replyReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODIFY_REPLY:
      return { ...state, replies: action.payload }
    default: return state
  }
}
export default replyReducer