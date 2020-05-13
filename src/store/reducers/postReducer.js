import { MODIFY_POST } from '../actionTypes'

const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post",
      description: "<b>This</b> is the <i>first</i> of the list",
      userId: 1,
      createdAt: "2020-05-13T11:05:37.178Z"
    },
    {
      id: 2,
      title: "Second Post",
      description: "This is the second",
      userId: 2,
      createdAt: "2020-05-13T11:05:37.178Z"
    }
  ]
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODIFY_POST:
      return { ...state, posts: action.payload }
    default: return state
  }
}
export default postReducer