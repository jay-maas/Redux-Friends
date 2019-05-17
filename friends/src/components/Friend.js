import React from 'react'

export default function Friend(props) {
    return (
        <>
            {props.friend.name}
            {props.friend.age}
            {props.friend.email}
        </>
    )
}