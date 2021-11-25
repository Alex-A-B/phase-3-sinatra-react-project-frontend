import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import ListsViewer from "./ListsViewer"
import NavBar from "./NavBar"
import Home from "./Home"
import ListGetter from "./ListGetter";
// import CreateList from "./CreateList";


function App() {

  const [lists, setLists] = useState([])

  useEffect( () => {
      fetch("http://localhost:9292/lists")
      .then(response => response.json())
      .then(lists => setLists(lists))
      .catch(error => console.log(error))
  }, [])

  function handleAddList(newList) {setLists(lists => [...lists, newList])}

  function handleRemoveList(id) {
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  }

  // console.log(lists)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<ListsViewer lists={lists} onAddList={handleAddList} onRemoveList={handleRemoveList} />} />
        <Route path="/lists/:listId" element={<ListGetter />} />
        {/* <Route path="/create-a-list" element={<CreateWidget />} /> */}

        <Route path ="*" element={<main style={{ padding: "1rem"}}>
          <p>The URL you have used has nothing to see here!</p>
          </main>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
