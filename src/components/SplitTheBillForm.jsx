/* eslint-disable react/prop-types */
import Button from "./Button";

export default function SplitTheBillForm({friend}){
    return(
        <form className="form-split-bill">
            <h2>
                SPLIT A BILL WITH {friend}
            </h2>
            <label htmlFor="value">💰 Bill value</label>
            <input type="text" id="value"/>

            <label htmlFor="yourExpense">🧑 Your expense</label>
            <input type="text" id="yourExpense" />

            <label htmlFor="friendsExpense">💢 {friend}&apos;s expenses</label>
            <input type="text" disabled />

<label htmlFor="paying">🤑 Who is paying the Bill?</label>
            <select>
                <option value="you">You</option>
                <option value="friend">{friend}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}