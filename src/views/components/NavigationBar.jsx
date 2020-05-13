import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavigationBar = () => {
  const activeUser = useSelector(state => state.userReducer.loggedInUser)
  const history = useHistory()

  const userLogout = () => {
    localStorage.clear()
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={ activeUser ? activeUser.profilePic : "" }
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle"
          />{' '}
          { activeUser ? activeUser.username : "" }
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: "white" }}>HOME</Link></Nav.Link>
        </Nav>
      { !activeUser && <Link to="/login"><Button variant="outline-info">Login</Button></Link> }
      { activeUser && <Button variant="outline-info" onClick={userLogout}>Logout</Button> }
      </Navbar>
    </div>
  );
}

export default NavigationBar;
