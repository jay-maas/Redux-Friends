import React from 'react'
import { connect } from 'react-redux'
import { register, update } from '../actions'
import { withRouter } from 'react-router-dom'

class RegisterPage extends React.Component {
    state= {
        credentials: {
            username: '',
            password: '',
            name: '',
            age: '',
            email: ''
        },
        updateFriendCreds: {
            name: this.props.capturedFriend.name,
            age: this.props.capturedFriend.age,
            email: this.props.capturedFriend.email
        }
    }
    handleChange = e => {
        this.props.match.path === '/register' ?
            this.setState({credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }}) :
            this.setState({updateFriendCreds: {
                ...this.state.updateFriendCreds,
                [e.target.name]: e.target.value
            }})
    }
    register = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/friends')
        })
    }
    update = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        let friendCreds = this.state.updateFriendCreds
        let friendId = this.props.capturedFriend.id
        console.log( friendId ,friendCreds)
        this.props.update(friendId, friendCreds)
            .then(() => {
                this.props.history.push('/friends')
        })
    }
    render(){
        return (
            <>
                <form onSubmit={this.props.match.path === '/update' ? this.update : this.register}>
                    {this.props.match.path === '/register' && 
                    <>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    </>}
                    <input 
                        type="text"
                        name="name"
                        value={this.props.match.path === '/update' ? this.state.updateFriendCreds.name : this.state.credentials.name}
                        onChange={this.handleChange}
                        placeholder="name"
                    />
                    <input 
                        type="text"
                        name="age"
                        value={this.props.match.path === '/update' ? this.state.updateFriendCreds.age : this.state.credentials.age}
                        onChange={this.handleChange}
                        placeholder="age"
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.props.match.path === '/update' ? this.state.updateFriendCreds.email :this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="email"
                    />
                    <button>
                        {this.props.match.path === '/update' && 'Update User'}
                        {this.props.match.path === '/register' && 'Register User'}
                    </button>
                </form>
                {this.props.error && <p>{this.props.error}</p>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    updating: state.updating,
    capturedFriend: {...state.capturedFriend}
})

export default connect(
    mapStateToProps,
    { register, update }
) (withRouter(RegisterPage))