import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{
            width: "100%",

        }}>
            <ul style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <Link key={1} className="nav-link text-light" to="/">
                    About Me
                </Link>
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    My Portfolio
                </Link>
                <Link key={3} className="nav-link text-light" to="/contact">
                    Contact Me
                </Link>
                <Link key={4} className="nav-link text-light" to="/resume">
                    Resume
                </Link>
            </ul>
        </nav>
    )
}
export default Navigation;

// I am presented with the titles About Me, Portfolio, Contact, and Resume,
//  and the title corresponding to the !!! current section is highlighted !!!
// THEN I am presented with the corresponding section below the navigation
// without the page reloading and that title is highlighted