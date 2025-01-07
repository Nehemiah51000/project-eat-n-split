// import { useState } from 'react'
import { useState } from 'react';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import Friends from './Friends';
import SplitTheBillForm from './SplitTheBillForm';
const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [displayAddFriend, setDisplayAddFriend] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [curFriend, setCurFriend] = useState({
    id: '',
    name: '',
    image: '',
    balance: 0,
  });

  function handleToggleAddFriend() {
    setDisplayAddFriend(!displayAddFriend);
  }

  function handleAddFriend(friend) {
    const nextFriends = [...friends, friend];

    setFriends(nextFriends);
    setDisplayAddFriend(false);
  }

  function handleSelectFriend(id) {
    const foundFriend = friends.find((friend) => friend.id === id);
    setSelectedFriendId(id);

    setCurFriend(foundFriend);

    setDisplayAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriendId
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriendId(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onClick={handleSelectFriend}
          selectedFriendId={selectedFriendId}
        />

        {displayAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={handleToggleAddFriend}>
          {displayAddFriend ? 'close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriendId && (
        <SplitTheBillForm
          friend={curFriend}
          onSplit={handleSplitBill}
          key={curFriend.id}
        />
      )}
    </div>
  );
}

export default App;
