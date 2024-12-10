import Button from "./Button";

/* eslint-disable react/prop-types */
export default function Friend({friend, onClick, selectedFriendId}){

    return(
        <li className={selectedFriendId === friend.id? 'selected': ''} id={friend.id}>
        <img src={friend.image} alt={friend.name}/>  
        <h3>{friend.name}</h3>  
        <p className={friend.balance < 0? 'red': friend.balance > 0? 'green': ''}> { friend.balance < 0 && `You owe ${friend.name } $${Math.abs(friend.balance)}`}
        { friend.balance > 0 && `${friend.name } owes you $${Math.abs(friend.balance)}`}
        { friend.balance === 0 && `You and ${friend.name } are even`}
        </p> 

        <Button onClick={()=> selectedFriendId === friend.id? onClick(!friend.id): onClick(friend.id)}>{selectedFriendId === friend.id? "Close":"Select"}</Button>
  </li>
    )
}