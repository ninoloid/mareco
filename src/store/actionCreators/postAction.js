import { MODIFY_POST } from '../actionTypes'

export const modifyPost = post => {
  return {
    type: MODIFY_POST,
    payload: post
  }
}