import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CreateItem from "./CreateItem"
import ItemCard from "./ItemCard"

function ListGetter() {
   
    const { listId } = useParams()
    const [list, setList] = useState([])
    const [items, setItems] = useState([])
    
    useEffect( () => {
        fetch(`http://localhost:9292/lists/${listId}`)
        .then(response => response.json())
        .then(list => {setList(list); setItems(list.items)})
        .catch(error => console.log(error))
         // eslint-disable-next-line
    }, [])

    function handleAddItem(newItem) {setItems(items => [...items, newItem])}

    function handleRemoveItem(id) {
        const newitems = items.filter((item) => item.id !== id);
        setItems(newitems);
      }

    if (list.length < 1) {
        return <h1> Loading... </h1>
    }
    return ( 
    <div>
        <h3>{list.list_name}</h3>
        <CreateItem onAddItem={handleAddItem} />
        <ol>
            {items?.map((item) => (<ItemCard key={item.id} item={item} onRemoveItem={handleRemoveItem} />))}
        </ol>
    </div>
    )
}

export default ListGetter

