// import { useState } from 'react'
import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import Friends from "./Friends";
import SplitTheBillForm from "./SplitTheBillForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [displayAddFriend, setDisplayAddFriend] = useState(false)
  const [displaySplitBill, setDisplaySplitBill] = useState(false)
  const [selectedFriendId, setSelectedFriendId] = useState(null)
  const[curFriendName, setCurFriendName] = useState("John")


function handleToggleAddFriend(){
  setDisplayAddFriend(!displayAddFriend)
}

function handleSplitBill(id){

  const foundFriend = initialFriends.find(friend => friend.id === id)
  setSelectedFriendId(id)

  setDisplaySplitBill(!displaySplitBill)
  setCurFriendName(foundFriend?.name || 'John')
}

  return (
    <div className="app">
      <div className="sidebar">
          <Friends friends={initialFriends}  onClick={handleSplitBill} selectedFriendId={selectedFriendId}/>

         {displayAddFriend && <AddFriendForm/>}


          <Button onClick={handleToggleAddFriend}>{displayAddFriend ? "close" : "Add friend"}</Button>
      </div>
          {displaySplitBill && <SplitTheBillForm friend={curFriendName}/>}
    </div>

  )
}

export default App
