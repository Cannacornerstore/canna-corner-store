import { Link } from "react-router-dom"
import logo from "../../imgs/logo.png";
import "./DesktopMenu.scss"

function DesktopMenu() {
    return (
        <div className="desktop-menu">
            <div className="desktop-menu-logo">
                <img src={logo} alt="logo" />
                <h1>Canna Corner Store</h1>
            </div>

            <nav className="desktop-menu-nav">
                <div className="desktop-menu-nav-item">
                    <Link to="/">Menu</Link>
                </div>

                <div className="desktop-menu-nav-item">
                    <Link to="/pay">Pay</Link>
                </div>
            </nav>
        </div>
    );
}

export default DesktopMenu;