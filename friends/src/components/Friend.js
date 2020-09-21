import React from 'react'

function Friend(props){
    const {friend} = props;
    return(
        <div>
        <h2>This is a friend!</h2>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        </div>
    )
}

export default Friend