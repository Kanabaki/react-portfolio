// appears on multiple pages, with a Navigation component within
// it that uses react-router-dom to render About Me, Portfolio, 
// Contact, and Resume sections.
import Navigation from "./Navigation";

function Header () {
return (
    <header>
        <h1>Eduardo Perez</h1>
        <Navigation />
    </header>
)
}
export default Header;
// I am presented with the developer's name and navigation with titles
//  corresponding to different sections of the portfolio