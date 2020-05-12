const initialState = {
  posts: [
    {
      id: 1,
      title: "First Post",
      description: "This is the first of the list",
      authorId: 1,
      createdAt: "Tue May 12 2020 17:35:53 GMT+0700",
      likes: 0
    },
    {
      id: 2,
      title: "Second Post",
      description: "This is the second",
      authorId: 2,
      createdAt: "Tue May 12 2020 17:35:53 GMT+0700",
      likes: 0
    }
  ]
}

const postReducer = (state = initialState, action) => state
export default postReducer