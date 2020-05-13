import { MODIFY_REPLY } from '../actionTypes'

export const modifyReply = reply => {
  return {
    type: MODIFY_REPLY,
    payload: reply
  }
}