import { useState } from "react"
import { useParams } from "react-router-dom"

function CreateItem( { onAddItem }) {

    const [itemName, setItemName] = useState("")
    const [itemDesc, setItemDesc] = useState("")
    
    const { listId } = useParams()

    const formValues ={
        item_name: itemName,
        item_description: itemDesc
    }
      

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/lists/${listId}/items`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => response.json())
          .then((newItem) => onAddItem(newItem));
          setItemName("")
          setItemDesc("")
      }

    return(
        <div>
        <span>Add a new item:</span>
        <form onSubmit={handleSubmit}>
            <input
               value={itemName}
                onChange={e => setItemName(e.target.value)}
                placeholder="Create a new item"
                required
            />
            <input
                value={itemDesc}
                onChange={e => setItemDesc(e.target.value)}
                placeholder="Add a description"
                />
            <button type="submit">Create</button> 
        </form>
        </div>
    )
}

export default CreateItem