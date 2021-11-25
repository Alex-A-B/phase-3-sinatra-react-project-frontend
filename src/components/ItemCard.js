

function ItemCard( { item, onRemoveItem }) {
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/items/${item.id}`, {
        method: "DELETE",
         });
        onRemoveItem(item.id);
    }
    

    return (
        <li className="item-card">
            {item.item_name}
            <button onClick={handleDeleteClick}> 🗑 delete 🗑 </button>
            <ul>
                <li>{item.item_description}</li>
            </ul>
        </li>
    )
}

export default ItemCard