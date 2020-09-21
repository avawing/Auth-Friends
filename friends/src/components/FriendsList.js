import React, { useEffect } from 'react'
import Friend from './Friend'
import { Spinner } from 'reactstrap';
import {fetchFriends} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    console.log('this is state:', state)
    return{
        isLoading: state.friendReducer.isLoading,
        friends: state.friendReducer.friends,
    }
}
function FriendsList(props){
    props.fetchFriends()

    useEffect(()=>{
        props.fetchFriends()
    },[])
    return(
        <div>
        <h1>List of Friends!</h1>
        {props.isLoading ? <Spinner color = "warning" /> : null }
        {props.friends.length ? props.friends.map(friend => <Friend key = {friend.id} friend = {friend}/>) : null}
        {console.log(props.friends)}
        
        </div>

    )
}
export default connect(mapStateToProps, {fetchFriends})(FriendsList)

//mapstatetoprops
//connect fetchFriends
//make ternary