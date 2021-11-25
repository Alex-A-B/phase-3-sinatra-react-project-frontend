import { useState } from "react"

function CreateList( { onAddList }) {

    const [listName, setListName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/lists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "list_name": `${listName}`
            }),
        })
          .then((response) => response.json())
          .then((newList) => onAddList(newList));
          setListName("")
      }

    return(
        <form onSubmit={handleSubmit}>
            <input
                value={listName}
                onChange={e => setListName(e.target.value)}
                placeholder="Create a new list"
                required
            />
            <button type="submit">Create</button> 
        </form>
    )
}

export default CreateList