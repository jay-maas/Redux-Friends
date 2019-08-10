 import React from 'react'
 import { Link } from 'react-router-dom'
 
 export default function QuickFriendView(props) {
     return (
         <>
            <Link to={`/friends/${props.friend.id}`} >{props.friend.name}</Link>
         </>
     )
 }