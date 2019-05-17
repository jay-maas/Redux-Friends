import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navigation extends React.Component {
    clickHandler = () => {
        localStorage.setItem('token', null)
        this.props.history.push('/') 
    }
    render() {
        return (
            <>
                <Link to="/login">Log In</Link>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/register">Register</Link>
                <button onClick={this.clickHandler}>Log Out</button>
            </>
        )
    }
}

export default withRouter(Navigation)