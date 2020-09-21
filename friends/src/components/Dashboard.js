import React from 'react'
import FriendsList from './FriendsList'
import AddFriend from './AddFriend'

function Dashboard(){
    return(
        <div>
        <p>This is some very private text</p>
        <FriendsList />
        <AddFriend />
        </div>
    )
}

export default Dashboard