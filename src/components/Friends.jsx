import Friend from "./Friend";

/* eslint-disable react/prop-types */
export default function Friends({friends, onClick,  selectedFriendId}){
    return(

        <ul className="sidebar">
        {friends.map(friend=> <Friend friend={friend} key={friend.id} onClick={onClick} selectedFriendId={selectedFriendId}/>)}
    
        </ul>
       
    )
}