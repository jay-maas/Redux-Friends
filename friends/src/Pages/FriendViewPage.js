 import React from 'react'
 import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getFriend, captureFriend, deleteFriend } from '../actions'
import Friend from '../components/Friend'

 class FriendViewPage extends React.Component {
     componentDidMount() {
         this.props.getFriend(this.props.match.params.id)
     }
     clickHandler = e => {
         e.preventDefault()
        this.props.captureFriend(this.props.friend)
        this.props.history.push('/update')
     }
     deleteFriend = e => {
        e.preventDefault()
        this.props.deleteFriend(this.props.friend.id)
        this.props.history.push('/friends')
     }
     render() {
        return (
            <>
               Friend View Page 
               {this.props.friend && <Friend friend={this.props.friend} />}
               {this.props.error && <Redirect to="/register" /> }
               <button onClick={this.clickHandler}>Edit Friend</button>
               <button onClick={this.deleteFriend}>Delete Friend</button>
            </>
        )
     }
 }

 const mapStateToProps = state => ({
     friend: {...state.friend},
     fetchingFriend: state.fetchingFriend,
     error: state.error
 })

 export default connect(
    mapStateToProps,
    { getFriend, captureFriend, deleteFriend }
 )(withRouter(FriendViewPage))