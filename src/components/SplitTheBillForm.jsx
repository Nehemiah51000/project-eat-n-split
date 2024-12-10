/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function SplitTheBillForm({friend, onSplit}){
    const [bill, setBill] = useState('')
  const [yourExpense, setYourExpense] = useState('')
  const [paying, setPaying] = useState('you')
  let friendsExpense= bill? bill - yourExpense: ""
function handleSubmit(e){
e.preventDefault()
if(!bill || !yourExpense) return;



onSplit(paying === 'you'? friendsExpense: -friendsExpense)

setBill('')
setYourExpense('')
setPaying('you')
}


    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>
                SPLIT A BILL WITH {friend.name}
            </h2>
            <label htmlFor="value">💰 Bill value</label>
            <input type="text" id="value" value={bill} onChange={e => setBill(+e.target.value) }/>

            <label htmlFor="yourExpense">🧑 Your expense</label>
            <input type="text" id="yourExpense" value={yourExpense} onChange={e => setYourExpense(+e.target.value> bill? yourExpense: +e.target.value)}
            />

            <label htmlFor="friendsExpense">💢 {friend.name}&apos;s expenses</label>
            <input type="text" value={friendsExpense}  disabled />

<label htmlFor="paying">🤑 Who is paying the Bill?</label>
            <select value={paying} onChange={e => setPaying(e.target.value)}>
                <option value="you">You</option>
                <option value={friend.name}>{friend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}