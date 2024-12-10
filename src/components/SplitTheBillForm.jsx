import Button from "./Button";

export default function SplitTheBillForm(){
    return(
        <form className="form-split-bill">
            <h2>
                SPLIT A BILL WITH ANTHONY
            </h2>
            <label htmlFor="value">💰 Bill value</label>
            <input type="text" id="value"/>

            <label htmlFor="yourExpense">🧑 Your expense</label>
            <input type="text" id="yourExpense" />

            <label htmlFor="friendsExpense">💢 Anthony expenses</label>
            <input type="text" disabled />

<label htmlFor="paying">🤑 Who is paying the Bill?</label>
            <select>
                <option value="you">You</option>
                <option value="friend">Anthony</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}