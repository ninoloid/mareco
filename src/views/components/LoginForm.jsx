import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { sign } from '../../helpers/jwt'
import Swal from 'sweetalert2'

const LoginForm = ({ type }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const users = useSelector(state => state.userReducer.users)
  const history = useHistory()
  const dispatch = useDispatch()

  const getLastIndexOfUser = () => users[users.length - 1].id + 1

  const showAlert = message => {
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error'
    })
  }

  const userLogin = event => {
    event.preventDefault()
    const findUser = users.filter(user => user.username === username)
    if (findUser.length > 0) {
      if (findUser[0].password === password) {
        localStorage.token = sign({ id: findUser[0].id, username: findUser[0].username, profilePic: findUser[0].profilePic })
        history.push("/")
      } else {
        showAlert('Wrong Password!')
      }
    } else {
      showAlert('User Not Found!')
    }
  }

  const userRegister = event => {
    event.preventDefault()
    const newUsers = [...users]
    const newUser = {
      id: getLastIndexOfUser(),
      username,
      password,
      profilePic: 'https://picsum.photos/300'
    }
    newUsers.push(newUser)
    dispatch({ type: 'USER_REGISTER', payload: newUsers })
    localStorage.token = sign({ id: newUser.id, username: newUser.username, profilePic: newUser.profilePic })
    history.push("/")
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  return (
    <Row className="loginContainer">
      <Col md="6" style={ { margin: 0, padding: 0 }} className="loginImage">
        <img src="https://picsum.photos/500" alt="loginImage" style={ { maxWidth: '100%' }}/>
      </Col>
      
      <Col md="6" className="loginForm">
        <Form style={{ width: "100%" }} onSubmit={ type === 'login' ? userLogin : userRegister }>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter email or username" onChange={handleUsernameChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter password" onChange={handlePasswordChange} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            Submit
          </Button>
          { type === "login" ? <p>Don't have account? <Link to="/register">Register here</Link></p> : <p>Have an account? <Link to="/login">Login here</Link></p>}
        </Form>
      </Col>
    </Row>
  );
}

export default LoginForm;
