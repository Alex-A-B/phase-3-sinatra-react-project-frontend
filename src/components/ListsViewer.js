import CreateList from "./CreateList"
import ListCard from "./ListCard";

function ListsViewer( { lists, onAddList, onRemoveList }) {

    const listPreview = lists
        .map(( list ) => (           
            <ListCard key={list.id} list={list} onRemoveList={onRemoveList} />
             )
        )

    return (
        <div>
            <CreateList onAddList={onAddList} />
            {listPreview}
        </div>
    )

    
}

export default ListsViewer
