import Button from "./Button";

export default function AddFriendForm(){
    return(
        <form className="form-add-friend">
<label htmlFor="name">👭Friend name</label>
<input type="text" id="name"/>
<label htmlFor="url">🖼Image URL</label>
<Button>Add</Button>
        </form>
    )
}