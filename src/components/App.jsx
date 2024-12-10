// import { useState } from 'react'
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

  return (
    <div className="app">
      <div className="sidebar">
          <Friends friends={initialFriends}/>

          <AddFriendForm/>

          <Button >Add friend</Button>

      </div>
           <SplitTheBillForm />
    </div>

  )
}

export default App