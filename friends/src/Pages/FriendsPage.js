import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getFriends } from '../actions'
import QuickFriendView from '../components/QuickFriendView'

class FriendsPage extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        console.log(this.props)
        return (
            <>
                Friends Page
                {this.props.friends && this.props.friends.map( friend => {
                    return <QuickFriendView friend={friend} key={friend.id} /> 
                })}
                {this.props.error && <Redirect to="/register" />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getFriends }
)(withRouter(FriendsPage))