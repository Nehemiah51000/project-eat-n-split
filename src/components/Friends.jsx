import Friend from "./Friend";

/* eslint-disable react/prop-types */
export default function Friends({friends}){
    return(

        <ul className="sidebar">
        {friends.map(friend=> <Friend friend={friend} key={friend.id} />)}
    
        </ul>
       
    )
}