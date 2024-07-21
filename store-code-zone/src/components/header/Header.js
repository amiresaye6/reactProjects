import './header.css';
function Header (props) {
    return (
        <header className="header">
            <div className="logo">{props.logo}</div>
            <div className="links">
                <ul>
                    <li><a href="https://amiralsayed.tech" target='__blank'>Home</a></li>
                    <li><a href="https://amiralsayed.tech" target='__blank'>About</a></li>
                    <li><a href="https://amiralsayed.tech" target='__blank'>Dev</a></li>
                    <li><a href="https://amiralsayed.tech" target='__blank'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;