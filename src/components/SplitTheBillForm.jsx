/* eslint-disable react/prop-types */
import Button from "./Button";

export default function SplitTheBillForm({friend, totalBill, onChangeBill, yourExpense, onChangeYourExpense, friendsExpense}){
    return(
        <form className="form-split-bill">
            <h2>
                SPLIT A BILL WITH {friend}
            </h2>
            <label htmlFor="value">💰 Bill value</label>
            <input type="text" id="value" value={totalBill} onChange={e => onChangeBill(+e.target.value) }/>

            <label htmlFor="yourExpense">🧑 Your expense</label>
            <input type="text" id="yourExpense" value={yourExpense} onChange={e => onChangeYourExpense(+e.target.value)}
            />

            <label htmlFor="friendsExpense">💢 {friend}&apos;s expenses</label>
            <input type="text" value={friendsExpense} disabled />

<label htmlFor="paying">🤑 Who is paying the Bill?</label>
            <select>
                <option value="you">You</option>
                <option value="friend">{friend}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}