import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends React.Component {
    state= {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected')
        })
    }
    render(){
        return (
            <>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.isLoggingIn ? (
                                'Logging In....' 
                            ) : (
                                'Log In'
                        )}
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
})

export default connect(
    mapStateToProps,
    { login }
) (Login)