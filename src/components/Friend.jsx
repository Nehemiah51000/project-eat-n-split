import Button from "./Button";

/* eslint-disable react/prop-types */
export default function Friend({friend}){
    return(
        <li>
        <img src={friend.image} alt={friend.name}/>  
        <h3>{friend.name}</h3>  
        <p className={friend.balance < 0? 'red': friend.balance > 0? 'green': ''}> { friend.balance < 0 && `You owe ${friend.name } $${Math.abs(friend.balance)}`}
        { friend.balance > 0 && `${friend.name } owes you $${Math.abs(friend.balance)}`}
        { friend.balance === 0 && `You and ${friend.name } are even`}
        </p>

        <Button>Select</Button>
  </li>
    )
}