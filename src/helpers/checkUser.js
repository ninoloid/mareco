import { useDispatch } from 'react-redux'
import { verify } from './jwt'

const checkUser = () => {
  const isLogin = localStorage.token || false

  if (isLogin) {
    const loggedInUser = verify(isLogin)
    return loggedInUser
  }
}

export default checkUser