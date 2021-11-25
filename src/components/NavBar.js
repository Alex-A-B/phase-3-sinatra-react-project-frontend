import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/lists">Browse Lists</NavLink>
            {/* <NavLink to="/create-a-list">Create a List</NavLink> */}
        </nav>
    )
}

export default NavBar 