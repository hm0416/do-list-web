import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navBar">
            <div className="navbar-brand">
                <Link to="/">Do-List</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">To-Do</Link>
                <Link to="/calendar" className="nav-link">Calendar</Link>
            </div>
        </nav>
    )
}

export default NavBar;