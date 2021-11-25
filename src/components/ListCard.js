import { Link } from "react-router-dom";

function ListCard( { list, onRemoveList }) {
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/lists/${list.id}`, {
        method: "DELETE",
         });
        onRemoveList(list.id);
    }
    

    return (
        <div className="list-card">
            <Link 
              style={{ display: "block", margin: "1rem"}}
              to={`/lists/${list.id}`}
            >
              <h4>{list.list_name}</h4>
            </Link>
            <button onClick={handleDeleteClick}> 🗑 delete 🗑 </button>
        </div>
    )
}

export default ListCard